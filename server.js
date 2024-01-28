const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db/dbconnect.js');
const app = express();
const PORT = process.env.PORT || 3001;
const cors=require('cors')
require('dotenv').config()

app.use(cors())
app.use(bodyParser.json());


connectDB();


const otpRouter = require('./routes/otproute.js')


app.use('/', otpRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
