const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send('PICare Server is Running');
})

app.listen(port, ()=>{
    console.log('PICare server is running on port:', port);
})