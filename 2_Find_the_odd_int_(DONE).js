function findOdd(A) {
  let result,
    num = 0;

  let arr = A.sort();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      num++;
    } else {
      num++;
      if (num % 2 !== 0) {
        result = arr[i];
        break;
      }
    }
  }
  return result;
}

console.log(findOdd([7])); //7
console.log(findOdd([0])); //0
console.log(findOdd([1, 1, 2])); //2
console.log(findOdd([0, 1, 0, 1, 0])); //0
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); //4
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); //5
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); //-1
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); //5
console.log(findOdd([10])); //10
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); //10
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])); //1

//---------------------------------------------------------------------------------------------------------------------
/*                                                                                                                     
Given an array of integers, find the one that appears an odd number of times.                                           

There will always be only one integer that appears an odd number of times.                            

Examples                            
[7] should return 7, because it occurs 1 time (which is odd).                           
[0] should return 0, because it occurs 1 time (which is odd).                           
[1,1,2] should return 2, because it occurs 1 time (which is odd).                           
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).                            
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).                            
*/
/*                            
За даним масивом цілих чисел знайдіть те, яке з’являється непарну кількість разів.                            

Завжди буде тільки одне ціле число, яке з’являється непарну кількість разів.                            

Приклади                            
[7] має повернути 7, оскільки воно зустрічається 1 раз (що є непарним).                           
[0] має повертати 0, оскільки воно зустрічається 1 раз (що є непарним).                           
[1,1,2] має повертати 2, оскільки воно зустрічається 1 раз (що є непарним).                           
[0,1,0,1,0] має повертати 0, оскільки воно зустрічається 3 рази (що непарно).                           
[1,2,2,3,3,3,4,3,3,3,2,2,1] має повертати 4, оскільки воно з’являється 1 раз (що є непарним).                           
*/
//---------------------------------------------------------------------------------------------------------------------
/*
function groupByNumber(array) {
    let map = new Map();
    for (let e of array) {
        map.set(e, map.has(e) ? map.get(e) + 1 : 1);
    }
    return [...map];
}
function findOdd(a) {
    let groups = groupByNumber(a);
    return groups.find(e => e[1] % 2)[0];
}
console.log(findOdd([7]));
console.log(findOdd([0]));
console.log(findOdd([1, 1, 2]));
console.log(findOdd([0, 1, 0, 1, 0]));
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
*/
