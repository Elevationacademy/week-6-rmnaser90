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

starSeries(5,3)


