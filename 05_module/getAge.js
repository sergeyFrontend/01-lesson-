function getAge(age) {
  // let currentDate = new Date()
  const currentYear = new Date().getFullYear();

  let peopleAge = currentYear - age;

  return peopleAge;
}


let result = getAge(2001);


console.log(result);