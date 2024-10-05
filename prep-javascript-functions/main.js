function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const sum = addTwoNumbers(2, 2);
console.log('value of sum', sum);

function convertHoursToMinutes(hours) {
  const result = hours * 60;
  return result;
}

const minutes = convertHoursToMinutes(3);
console.log('How many minutes:', minutes);

function getGreeting(name) {
  const result = 'Hello ' + name + '!';
  return result;
}
console.log(getGreeting('thank you'));

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
console.log(addAndMultiplyBy5(1, 2));

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const productDividedByFive = multiplyAndDivideBy5(10, 2);
console.log('Answer:', productDividedByFive);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const difference = subtractTwoNumbers(10, 5);
console.log('Answer:', difference);

function getCircleCircumference(radius) {
  return radius * 2 * 3.14;
}
console.log('Circumference Equals:', getCircleCircumference(3));

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
console.log('Full name is:', getFullName('Valentina', 'Osorio'));

function cube(number) {
  return number * number * number;
}
console.log('6 cubed equals:', cube(6));
