# CHANGELOG

## v1.1
* Adding componentUpdate hook to verify binding values update
* Fix bug: startValue param was not included on call function

### v1.1.1
* Fix bug: binding is not defined

## v1.2
* Adding build command
* Minify files

### v1.2.1
  * fix minify commands

### v1.2.2
  * fix [#5](https://github.com/mathvaleriano/vue-countup-directive/issues/5) (oldvalue is not defined)

### v1.2.3
  * added eslint
  * added husky
    * precommit was configured (its running `npm run lint`)