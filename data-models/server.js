const express = require('express')
// const bodyParser = request('body-Parser')
// const cors = require('cors')
const florrieRoute = require('./route/route-index');
const morgan = require('morgan')



dotenv = require('dotenv');

dotenv.config()


const db = require('./db/db')

const app = express()
const florriePort = 8080

app.use(express.urlencoded({ extended: true}))
// app.use(cors())
app.use(express.json())
app.use("/",florrieRoute)
app.use(morgan())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.on('once', console.log.bind(db, 'yay!!! mongodb connected'))

app.listen(florriePort, () => console.log(`Server running on port ${florriePort}`))