for (var i = 1; i <= 100; i++) {
  var restoTre = i % 3;
  var restoCinque = i % 5;
  if ((restoTre == 0) && (restoCinque == 0)) {
    console.log("FizzBuzz");
  } else if ((restoTre == 0) && (restoCinque != 0)) {
    console.log("Fizz");
  } else if ((restoTre != 0) && (restoCinque == 0)) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
