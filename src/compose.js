export default function compose(...functions) {
    var composed = functions.pop();
    if (functions.length == 0) return composed;

    var current;
    while (current = functions.pop()) {
        composed = wrap(composed, current);
    } 
    return composed;

    function wrap(inner, outer) {
        return function(...args) {
            var innerResult = inner.apply(null, args);
            return innerResult.then ? innerResult.then(outer) : outer(innerResult);
        }
    }
}