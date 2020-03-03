// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."


var collections = ["purple", "blue", "green", "yellow", "pink"]

const shuffle = array => {
    array.shift()
    if(array.length > 0){
        // removes the first item of the array
        // shuffles the array
        let some = array.sort(() => Math.random() - 0.5)
        return some
        
    } else{
        return "Array is empty"
    }
}
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]
console.log(shuffle(collections))
console.log(shuffle(collections))
console.log(shuffle(collections))
console.log(shuffle(collections))
console.log(shuffle(collections))



// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.



var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

const sumCubed = array => {
    let cubed = array.map(value=> Math.pow(value,3))
    return cubed.reduce((total,current) => total +current)
}
console.log(sumCubed(cubeAndSum1))
console.log(sumCubed(cubeAndSum2))

// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.


var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

const minMax = array => {
    let newArr = []
    newArr.push(Math.min(...array))
    newArr.push(Math.max(...array))
    return newArr
}
console.log(minMax(nums1))
console.log(minMax(nums2))


// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

const everyOther = str => {
    let newStr = ""
    for(let i=0;i<str.length;i++){
        if(!(i%2)){
            newStr += str[i]
        } else if(i%2) {
            newStr += str[i].toUpperCase()
        }
    }
    return newStr
}
console.log(everyOther(testString1))
console.log(everyOther(testString2))

// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator.



var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
const noDup = (arr1,arr2) => {
    let together = arr1.concat(arr2)
    return [...new Set(together)]
}

console.log(noDup(arr1,arr2))