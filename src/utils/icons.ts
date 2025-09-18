import React from 'react';

// Контекст для SVG-иконок
const reqIcons = (require as any).context('../assets/icons/monochrome/', false, /\.svg$/);

export type SvgIcon = React.FC<React.SVGProps<SVGSVGElement>>;

// Контекст для картинок: сразу учитываем webp и оригиналы
const reqImages = (require as any).context('../assets/img', false, /\.(png|jpe?g|gif|webp)$/);

export const icons: Record<string, SvgIcon> = {};
export const images: Record<string, string> = {};

// Загружаем SVG-иконки
reqIcons.keys().forEach((key: string) => {
  const name = key.replace('./', '').replace('.svg', '');
  icons[name] = reqIcons(key).default as SvgIcon;
});

// Загружаем пути к изображениям
reqImages.keys().forEach((key: string) => {
  const name = key.replace('./', '').replace(/\.(png|jpe?g|gif|webp)$/, '');
  images[name] = reqImages(key);
});

export function getAsset(
  name: string
): { type: 'icon' | 'image'; value: SvgIcon | string } | null {
  if (icons[name]) {
    return { type: 'icon', value: icons[name] };
  }
  if (images[name]) {
    return { type: 'image', value: images[name] };
  }
  return null;
}

export function getIcon(name: string): SvgIcon | null {
  return icons[name] ?? null;
}

// Возвращает webp, если есть, иначе оригинал
export function getImage(name: string): string | null {
  const webpPath = `./${name}.webp`;
  if (reqImages.keys().includes(webpPath)) {
    return reqImages(webpPath);
  }
  if (images[name]) {
    return images[name];
  }
  return null;
}

export const iconNames = Object.keys(icons);
export const imageNames = Object.keys(images);
