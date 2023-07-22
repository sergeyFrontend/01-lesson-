function createStudentCard(name, age) {
  const containerStudentCard = document.createElement("div");
  const titleName = document.createElement("h2");
  titleName.textContent = name;

  const spanAge = document.createElement("span");
  spanAge.textContent = `Возраст: ${parseInt(age)}`;

  containerStudentCard.append(titleName, spanAge);
  document.querySelector("body").append(containerStudentCard);
}

createStudentCard("Игорь", 16);
createStudentCard("Сергей", 20);
