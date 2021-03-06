export function getPosition(target: HTMLElement) {
  return {
    left: target.getBoundingClientRect().left + document.documentElement.scrollLeft,
    top: target.getBoundingClientRect().top + document.documentElement.scrollTop
  }
}
