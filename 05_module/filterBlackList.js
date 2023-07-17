// white list with emails
const whiteList = [
  "my-email@gmail.ru",
  "jsfunc@mail.ru",
  "annavkmail@vk.ru",
  "fullname@skill.ru",
  "goodday@day.ru",
];

// list with emails which in black list
const blackList = ["jsfunc@mail.ru", "goodday@day.ru"];

function filter(whiteList, blackList) {
  let arrayCorrectEmails = [];

  for (let email of whiteList) {
    let item = blackList.indexOf(email);

    if (item === -1) {
      arrayCorrectEmails.push(email);
    }
  }
  return arrayCorrectEmails;
}

let result = filter(whiteList, blackList);

console.log(result);
