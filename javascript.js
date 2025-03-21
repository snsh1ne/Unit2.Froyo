// ppromt asking for comma sepereated favlors
//table how many of each fovlor is ordered
//counter for each flavor

const userInput = prompt("Please enter a list of what flavors you had");
const flavors = userInput.split(",");

const flavorCount = {};

flavors.forEach(flavor =>{
  if (flavorCount[flavor]) {
    flavorCount[flavor]++;
  } else {
    flavorCount[flavor] = 1;
  }
})
  

console.log(flavorCount);
