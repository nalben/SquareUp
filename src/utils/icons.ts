import React from 'react';

// Контекст для SVG
const reqIcons = (require as any).context('../assets/icons/monochrome/', false, /\.svg$/);
export type SvgIcon = React.FC<React.SVGProps<SVGSVGElement>>;

// Контекст для всех картинок (png/jpg/gif/webp)
const reqImages = (require as any).context('../assets/img', false, /\.(png|jpe?g|gif|webp)$/);

export const icons: Record<string, SvgIcon> = {};
export const images: Record<string, string> = {};

// Загружаем SVG
reqIcons.keys().forEach((key: string) => {
  const name = key.replace('./', '').replace('.svg', '');
  icons[name] = reqIcons(key).default as SvgIcon;
});

// Загружаем картинки
reqImages.keys().forEach((key: string) => {
  const name = key.replace('./', '').replace(/\.(png|jpe?g|gif|webp)$/, '');
  images[name] = reqImages(key);
});

export function getIcon(name: string): SvgIcon | null {
  return icons[name] ?? null;
}

// Универсальная функция getImage
export function getImage(name: string): string | null {
  const isProd = process.env.NODE_ENV === 'production';

  if (!images[name]) return null;

  // На проде заменяем расширение на webp, если файл webp реально есть
  if (isProd) {
    const webpKey = `./${name}.webp`;
    if (reqImages.keys().includes(webpKey)) {
      return reqImages(webpKey); // WebP путь с хэшем
    }
  }

  // Dev fallback — оригинальный формат
  return images[name];
}

export const iconNames = Object.keys(icons);
export const imageNames = Object.keys(images);
