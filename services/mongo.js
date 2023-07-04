const mongoose = require('mongoose')

function connectDB(){
    try {
        mongoose.connect("mongodb://0.0.0.0:27017/",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Mango is Connected");
    } catch (err) {
        console.error(err)
    }
}

module.exports = { connectDB }