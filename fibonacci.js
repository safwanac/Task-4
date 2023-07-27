function fibonacciSeries(n) {
  var fib = [];
  if (n >= 1) {
    fib.push(0);
  }
  if (n >= 2) {
    fib.push(1);
  }
  for (var i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

var n = 10;
var series = fibonacciSeries(n);
console.log(series);
