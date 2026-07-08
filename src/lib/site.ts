export function getSiteUrl() {
  const fromEnv = import.meta.env.VITE_SITE_URL;
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }

  if (typeof process !== "undefined" && process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "";
}

export function absoluteUrl(path: string) {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  const siteUrl = getSiteUrl();
  if (!siteUrl) {
    return path;
  }

  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
