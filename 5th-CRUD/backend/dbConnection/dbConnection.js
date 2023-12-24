const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB);
        console.log("DB connection established");
    } catch (error) {
        console.log("Error connecting DB connection", error);
    }
}

//Named exports
module.exports = dbConnection;