function productFinder(array) {
  array = array.sort(function(a,b) { return a - b });
  let product = 1;
  if (allNegative(array)) {
    product = findInAllNegativeArray(array);
  } else {
    product = findInMixedArray(array);
  }
  return product;
}

function allNegative(array) {
  let allNeg = true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      allNeg = true;
    } else {
      return false;
    }
  }
  return allNeg;
}

function findInMixedArray(array) {
  let highestPositiveInteger = array.pop();
  let item1 = array[0];
  let item2 = array[1];
  let item3 = array[array.length - 1];
  let item4 = array[array.length - 2];

  if (item1 * item2 > item3 * item4) {
    return item1 * item2 * highestPositiveInteger;
  } else {
    return item3 * item4 * highestPositiveInteger;
  }
}

function findInAllNegativeArray(array) {
  let returnProduct = 1;
  highestThree = array.slice(Math.max(array.length - 3, 0));
  for (let i = 0; i < array.length; i++) {
    returnProduct *= array[i];
  }
  return returnProduct;
}

productFinder([-10,-10,-9, 0, 2, 3, 4]);
