module.exports = function promiseDelay(ms) {
  return new Promise(function(res) {
    setTimeout(res, ms);
  });
}