const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI;

async function connectDB(){
    try {
        await mongoose.connect(mongoURI ,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Mango is Connected");
    } catch (err) {
        console.error(err)
    }
}

module.exports = { connectDB }