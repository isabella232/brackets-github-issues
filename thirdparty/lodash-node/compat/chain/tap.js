/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * This method invokes `interceptor` and returns `value`. The interceptor is
 * bound to `thisArg` and invoked with one argument; (value). The purpose of
 * this method is to "tap into" a method chain in order to perform operations
 * on intermediate results within the chain.
 *
 * @static
 * @memberOf _
 * @category Chain
 * @param {*} value The value to provide to `interceptor`.
 * @param {Function} interceptor The function to invoke.
 * @param {*} [thisArg] The `this` binding of `interceptor`.
 * @returns {*} Returns `value`.
 * @example
 *
 * _([1, 2, 3])
 *  .tap(function(array) { array.pop(); })
 *  .reverse()
 *  .value();
 * // => [2, 1]
 */
function tap(value, interceptor, thisArg) {
  interceptor.call(thisArg, value);
  return value;
}

module.exports = tap;