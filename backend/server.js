require('dotenv').config();
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db');
const port = process.env.PORT || 5000
const authRoutes = require('./routes/authRoutes')
const dataRoutes = require('./routes/dataRoutes')
const bodyParser = require('body-parser');
const app = express()

app.use(express.json())
app.use(cors("*"))
app.use(bodyParser.json());

connectDB();

app.use('/',authRoutes);
app.use('/',dataRoutes);


app.listen(port,()=>{
    console.log(`🚀 server is listening on port:${port} 🚀🚀`)
});