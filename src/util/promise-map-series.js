module.exports = function promiseMapSeries(array, fn) {
  var len = array.length;
  var promises = new Array(len);
  var last = Promise.resolve();

  for (var i = 0; i < len; i++) {
    promises[i] = last.then(function() {
      return fn(val, i, array);
    });
  }

  return Promise.all(promises);
};
