import handleCountUp from './handleCounter'

export default ({ once, watchedElId, expectedClass, el, endValue, startValue, options }) => {
  const watchedEl = watchedElId ? document.getElementById(watchedElId) : el

  const interval = setInterval(() => {
    const classList = watchedEl.className.split(' ')
    const condition = classList.indexOf(expectedClass) !== -1

    handleCountUp({
      condition,
      el,
      once,
      endValue,
      startValue,
      options
    })

    if (condition && once) {
      clearInterval(interval)
    }
  }, 100)
}
