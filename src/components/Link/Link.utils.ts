export const isExternalLink = (url: string) => {
  const anchor = document.createElement('a')
  anchor.href = url
  return anchor.host !== window.location.host
}
