const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/computerDB", { useNewUrlParser: true })


const Schema = mongoose.Schema

const computerSchema = new Schema({
    maker: String,
    price: Number
})

const Computer = mongoose.model("computer", computerSchema)


const c1 = new Computer({
    maker: "Hp",
    price: 200
})

const c2 = new Computer({
    maker: "apple",
    price: 1000
})
const c3 = new Computer({
    maker: "Asus",
    price: 300
})

const allComputer = [c1, c2, c3]

// allComputer.forEach(c => c.save())

const findComputerPromise= Computer.find({maker: "Hp"})


findComputerPromise.then(function (result) {
    console.log(result);
})