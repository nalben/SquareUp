import path from 'path';
import { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/types';
import ReactRefreshTypescript from 'react-refresh-typescript';
import { buildBabelLoader } from './babel/buildBabelLoader';
import { LoaderContext } from 'webpack';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {

    const isDev = options.mode === 'development';

    const path = require('path');

    const assetLoader = { test: /\.(png|jpe?g|gif|svg)$/i, 
        include: path.resolve(__dirname, '../../src/assets/img'),
        type: 'asset/resource', };


    const svgrLoaderMono = {
        test: /\.svg$/i,
        include: path.resolve(__dirname, '../../src/assets/icons/monochrome'),
        use: [
            {
            loader: '@svgr/webpack',
            options: {
                icon: false,
                svgoConfig: {
                plugins: [
                    {
                    name: 'convertColors',
                    params: { currentColor: true }, // перекрашиваемые иконки
                    },
                ],
                },
            },
            },
        ],
    };

    const svgrLoaderColored = {
        test: /\.svg$/i,
        include: path.resolve(__dirname, '../../src/assets/icons/colored'),
        use: [
            {
            loader: '@svgr/webpack',
            options: {
                icon: false,
                svgoConfig: {
                plugins: [
                    { name: 'convertColors', active: false }, // сохраняем исходные цвета
                ],
                },
            },
            },
        ],
    };


    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            },
        },
    };

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            cssLoaderWithModules,
            {
                loader: 'sass-loader',
                options: {
                    additionalData: (content: string, loaderContext: LoaderContext<any>) => {
                        const skipFiles = ['functions.scss'];
                        if (skipFiles.some(f => loaderContext.resourcePath.endsWith(f))) {
                            return content;
                        }

                        return `
                            @import "@/styles/functions.scss";
                            ${content}
                        `;
                    },
                },
            },
        ],
    };

    // новый loader для обычного CSS (node_modules)
    const cssLoaderExternal = {
        test: /\.css$/i,
        exclude: path.resolve(__dirname, '../../src'), // исключаем свои локальные файлы
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader', // без модулей
        ],
    };


    const BabelLoader = buildBabelLoader(options);

    return [
        assetLoader,
        svgrLoaderMono,
        svgrLoaderColored,
        scssLoader,
        cssLoaderExternal,
        BabelLoader,
    ];
}
