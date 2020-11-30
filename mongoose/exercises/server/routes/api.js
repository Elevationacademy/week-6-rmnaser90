const express = require('express')
const router = express.Router()

const Person = require('../models/Person')

router.get('/people', function (req, res) {
    Person.find({}, function (err, people) {
        res.send(people)
    })
})


router.post('/person', function (req, res) {
    console.log("receiving stuff");
    let person = req.body
	    let p1 = new Person({
	        firstName: person.firstName,
	        lastName: person.lastName,
	        age: person.age
	    })
	    
	    p1.save()
	    res.end()
    
})

router.put('/people', function (req,res) {
    const id = req.body.id
    const newAge = req.body.age
    Person.findByIdAndUpdate(id,{age: newAge}, function (err,person) {
        Person.findById(id,function (err,updated) {
            console.log(updated);
        })
        res.send(err)
    })
   
})

router.delete('/apocalypse', function (req,res) {
    Person.find({}, function (err,results) {
        results.forEach(element => element.remove());
        res.send("database delted")
    })
})

module.exports = router