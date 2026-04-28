import type { CSSProperties } from 'vue';

/**
 * Resolve urls from frontmatter and append with the base url
 */
export function resolveAssetUrl(url: string) {
  if (url.startsWith('/')) {
    // base url does not end with "/" when building, see scripts/build.ts
    // but ends (or just is "/") in dev, so we need to handle both cases
    let baseUrl = import.meta.env.BASE_URL;
    if (baseUrl.endsWith('/')) baseUrl = baseUrl.slice(0, -1);
    return baseUrl + url;
  }
  return url;
}

export function handleBackground(
  background?: string,
  dim = false,
): CSSProperties {
  const isColor =
    background && ['#', 'rgb', 'hsl'].some((v) => background.indexOf(v) === 0);

  const style = {
    background: isColor ? background : undefined,
    color: background && !isColor ? 'white' : undefined,
    backgroundImage: isColor
      ? undefined
      : background
        ? dim
          ? `linear-gradient(#0005, #0008), url(${resolveAssetUrl(background)})`
          : `url("${resolveAssetUrl(background)}")`
        : undefined,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  if (!style.background) delete style.background;

  return style;
}
