import counter from './counter'
import onWindowScroll from './onWindowScroll'
import onClassChange from './onClassChange'

export const LISTENERS = {
  onWindowScroll: 'onWindowScroll',
  onClassChange: 'onClassChange'
}

const bindingValuesAreEquals = ({ oldValue, value }) => (
  JSON.stringify(oldValue) === JSON.stringify(value)
)

const executeCounter = (el, verifyBindingUpdate = false) => ({ arg, value, oldValue, modifiers = {} }) => {
  if (verifyBindingUpdate && bindingValuesAreEquals({ value, oldValue })) {
    return
  }

  const { once } = modifiers

  if (value) {
    const { startValue = 0, endValue, watchedElId, options } = value
    el.innerText = startValue

    switch (arg) {
      case LISTENERS.onWindowScroll:
        onWindowScroll({ once, el, watchedElId, endValue, startValue, options })
        break
      case LISTENERS.onClassChange:
        const { expectedClass } = value

        onClassChange({ once, watchedElId, expectedClass, el, endValue, startValue, options })
        break
      default:
        counter({ startValue, endValue, el, options })
    }
  } else {
    throw new Error('Pass a value to CountUp directive')
  }
}

export default {
  inserted(el, binding) {
    executeCounter(el)(binding)
  },
  componentUpdated (el, binding) {
    executeCounter(el, true)(binding)
  }
}
