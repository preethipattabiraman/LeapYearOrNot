var chalk = require('chalk');
var readLineSync = require('readline-sync');

var error = chalk.redBright;
var prompt = chalk.yellowBright;
var green  = chalk.green;

var dob = readLineSync.question(prompt("Enter your Date of Birth in DD-MM-YYYY\n"));
var year = parseAndGetYear(dob);

if(year && checkifPrime(year)) {
  console.log(green("You are a prime! Share this to your friends!"));
}
else {
  console.log(error("Composite, you are."))
}

function parseAndGetYear(str) {
  var m = str.match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/);
  return (m) ? m[3] : null;
}

function checkifPrime(year) {
  var y = parseInt(year);
  if(y % 400 == 0 && y % 4 == 0 && y % 100 == 0) {
    return true;
  }
  return false;
}