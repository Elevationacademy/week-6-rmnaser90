const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/humans",{useNewUrlParser: true})


const personSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
})

const Person = mongoose.model("person", personSchema)

const p1 = new Person({
    firstName: "khawla",
    lastName: "Naser",
    age: 25
})
p1.save()

Person.find({}, function (error,result) {
    
    console.log(result);
})
