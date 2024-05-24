const mongoose = require("mongoose");
require("dotenv").config();

exports.DBConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then (() => console.log("DB Connected SuccessFully"))
    .catch((error) => {
        console.log("DataBase Not Connected")
        console.error(error.message)
        process.exit(1);
    })
}