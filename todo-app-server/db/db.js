const mongoose = require('mongoose')


mongoose.connect(
    "mongodb+srv://server:server@cluster0.oqnxb.mongodb.net/test",
    { useNewUrlParser: true,  useCreateIndex: true,  useUnifiedTopology: true },
    () => console.log("connected to the database")
)

const db = mongoose.connection;


module.exports = db;