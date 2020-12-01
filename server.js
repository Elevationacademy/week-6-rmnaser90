const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/humans",{useNewUrlParser: true})

const Schema = mongoose.Schema

const personSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number
})

const courseSchema = new Schema({
    title: String,
    duration: Number,
    sylibus: Array,
    student: personSchema
})

const Course = mongoose.model("course", courseSchema)
const Person = mongoose.model("person", personSchema)

const p1 = new Person({
    firstName: "Naya",
    lastName: "Naser Aldin",
    age: 9
})

const hiTech = new Course({
    title: "Hi Tech",
    duration: "500",
    sylibus: ["html","css","javscript","jquery","mogodb"],
    student: p1

})


let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 })
let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 })
let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 })
let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 })

// let allTheShooberts = [p2, p3, p4, p5]
// allTheShooberts.forEach(s => s.save())

// Person.findByIdAndUpdate("5fc4d7fc653465e3c49a9465", {age: 70}, function (err, result) {
//     console.log(result);
// })
Person.findById("5fc4d7fc653465e3c49a9465", function (err, result) {
    result.remove(function (err) {
        console.log(err);
    })
})
