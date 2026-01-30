// Utility to get the correct asset path for both local dev and production
export const getAssetPath = (path: string): string => {
    const basePath = process.env.NODE_ENV === 'production' ? '/-Thumsbtack-' : '';
    return `${basePath}${path}`;
};
