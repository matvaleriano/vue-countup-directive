import CountUpJS from 'countup.js'

export default ({ startValue = 0, endValue, el, options = {} }) => {
  const { decimals = 0, duration = 2 } = options
  const counter = new CountUpJS(
    el,
    startValue,
    endValue,
    decimals,
    duration,
    options
  )

  if (!counter.error) {
    counter.start()
  } else {
    console.error(counter.error)
  }
}
