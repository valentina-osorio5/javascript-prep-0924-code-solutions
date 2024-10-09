/* Your JS goes in this file */
function isAdult(age) {
  if (age >= 18) {
    return 'true';
  } else {
    return 'false';
  }
}

const isAdultResult = isAdult(18);
console.log('isAdultResult :', isAdultResult);
console.log('Additional Test Is 16 An Adult:', isAdult(16));
console.log('Additional Test Is 14 An Adult:', isAdult(14));

function didStudentPass(score) {
  if (score >= 70) {
    return 'true';
  } else {
    return 'false';
  }
}
const didStudentPassResult = didStudentPass(95);
console.log('didStudentPassResult:', didStudentPassResult);
console.log('Additional Test 85 Did They Pass?:', didStudentPass(85));
console.log('Additional Test 65 Did They Pass?:', didStudentPass(65));

function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else if (score > 100) {
    return 'A++';
  }
}

const gradeCalculatorResult = gradeCalculator(85);
console.log('gradeCalculatorResult:', gradeCalculatorResult);
console.log("Additional Test 65 What's Their Grade?:", gradeCalculator(65));
console.log("Additional Test 75 What's Their Grade?:", gradeCalculator(75));
console.log("Additional Test 95 What's Their Grade?:", gradeCalculator(95));
console.log("Additional Test 105 What's Their Grade?:", gradeCalculator(105));

function seasonMessenger(season) {
  if (season === 'summer') {
    return 'it is hot today';
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return 'it is cold today';
  } else {
    return 'please enter a valid season';
  }
}
const seasonMessengerResult = seasonMessenger('autumn');
console.log('seasonMessengerResult:', seasonMessenger('autumn'));
console.log("Additional Test How's The Weather:", seasonMessenger('summer'));
console.log("Additional Test How's The Weather:", seasonMessenger('spring'));

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'have a good weekend!';
  } else {
    return 'It is a weekday!';
  }
}
const dayDetectorResult = dayDetector('tuesday');
console.log('Tuesday dayDetectorResult:', dayDetectorResult);
console.log(
  'Saturday Additional Test What day is it?:',
  dayDetector('saturday')
);
console.log('Monday Additional Test What day is it?:', dayDetector('monday'));
