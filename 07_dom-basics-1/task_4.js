const showListBtn = document.querySelector('.showList');
// const removeListBtn = document.querySelector('.removeList');


const allStudents = [
  { name: "Валя", age: 11 },
  { name: "Таня", age: 24 },
  { name: "Рома", age: 21 },
  { name: "Надя", age: 34 },
  { name: "Антон", age: 7 },
];

function createStudentsList(listArr) {
  const list = document.createElement("ul");

  listArr.forEach((item) => {
    list.innerHTML += `
   <li>
    <h2>${item.name}</h2>
     <span>Возраст: ${item.age}</span>
    </li>
   `;
  });
  document.querySelector("body").append(list);
}

showListBtn.addEventListener('click',()=>{
  createStudentsList(allStudents)
})
