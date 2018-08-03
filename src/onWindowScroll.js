import handleCountUp from './handleCounter'

export const getElOffsetY = (el) => {
  const { top } = el ? el.getBoundingClientRect() : {}
  const bodyTop = document.body.getBoundingClientRect().top
  const position = top + bodyTop

  return position && !isNaN(position) ? position : null
}

export default ({ once, startValue, endValue, el, parent, options }) => {
  const parentPosition = getElOffsetY(parent)

  window.addEventListener('scroll', function listener() {
    const condition = window.scrollY >= Math.ceil(parentPosition)
    handleCountUp({
      condition,
      el,
      once,
      endValue,
      startValue,
      options
    })
    if (condition && once) {
      window.removeEventListener('scroll', listener)
    }
  })
}
