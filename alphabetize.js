const suffixList = ["jr.", "jr", "ii", "i", "iii", "sr.", "sr"]

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

function sortNamesList(namesList, options){
  return mergeSort(namesList, options)
}

function merge(left, right, options){
  var result  = [],
    il      = 0,
    ir      = 0;
 
  while (il < left.length && ir < right.length){
    if (sortName(left[il], options.nameUsed) < sortName(right[ir], options.nameUsed)){
      result.push(options.reversed ? right[ir++] : left[il++]);  
    } else {
      result.push(options.reversed ? left[il++] : right[ir++]);
    }
  }

  return result.concat(left.slice(il)).concat(right.slice(ir));
}

function mergeSort(items, options){
  if (items.length < 2) {
    return items;
  }

  var middle = Math.floor(items.length / 2),
      left    = items.slice(0, middle),
      right   = items.slice(middle);

  return merge(mergeSort(left, options), mergeSort(right, options), options);
}
