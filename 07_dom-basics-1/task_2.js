let studentObjOne = {
  name: "Игорь",
  age: 17,
};

let studentObjTwo = {
  name: "Sergey",
  age: 23,
};

function createStudentCard(infoStudent) {
  const containerStudentCard = document.createElement("div");
  const titleName = document.createElement("h2");
  titleName.textContent = infoStudent.name;

  const spanAge = document.createElement("span");
  spanAge.textContent = `Возраст: ${parseInt(infoStudent.age)}`;

  containerStudentCard.append(titleName, spanAge);
  document.querySelector("body").append(containerStudentCard);
}

createStudentCard(studentObjOne);
createStudentCard(studentObjTwo);
