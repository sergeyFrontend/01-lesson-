function getAge(age) {
  // let currentDate = new Date()
  const currentYear = new Date().getFullYear();

  let peopleAge = currentYear - parseInt(year);

  return peopleAge;
}


let result = getAge(2001);


console.log(result);