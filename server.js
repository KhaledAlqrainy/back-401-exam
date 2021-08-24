'use strict'
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const PORT = process.env.PORT || 3050;
////////////modules///////////

const getFlowers = require('./Controller')
const {createFlowers,getFlowersData, deleteFlowers , updateFlowers} = require('./Cruds')



/////////root route///////////
// app.get('./', (req,res) => {
//     res.send('Hello from the Main Root')
// })







////////crud////////////

//http://localhost:3050/flowers
app.get('./flowers', getFlowers)

app.post('./flowers/favorite', createFlowers)
app.get('./flowers/favorite', getFlowersData)
app.delete('./flowers/favorite/:c_id', deleteFlowers)
app.put('./flowers/favorite/:c_id',updateFlowers)













app.listen(PORT,()=>{
    console.log(`Im listening to ${PORT}`);
});