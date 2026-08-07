const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * Returns the correct asset path, prefixing the basePath if set (e.g. for GitHub Pages).
 */
export function getAssetPath(src: string): string {
  if (!src) return "";
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:")) {
    return src;
  }
  const cleanSrc = src.startsWith("/") ? src : `/${src}`;
  return `${basePath}${cleanSrc}`;
}
