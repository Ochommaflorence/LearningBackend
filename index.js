const port = 6000;
dotenv = require('dotenv');
express = require('express');
mongoose = require('mongoose');



app = express();


dotenv.config()

mongoose.connect(
    process.env.DATABASE_URL,
    { useNewUrlParser: true,  useCreateIndex: true,  useUnifiedTopology: true }
)

const db = mongoose.connection

db.on('error', (err) => {
    console.log(err);
})

db.once('open', () => {
    console.log('Database connection established')
})

app.get("/", (req, res) => {
    res.send("hey, its florrie")
})
.listen(port, () =>{
    console.log(`The sever has started and its connected to port ${port}`);
})