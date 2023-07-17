//lesson 3.2  Type string

//способы записи строк
// let singleQuote = "строка  в прост ковычках";
// let doubleQuote = "строка в двойных ковычках";
// let tickQuote = `строка в обрат ковычках`;

// // многострочные тексты

// let multiline1 = "строка/nc/fefre.dfr.ef//refe/";
// let multiline2 = `строка
// с
// переносами`;

// console.log(multiline2);

// lesson 3.3 type Boolean

// let yes = true;
// let no = false;

// lesson 3.4 types and compare them

// 3.5 if and else

// if(condition){
//   //код , выполнится при соблюдении условия
// }

// if(condition){
//   //код , выполнится при соблюдении условия
// } else{
//   // код выполнится в противном случае
// }

// if(condition){

// } else if(condition){

// } else if(condition){

// } else {

// }

//пример с дискреминантом

// let d = 10;

// if(d> 0){
//   // найдем x1,x2
// } else if (d === 0){
//   // найдем x1
// } else{
//   // выводим сообщение об отсутствии решений
// }

//SWITCH CASE

// let fruit = "Яблоко";

// switch (fruit) {
//   case "Яблоко":
//     console.log("Перед нами яблоко");
//     break;
//   case "Банан":
//     console.log("Перед нами Банан");
//     break;

//   default:
//     console.log("Не знаю такого фрукта");
//     break;
// }

// ternary operator

// let x = 0 ;

// if(Math.random() >0.5){
//   x = 10;
// } else {
//   x = 20;
// }

// x = Math.random() > 0.5 ? 10 : 20;

//home work

//ex1

let password = "1234-";

if (password.length > 4 && (password.includes("-") || password.includes("_"))) {
  // console.log("Пароль надёжный ");
} else {
  // console.log("Пароль недостаточно надёжный");
}

//ex2
let userName = "sergey";
let surName = "utemishev";
let convertUserName = userName[0].toUpperCase() + userName.slice(1).toLocaleLowerCase();
let convertSurName =  surName[0].toUpperCase() + surName.slice(1).toLocaleLowerCase();


  // console.log('Имя:', convertUserName);
  // console.log('Фамилия:', convertSurName);


  userName !== convertUserName ? console.log('Имя было изменено') : console.log('Имя было не изменено ');
  surName !== convertSurName ? console.log('Фамилия  было изменено') : console.log('Фамилия было не изменено ');



//ex3

let number = 31;

if (number % 2 === 0) {
  // console.log("number is even");
} else {
  // console.log("number is odd");
}
