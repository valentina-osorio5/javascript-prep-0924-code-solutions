// create your loops here.

function whileLoop1() {
  const arrayToReturn = [];
  let index = 0;
  while (index < 10) {
    arrayToReturn.push(index);
    index++;
  }
  return arrayToReturn;
}

console.log('whileLoop1 output', whileLoop1());

const whileLoop1Result = whileLoop1();
console.log('While Loop 1 Result:', whileLoop1());

function whileLoop2() {
  const arrayToReturn2 = [];
  let index = 0;
  while (index < 19) {
    arrayToReturn2.push(index);
    index += 2;
  }
  return arrayToReturn2;
}

const whileLoop2Result = whileLoop2();
console.log('whileLoop2Result:', whileLoop2Result);

function forLoop1() {
  const arrayToReturn3 = [];
  for (let i = 0; i < 10; i++) {
    arrayToReturn3.push(i);
  }
  return arrayToReturn3;
}
const forLoop1Result = forLoop1();
console.log('forLoop1Result:', forLoop1());

function forLoop2() {
  for (let i = 100; i > 0; i--) {
    console.log('Time to explosion:' + i + '!');
  }
}
forLoop2();

function forInLoop1(object) {
  const arrayToReturn4 = [];
  for (const key in object) {
    arrayToReturn4.push(key);
  }
  return arrayToReturn4;
}
const object = {
  name: 'Ada Lovelace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

const forInLoop1Result = forInLoop1(object);
console.log('forInLoop1Result:', forInLoop1(object));

function forInLoop2(object) {
  const arrayToReturn5 = [];
  for (const key in object) {
    arrayToReturn5.push(object[key]);
  }
  return arrayToReturn5;
}
const forInLoop2Result = forInLoop2(object);
console.log('forInLoop2Result:', forInLoop2Result);
