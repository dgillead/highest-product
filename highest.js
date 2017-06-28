// class ProductFinder
//   def initialize(array)
//     @array = array.sort
//   end
//
//   def find
//     if all_negative?
//       @array.last(3)
//     else
//       find_in_mixed_array
//     end
//   end
//
//   def find_in_mixed_array
//     highest_positive_integer = @array.pop
//     item1 = @array[0]
//     item2 = @array[1]
//     item3 = @array[@array.length - 1]
//     item4 = @array[@array.length - 2]
//
//     if item1 * item2 > item3 * item4
//       [item1, item2, highest_positive_integer]
//     else
//       [item4, item3, highest_positive_integer]
//     end
//   end
//
//   def all_negative?
//     @array.all? { |i| i < 0 }
//   end
// end

function productFinder(array) {
  array = array.sort();
  let product = 0;
  if (allNegative(array)) {
    console.log(array.slice((array.length - 4), (array.length - 1)));
  } else {
    product = findInMixedArray(array);
  }
  console.log(product);
}

function allNegative(array) {
  let allNeg = true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
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

productFinder([-2,-1,-3, 0, 1, 2]);
