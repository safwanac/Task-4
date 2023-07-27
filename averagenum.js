function calculateAverage(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total / numbers.length;
}

var numbers = [1, 2, 3, 4, 5];
var average = calculateAverage(numbers);
console.log("The average is: " + average);
