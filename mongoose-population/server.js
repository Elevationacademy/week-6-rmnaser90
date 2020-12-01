const express = require('express')
const app = express()

const mongoose = require('mongoose')
const SolarSystem = require("./models/solar")
const Planet = require("./models/planet")
const Visitor = require('./models/visitor')

mongoose.connect("mongodb://localhost/solarSystems")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())



// const sys1 = new SolarSystem({
//     starName: "sun",
//     planets: []
// })
// const earth = new Planet({
//     name: 'earth',
//     system: sys1
// })
// const pluto = new Planet({
//     name:"pluto",
//     system: sys1
// })
// const mars = new Planet({
//     name:"mars",
//     system: sys1
// })
// const mercury = new Planet({
//     name:"mercury",
//     system: sys1
// })
// const v1 = new Visitor({
//     name: "Rami",
//     homePlanet: earth,
//     visitedPlanets: [earth,mars]
// })
// const v2 = new Visitor({
//     name: "Mayada",
//     homePlanet: earth,
//     visitedPlanets: [earth,mars,pluto]
// })
// sys1.planets.push(earth)
// sys1.planets.push(pluto)
// sys1.planets.push(mars)
// sys1.planets.push(mercury)
// sys1.save()
// earth.save()
// pluto.save()
// mercury.save()
// mars.save()
// v1.save()
// v2.save()

// Visitor.findById('5fc64ace3def8b113de62a1e').populate('visitedPlanets homePlanet').exec(function (err,result) {
//    result.visitedPlanets.forEach(p => console.log(p.name));
// })

// SolarSystem
//     .findOne({})
//     .populate({
//         path: "planets",
//         populate: { path: "visitors" }
//     })
//     .exec(function (err, result) {
//         result.planets.forEach(p => {
//             console.log(p.name + " visitors: ");
//             p.visitors.forEach(v => console.log(v.name))
//         })
//     })



app.listen(3001, function () {
    console.log("Server up and running on port 3001")
})