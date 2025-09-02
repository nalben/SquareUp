import React from 'react';

// создаем контекст для всех SVG в папке icons
const req = (require as any).context('../assets/icons', false, /\.svg$/);

// тип для компонента SVG
export type SvgIcon = React.FC<React.SVGProps<SVGSVGElement>>;

// объект иконок: ключ — имя файла без .svg, значение — React-компонент
export const icons: Record<string, SvgIcon> = {};

req.keys().forEach((key: string) => {
  const name = key.replace('./', '').replace('.svg', '');
  icons[name] = req(key).default as SvgIcon;
});

// получить иконку по имени
export function getIcon(name: string): SvgIcon | null {
  return icons[name] ?? null;
}

// массив всех имен иконок
export const iconNames = Object.keys(icons);
