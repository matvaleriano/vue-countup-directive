import counter from '../src/counter'
import onWindowScroll from './src/onWindowScroll'
import onClassChange from './src/onClassChange'

export const LISTENERS = {
  onWindowScroll: 'onWindowScroll',
  onClassChange: 'onClassChange'
}

export default {
  inserted(el, binding) {
    const { arg, modifiers = {}, value } = binding
    const { once } = modifiers

    if (value) {
      const { startValue, endValue, options } = value
      el.innerText = startValue

      switch (arg) {
        case LISTENERS.onWindowScroll:
          const { parentId } = value
          const parent = document.getElementById(parentId)

          onWindowScroll({ once, el, parent, endValue, options })
          break
        case LISTENERS.onClassChange:
          const { watchedElId, expectedClass } = value

          onClassChange({ once, watchedElId, expectedClass, el, endValue, options })
          break
        default:
          counter({ startValue, endValue, el, options })
      }
    } else {
      throw new Error('Pass a value to CountUp directive')
    }
  }
}
