# vue-countup-directive
[NPM](https://www.npmjs.com/package/vue-countup-directive)

Thanks [@inorganik](https://github.com/inorganik) for create [countUp.js](http://inorganik.github.io/countUp.js/)

## Installation
```npm install --save vue-countup-directive```

## Setup Vue Project
##### (directives/countup.js)
```
import Vue from 'vue'
import options from 'vue-countup-directive'

Vue.directive('countUp', options)
```

## Setup Nuxt Project
##### (~/plugins/countUp.js)
```
import Vue from 'vue'
import options from 'vue-countup-directive'

Vue.directive('countUp', options)
```
##### (nuxt.config.js)
```
plugins: [
    ...
    { src: '~plugins/countUp.js', ssr: false }
],
```

## Usage
This directive can be used with [countUp.js](http://inorganik.github.io/countUp.js/) options.

You can include the **number of decimals** and the **animation duration** (seconds) at the options paramater. The default is ```{ options: { decimals: 0, duration: 2 } }```

The Animation runs once if you set a **once** modifier at the directive otherwise the animation always run after the conditions passed.

## > onClassChange
Create an interval that watches for the class changes at **element** or the **watchedElement** (defined by **watchedElId** parameter)

If once modifier is setted the interval will be clear after once animation

### Example:
Once
```
<span v-countUp:onClassChange.once="{ startValue: 0, endValue: 120, expectedClass: 'active', options: { duration: 1 } }">
```

Many times
```
<span v-countUp:onClassChange="{ startValue: 0, endValue: 120, expectedClass: 'active', options: { duration: 1 } }">
```

Look for changes at another element
```
<span id="watchedElementId">Watched Element</span>

<span v-countUp:onClassChange="{ watchedElId: 'watchedElementId', startValue: 0, endValue: 120, expectedClass: 'active', options: { duration: 1 } }">
```

With decimals
```
<span v-countUp:onClassChange="{ startValue: 0.35, endValue: 120.95, expectedClass: 'active', options: { duration: 1, decimals: 2 } }">
```

## > onWindowScroll
Create a window scroll listener.

The animation runs if the position Y of window scroll is bigger than or equals **watched element** position (passed at the watchedElId parameter).

If not passed **watchedElId**, the **own element** will be setted like the **watchedElId**

### Example:

Once
```
<span id="watchedElementId">Watched Element</span>

<span v-countUp:onWindowScroll.once="{ watchedElId: 'watchedElementId', startValue: 0, endValue: 120, options: { duration: 1 } }">
```

Many Times
```
<span id="watchedElementId">Watched Element</span>

<span v-countUp:onWindowScroll.once="{ watchedElId: 'watchedElementId', startValue: 0, endValue: 120, options: { duration: 1 } }">
```

No watchedElId passed
```
<span v-countUp:onWindowScroll.once="{ startValue: 0, endValue: 120, options: { duration: 1 } }">
```

With decimals
```
<span v-countUp:onWindowScroll="{ startValue: 0.35, endValue: 120.95, options: { duration: 1, decimals: 2 } }">
```

## No Arg
Start a countUp animation immediately

```
<span v-countUp="{ startValue: 0.35, endValue: 120.95, options: { duration: 1, decimals: 2 } }">
```

