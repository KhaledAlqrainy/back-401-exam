'use strict'

const { default: axios } = require("axios")
const flowerModel = require('./Model')

const getFlowers = async (req,res) => {
    axios.get(`https://flowers-api-13.herokuapp.com/getFlowers`).then(data => {
        const response = data.data.flowerslist.map(i => {
            return new flowerModel(i)
        })
        res.send(response)
    }).catch (err => {
        console.log(err)
    })


}


module.exports=getFlowers