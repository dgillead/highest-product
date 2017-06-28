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
  if (allNegative(array)) {
    // remove last three elements from the array
  } else {
    findInMixedArray(array);
  }

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
  
}

productFinder([-2,-1,1,2]);
