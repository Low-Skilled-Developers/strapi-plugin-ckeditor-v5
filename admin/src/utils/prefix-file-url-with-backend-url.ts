export function prefixFileUrlWithBackendUrl (fileURL?: string): string | undefined {
  // @ts-ignore
  return !!fileURL && fileURL.startsWith('/') ? `${window.strapi.backendURL}${fileURL}` : fileURL;
}
