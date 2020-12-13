// exersice 1
const printStars = function (num) {

    for (let i = 0; i < num; i++) {
        let stars = ""
        for (let j = 0; j <= i; j++) {

            stars += "*"
        }
        console.log(stars);

    }
}
// printStars(1)


// exercise 2

const printBackwardStars = function (num) {

    for (let i = 0; i < num; i++) {
        let stars = ""
        for (let j = num - i; j > 0; j--) {

            stars += "*"
        }
        console.log(stars);

    }
}

// printBackwardStars(5)

// exercise 3

const starSeries = function (num, count) {

    for (let i = 0; i < count; i++) {
        printStars(num)
        printBackwardStars(num - 1)

    }
}

// starSeries(5,3)


// exercise 4

const reverse = function (str) {
    let reversed = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}

//   console.log(reverse("dog"));
//   console.log(reverse("race car"));

//exrecise 5

const isPalindrome = function (str) {

    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] != str[j]) {
            return false
        }
    }
    return true
}
// console.log(isPalindrome("111111rr111111"))

// exercise 6

const encrypt = function (str) {
    encryptStr = ""
    for (let i = 0; i < str.length; i++) {

        encryptStr += String.fromCharCode(str.charCodeAt(i) + 1)


    }
    return encryptStr
}


// console.log(encrypt("abcd"));

// exercise 7


const decrypt = function (str) {
    decryptStr = ""
    for (let i = 0; i < str.length; i++) {
        decryptStr += String.fromCharCode(str.charCodeAt(i) - 1)
    }
    return decryptStr
}

// console.log( decrypt("bcde"));

// exercise 8

const colors = ["red", "indigo", "white", "teal", "yellow"];
const foods = ["bread", "cheese", "cucumber"];

const jumble = function (arr1, arr2) {
    let jumbledArr = []
    const length = arr1.length > arr2.length ? arr1.length : arr2.length
    for (let i = 0; i < length; i++) {
        if (i < arr1.length) {
            jumbledArr.push(arr1[i])
        }
        if (i < arr2.length) {
            jumbledArr.push(arr2[i])
        }
    }
    return jumbledArr
}
console.log(

    // jumble(colors, foods) // could return: ["cheese",teal","cucumber","red","bread","yellow","white","indigo"]

);


// exercise 9

const rawDist = {
    A: 10,
    B: 10,
    C: 10,
    D: 20,
    E: 10,
    F: 10,
    G: 10,
    H: 20

}




const getLetter = function (rawDist) {
    let randomNum = Math.floor(Math.random() * 100)
    for (const letter in rawDist) {
        if (randomNum < rawDist[letter]) {
            return letter
        } else {
            randomNum -= rawDist[letter]
        }
    }

}

console.log(

    getLetter(rawDist)

);