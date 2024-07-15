//Activity-1: If-Else Statements:

//Task-1: Write a program to check if a number is positive, negative or zero and log the result.

function checkNumber(num) {
  if (Math.sign(num) === -1) {
    console.log("The number is negative");
  } else if (Math.sign(num) === 0) {
    console.log("The number is zero");
  } else {
    console.log("The number is positive");
  }
}
checkNumber(-5);
checkNumber(100);
checkNumber(0);

//Task-2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

function isAbleToVote(age) {
  if (age >= 18) {
    console.log("You are eligible to vote");
  } else {
    console.log("You are not eligible to vote");
  }
}
isAbleToVote(17);
isAbleToVote(20);

//Activity-2: Nested If-Else Statements:

//Task-3: Write a program to find the largest of three numbers using nested if-else statements.

function nestedCheck(num1, num2, num3) {
  if (num1 > num2) {
    if (num1 > num3) {
      console.log(`${num1} is greater of all three numbers`);
    } else {
      console.log(`${num3} is greater of all three numbers`);
    }
  } else if (num2 > num3) {
    console.log(`${num2} is greater of all three numbers`);
  } else {
    console.log(`${num3} is greater of all three numbers`);
  }
}

nestedCheck(5, 4, 3);
nestedCheck(10, 12, 9);
nestedCheck(7, 13, 15);

//Activity-3: Switch Case

//Task-4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

function weekdayCheck(dayNumber) {
  switch (dayNumber) {
    case 0:
      console.log("Sunday");
      break;
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    default:
      console.log("It's a holiday");
      break;
  }
}
weekdayCheck(0);
weekdayCheck(8);
weekdayCheck(5);

//Task-5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'E', 'F') based on score and log the grade to the console.

function scoreCheck(score) {
  let grade;

  switch (true) {
    case score >= 90 && score <= 100:
      grade = "A";
      break;
    case score >= 80 && score < 90:
      grade = "B";
      break;
    case score >= 70 && score < 80:
      grade = "C";
      break;
    case score >= 60 && score < 70:
      grade = "D";
      break;
    case score >= 50 && score < 60:
      grade = "E";
      break;
    case score >= 0 && score < 50:
      grade = "F";
      break;
    default:
      grade = "Invalid score";
  }

  console.log(grade);
}

scoreCheck(85);
scoreCheck(25);
scoreCheck(110);

//Activity-4: Conditional (Ternary) Operator:

//Task-6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

function isEvenOrOdd(num) {
  num % 2 === 0
    ? console.log("The number is even")
    : console.log("The number is odd");
}
isEvenOrOdd(5);
isEvenOrOdd(10);

//Activity-5: Combining Conditions:

//TAsk-7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

function isLeapYear(year) {
  if (year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)) {
    console.log("The year is a leap year");
  } else {
    console.log("The year is not a leap year");
  }
}
isLeapYear(1996);
isLeapYear(2009);
