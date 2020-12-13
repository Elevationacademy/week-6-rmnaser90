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
        for (let j = num-i; j >0; j--) {
           
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
        printBackwardStars(num-1)
        
    }
}

// starSeries(5,3)


// exercise 4

const reverse = function(str){
    let reversed = ""
    for (let i = str.length-1; i >= 0; i--) {
        reversed+= str[i]
    }
    return reversed
  }
  
//   console.log(reverse("dog"));
//   console.log(reverse("race car"));

//exrecise 5

const isPalindrome = function (str) {
    
    for (let i = 0,j=str.length-1; i < str.length; i++,j--) {
        if (str[i]!=str[j]) {
            return false
        }
    }
    return true
}
// console.log(isPalindrome("111111rswr111111"))