import React from 'react';

const reqIcons = (require as any).context('../assets/icons', false, /\.svg$/);

export type SvgIcon = React.FC<React.SVGProps<SVGSVGElement>>;

const reqImages = (require as any).context('../assets/img', false, /\.(png|jpe?g|gif)$/);

export const icons: Record<string, SvgIcon> = {};
export const images: Record<string, string> = {};

reqIcons.keys().forEach((key: string) => {
  const name = key.replace('./', '').replace('.svg', '');
  icons[name] = reqIcons(key).default as SvgIcon;
});

reqImages.keys().forEach((key: string) => {
  const name = key.replace('./', '').replace(/\.(png|jpe?g|gif)$/, '');
  images[name] = reqImages(key);
});

export function getAsset(name: string): { type: 'icon' | 'image'; value: SvgIcon | string } | null {
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

export function getImage(name: string): string | null {
  return images[name] ?? null;
}

export const iconNames = Object.keys(icons);
export const imageNames = Object.keys(images);
