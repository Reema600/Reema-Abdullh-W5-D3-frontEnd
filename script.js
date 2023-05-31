
// بتخزين اسمك الثلاثي في ثلاث متغيرات (الاسم الأول , اسم الاب , العائلة)
let firstName = "Reema";
let middleName = "Abdullah";
let lastName = "Alsughayyir";
//كتابة مثالين على الثوابت
const email = "reema@hotmail.com";
const address = "1212";
console.log(
  firstName,
  " ",
  middleName,
  " ",
  lastName,
  " ",
  email,
  " ",
  address
);
//typeof
console.log(typeof firstName, middleName, lastName, email, address);
//Arguments
function printMessageWithParam(firstName, middleName, lastName) {
  console.log(firstName, middleName, lastName);
}
console.log("Full Name:" + firstName + " " + middleName + " " + lastName);
//loop from 1 to 20
for (let i = 2; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
//اكتب دالة تقوم بجمع رقمين و هل الناتج اكبر من 100

let num1 = 50;
let num2 = 60;

function sum(num1, num2) {
  return num1 + num2;
}
if (sum>100) {
  console.log("biger then 100");
} 
else {
  console.log("less then 100");
}
//اكتب دالة لكل من العمليات الحسابية التاية ( *,/,+,-)

// let numb1 = 3;
// let numb2 = 2;
function result(num1, num2) {
  let plus = num1 + num2;
  let minus = num1 - num2;
  let mult = num1 * num2;
  let divid = num1 / num2;
  console.log("(+):" + plus + "(-):" + minus + "(*):" + mult + "(/):" + divid);
}
result(1,2)

//اكتب دالة تقوم بحساب متوسط رقمين 
function avrege(num1,num2){
  let summ =num1+num2;
  let result= summ/2;
  console.log("The result is"+result);
}
avrege(1,2)

//اكتب دالة تقوم بحساب القيمة المضافة (0.015) .
const vatfun = (price) => {
  const vat = 0.15;
  const total = price + price * vat;
  console.log( "vat is : "+total);
};
vatfun(300)

//باستعمل Switch statement حدد اذا العدد زوجي او فردي او صفر .

const isnum = (num) => {
  switch (num % 2) {
    case 0:
      console.log("The number is even");
      break;
    case 1:
      console.log("The number is odd");
      break;
    default:
      console.log("error");
      break;
  }
};
isnum(4)

//باستعمل if else قم بتحديد التقدير حسب الدرجة بالمعطيات التالية 
const Grade = (grade) => {
  if (grade >= 95) {
    console.log("A+");
  } else if (grade >= 90) {
    console.log("A");
  } else if (grade >= 85) {
    console.log("B+");
  } else if (grade >= 80) {
    console.log("B");
  } else if (grade >= 75) {
    console.log("C+");
  } else if (grade >= 70) {
    console.log("C");
  } else if (grade >= 65) {
    console.log("D+");
  } else if (grade >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
};
Grade(100)

//باستعمال for loop  احسب تربيع الاعداد من 1 - 10.
let numm = 0;
for (let i = 1; i <= 10; i++) {
  i
    console.log(i**2);
  }

//باستعمال loop قم بطباعة الاعداد الفردية من 1 - 20 .
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
//اكتب دالة تقوم بحساب بحويل العمر من سنوات الى ايام 
const age = (age) => {
  const days = age * 365;
  console.log("Age in days: "+days);
 
};
age(1)

//السنة الميلادية كبيسة : (leap year )
const Year = (year) => {
  if (year % 4 === 0 && year % 100 !== 0) {
    console.log("leap year");
  } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    console.log("leap year");
  } else {
    console.log("not a leap year");
  }
};
Year(2000)
//loop
for (let i = 1; i <= 8; i++) {
  let w =" ";
  for (let j = 1; j <= i; j++) {
    w+=j+" ";
  }
  console.log(w);
}

//باستعمال loops قم بطباعة الاعداد الزوجيه الموجودة في نطاق من 25- الى 0
for (let i = 2; i <= 25; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}