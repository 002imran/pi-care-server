const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 5000;


const courses = require('./data/courses.json');
const courseInformation = require('./data/information.json')

app.get('/', (req, res) =>{
    res.send('PICare Server is Running');
});

app.get('/course-list', (req, res) =>{
    res.send(courses);
})

app.get('/course-details/:id', (req, res)=>{
     const id = req.params.id;
     const courseDetials = courseInformation.find(n => n.id === id);
     res.send(courseDetials);
})




app.listen(port, ()=>{
    console.log('PICare server is running on port:', port);
})