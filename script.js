//Write a function that takes in a number of earth days, and returns the number of orbits the moon can perform given days.
//moonOrbits(54) => 2
//moonOrbits(365) => 13.359

function moonOrbits(earthDays) {
  const lunarOrbitPeriod = 27.3;
  return earthDays / lunarOrbitPeriod;
  //return Math.floor((days / ORBIT) * 1000) / 1000;
}

console.log(moonOrbits(54)); // ans - 1.9780219780219779
console.log(moonOrbits(365)); // ans - 13.36996336996337

//Write a function that takes the radius of a circle and return its area.
// Write a function that takes the radius of a circle and return its perimeter.
// circleArea(10) => 314.16
// circlePerimeter(10) => 62.83

function circleArea(radius) {
  const pi = Math.PI;
  return pi * radius * radius;
}

function circlePerimeter(radius) {
  const pi = Math.PI;
  return 2 * pi * radius;
  //return (MATH.PI * radius ** 2).toFixed(2);
}

console.log(circleArea(10)); // ans - 314.1592653589793
console.log(circlePerimeter(10)); // ans - 62.83185307179586

//Create a function that takes your age in years and returns your age in days.
// Create a function that takes your age in years and returns your age in seconds.
// ageInDays(32) => 11680
// ageInSeconds(32) => 1009152000

function ageInDays(years) {
  const daysPerYear = 365;
  return years * daysPerYear;
}

function ageInSeconds(years) {
  const secondsPerMinute = 60;
  const MinutePerHour = 60;
  const HourPerDay = 24;
  const daysPerYear = 365;
  return years * daysPerYear * HourPerDay * MinutePerHour * secondsPerMinute;
}

console.log(ageInDays(32)); //ans - 11680
console.log(ageInSeconds(32)); // ans - 1009152000

// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
// remainder(1, 3) ➞ 1
// remainder(3, 4) ➞ 3
// remainder(-9, 45) ➞ -9
// remainder(5, 5) ➞ 0

function remainder(dividend, devisor) {
  return dividend % devisor;
}

console.log(remainder(1, 3)); // ans - 1
console.log(remainder(3, 4)); // ans - 3
console.log(remainder(-9, 45)); // ans - -9
console.log(remainder(5, 5)); // ans - 0

//You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

function calculatePoints(twoPointers, threePointers) {
  return (2 * twoPointers) + (3 * threePointers);
}

console.log(calculatePoints(4, 9)); // Ans - 35

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37
// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117
// lessThan100(3, 77) ➞ true

function lessThan100(num1, num2) {
  return num1 + num2 < 100;
}

console.log(lessThan100(22, 15)); // ans - true
console.log(lessThan100(83, 34)); // ans - false
console.log(lessThan100(3, 77)); // ans - true
