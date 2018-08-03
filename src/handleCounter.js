import countUp from './counter'

export default ({ condition, startValue = 0, endValue, el, once, options }) => {
  const innerTextIsStartValue = el.innerText === startValue.toString()
  const innerTextIsEndValue = el.innerText === endValue.toString()

  if (condition && innerTextIsStartValue) {
    countUp({ startValue, endValue, el, options })
  } else if (!once && innerTextIsEndValue) {
    el.innerText = startValue
  }
}
