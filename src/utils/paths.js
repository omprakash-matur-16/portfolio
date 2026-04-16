export const resolveAsset = (path) => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const finalPath = cleanPath.startsWith('portfolio/assets/') ? cleanPath.replace('portfolio/assets/', 'assets/') : cleanPath;
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  return `${normalizedBase}${finalPath}`;
};
