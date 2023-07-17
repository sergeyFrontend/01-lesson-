let objects = [
  { name: "Василий", surname: "Васильев" },
  { name: "Иван", surname: "Иванов" },
  { name: "Пётр", surname: "Петров" },
];

function filter(arr, prop, value) {
  // Здесь решение задачи
  // arr - массив объектов
  // prop - свойство по которому производится фильтрация
  // value - значение свойства по которому производится фильтрация
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      Object.keys(arr[i]).includes(prop) === true &&
      Object.values(arr[i]).includes(value) === true
    ) {
      result.push(arr[i]);
    }
  }
  return result;
}

let result = filter(objects, "name", "Петров");
console.log(result);
