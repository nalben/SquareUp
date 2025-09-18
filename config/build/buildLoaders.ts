import path from 'path';
import { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/types';
import { LoaderContext } from 'webpack';
import { buildBabelLoader } from './babel/buildBabelLoader';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development';

    // --- Ассет для изображений (PNG/JPG/GIF) ---
    // На проде файлы будут конвертированы в WebP плагином, overrideExtension: true
        const assetLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        include: path.resolve(__dirname, '../../src/assets/img'),
        type: 'asset/resource',
        generator: {
            // все изображения будут с расширением .webp
            filename: 'img/[name].[contenthash:8].webp',
        },
    };

    // --- SVG через SVGR ---
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
                            { name: 'convertColors', params: { currentColor: true } },
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
                        plugins: [{ name: 'convertColors', active: false }],
                    },
                },
            },
        ],
    };

    // --- SCSS/CSS ---
    const cssLoaderWithModules = {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
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

    const cssLoaderExternal = {
        test: /\.css$/i,
        exclude: path.resolve(__dirname, '../../src'),
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
        ],
    };

    // --- Babel ---
    const BabelLoader = buildBabelLoader(options);

    return [
        assetLoader,       // PNG/JPG/GIF
        svgrLoaderMono,    // SVG monochrome
        svgrLoaderColored, // SVG colored
        scssLoader,
        cssLoaderExternal,
        BabelLoader,
    ];
}
