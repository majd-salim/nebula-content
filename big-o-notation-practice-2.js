// 1.   What is the big O of the following function. Describe what the function does and use that as the reasoning for your answer.

function multipleSteps(num) {
  let final = 4 * num
  return final * 3
}

//mathematical operations are O(1)

// 2.   What is the big O of the following function. Describe what the function does and use that as the reasoning for your answer.

function backwardsArr(arr) {
  let arrReversed = []
  for (let i = arr.length - 1; i >= 0; i--) {
    arrReversed.push(arr[i])
  }
  return arrReversed
}
//An algorithm running at linear time will process each input at least once... O(n)

// 3.   What is the big O of the following function. Describe what the function does and use that as the reasoning for your answer.

function multiplyAll(arr1, arr2) {
  if (arr1.length !== arr2.length) return undefined
  let total = 0
  for (let i of arr1) {
    for (let j of arr2) {
      total += i * j
    }
  }
  return total
}
//Sorting is notoriously difficult and slow, this is O(2^n)

// 4.   What is the big O of the following function. Describe what the function does and use that as the reasoning for your answer.

let nums = [10,20,30,40];
nums.push(50);
//No matter the size of the array it will always just grab the first element O(1)
 

// 5.   What is the big O of the following function. Describe what the function does and use that as the reasoning for your answer.

let nums2 = [10,20,30,40];
nums.unshift(0);
//No matter the size of the array it will always just grab the first element O(1)

// 6.   What is the big O of the following function. Describe what the function does and use that as the reasoning for your answer.

function logTime(arr) {
  let numberOfLoops = 0
  for (let i = 1; i < arr.length; i *= 2) {
    numberOfLoops++
  }
  return numberOfLoops
}
// An algorithm that cuts the input size in half at each step is logarithmic... O(log n)
