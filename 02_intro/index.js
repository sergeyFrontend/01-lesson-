
//INFORMATION FROM LESSON


// // let a = 25;
// // let b = 25.01;
// // let exp = 1e10;
// // let expSmall = 2e-3;

// // let x = 10 + 5;
// // let min = 10-5;
// // let mul = 10 * 2;
// // let devi =  10 / 2;

// //получение абсолютного (полож) знач числа
// Math.abs(-20); //20
// Math.abs(20); //20

// // ЧИСЛО Pi, синус , косинус, тангенс , арктангенс

// Math.sin(Math.PI / 2); //1 , синус 90 градусов
// Math.cos(Math.PI * 2); // 1, косинус 360 градусов
// Math.tan(0); //0, тангенс 0 градусов
// Math.atan(0); // 0 , арктангенс 0 градусов

// Math.log(Math.E); // 1;

// //округление
// Math.round(3.8); //4, математическое округление
// Math.round(3.2); //3
// Math.round(3.5); //4
// Math.floor(3.9); //3. округление вниз
// Math.ceil(3.2); //4, округление вверх

// Math.max(10, 11, 12, 1); //12
// Math.min(1, 2, 3, -6); //-6







// HOME WORK

//ex.1

let x1 = 5;
let x2 = 8;

let y1= 11;
let y2 = 9;

const width = Math.abs(x2-x1);
const height = Math.abs(y2-y1);
const area = width * height;

console.log('площадь прямоугольника равна:',area)


//ex.2

let a = 13.123456789;
let b = 13.123456789;
let precision = 2;


let firstNum = a - Math.floor(a);
let secondNum = b - Math.floor(b);

let firstNumNormalize = Math.round(firstNum * Math.pow(10,precision));
let secondNumNormalize = Math.round(secondNum * Math.pow(10,precision));



console.log('Первое число', firstNumNormalize);
console.log('Второе число', secondNumNormalize);

console.log('Исходные числа равны:',firstNumNormalize === secondNumNormalize);
console.log('Первое число меньше второго', firstNumNormalize < secondNumNormalize);
console.log('Первое число больше второго',firstNumNormalize > secondNumNormalize);
console.log('Первое число меньше или равно второму',firstNumNormalize <= secondNumNormalize);
console.log('Первое число больше или равно  второго',firstNumNormalize >= secondNumNormalize);
console.log('Числа не равны ',firstNumNormalize !== secondNumNormalize);


// ex.3

const m = 12.65;
const n = 11.11;


let range = Math.abs(m - n);

const randomNumberOne = Math.floor(Math.random() * range + Math.min(m,n));
const randomNumberTwo = Math.floor(Math.random() * range + Math.min(m,n));

console.log('Первое число', randomNumberOne);
console.log('Второе число', randomNumberTwo);

console.log('Исходные числа равны:',randomNumberOne === randomNumberTwo);
console.log('Первое число меньше второго', randomNumberOne < randomNumberTwo);
console.log('Первое число больше второго',randomNumberOne > randomNumberTwo);
console.log('Первое число меньше или равно второму',randomNumberOne <= randomNumberTwo);
console.log('Первое число больше или равно  второго',randomNumberOne >= randomNumberTwo);
console.log('Числа не равны ',randomNumberOne !== randomNumberTwo);


