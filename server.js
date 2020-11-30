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

hiTech.save()



// Person.find({}, function (error,result) {
    
//     console.log(result);
// })
