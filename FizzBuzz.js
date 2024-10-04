let index = [];
let isFizzBuzz = [];
let header = "\nIndex\t\t test\n=====================";
function fizzbuzz() {
  for (let i = 0; i < 100; i++) {
    index.push(i);

    if (i % 3 == 0 && i % 5 == 0 && i !== 0) {
      isFizzBuzz.push("FizzBuzz");
      console.log(i, "\t\t", isFizzBuzz[i]);
    } else if (i % 3 == 0 && i !== 0) {
      isFizzBuzz.push("Fizz");

      console.log(i, "\t\t", isFizzBuzz[i]);
    } else if (i % 5 == 0 && i !== 0) {
      isFizzBuzz.push("Buzz");

      console.log(i, "\t\t", isFizzBuzz[i]);
    } else {
      isFizzBuzz.push(i);

      console.log(i, "\t\t", isFizzBuzz[i]);
    }
  }
}
console.log(header);
console.log(fizzbuzz());
