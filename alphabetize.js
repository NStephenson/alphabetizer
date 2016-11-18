function sortName(name, option){
  if(option === "first"){
    return name.toLowerCase()
  } else if(option === "last"){
    return shiftLastName(name).toLowerCase()
  }
}

function getLastNameIndex(namesArr){
  let lastName = namesArr[namesArr.length - 1].toLowerCase()
  if(suffixList.indexOf(lastName) + 1){
    return namesArr.length - 2
  } else {
    return namesArr.length - 1
  }
}

function shiftLastName(name){
  let splitNames = name.split(" ");
  let lastNameIndex = getLastNameIndex(splitNames)
  return splitNames[lastNameIndex] + " " + splitNames[0];
}

const suffixList = ["jr.", "jr", "ii", "i", "iii", "sr.", "sr"]
// Nicholas Stephenson
// Martin Luther King Jr.