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

// const fetchData = async function () {
//     const result = await SolarSystem
//         .findOne({})
//         .populate({
//             path: "planets",
//             populate: { path: "visitors" }
//         })
//         .exec()
//        return result

// }


// fetchData().then(function (result) {
//     result.planets.forEach(p => {
//         console.log(p.name + " visitors: ");
//         p.visitors.forEach(v => console.log(v.name))
//     })
// })



// const getMixedData = async function () {
    
//     const allPlanets = await Planet.find({})

//     const allVistors = await Visitor.find({})

//     const result = {allPlanets,allVistors}
//     return result
// }

// getMixedData().then(result => console.log(result))



// const getOneVisiter = async function (planet) {
    
//     const onePlanet = await Planet.findOne({ name:planet})
//     const firstVisitorID = onePlanet.visitors[0]
 
//     const firstVisitor = await Visitor.findById(firstVisitorID)

    
//     return firstVisitor
// }

// getOneVisiter("pluto").then(result => console.log(result))


// const visitPlanet= async function(visitorId,planetId){

//     const planet = await Planet.findById(planetId)
//     const visitor= await Visitor.findById(visitorId)
//     visitor.visitedPlanets.push(planet)
//     visitor.save()
//     planet.save()
//     planet.visitors.push(visitor)

// console.log('done');
// }

// visitPlanet("5fc64ace3def8b113de62a1e","5fc64ace3def8b113de62a1c")




app.listen(3001, function () {
    console.log("Server up and running on port 3001")
})