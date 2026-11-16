// SWITCH = can be an efficient replacement to many if else statements

//Code 1

let day = 1;
switch (day) {
  case 1:
    console.log("It is Monday");
    break;

  case 2:
    console.log("It is Tuesday");
    break;

  case 3:
    console.log("It is Wednesday");
    break;

  case 4:
    console.log("It is Thursday");
    break;

  case 5:
    console.log("It is Friday");
    break;

  case 6:
    console.log("It is Saturday");
    break;

  case 7:
    console.log("It is Sunday");
    break;

  default:
    console.log(`${day} is not a day`);
}

//Code 2

let studentScore = 20;
let studentGrade;

switch (true) {
  case studentScore >= 90:
    studentGrade = "A";
    break;

  case studentScore >= 80:
    studentGrade = "B";
    break;

  case studentScore >= 70:
    studentGrade = "C";
    break;

  case studentScore >= 60:
    studentGrade = "D";
    break;

  default:
    studentGrade = "F";
}
console.log(`The Grade of a student is ${studentGrade}`);
