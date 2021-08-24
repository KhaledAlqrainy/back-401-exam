'use strict'

const FlowersDataModel= require('./mongoose.model')

const createFlowers = async (req,res) => {
    const { instructions, photo, name} = req.body;
    const newObj = new FlowersDataModel ({
        instructions : instructions,
        photo : photo,
        name : name,
    })
    newObj.save();
    res.send(newObj)
}

const getFlowersData = async (req,res) => {
    FlowersDataModel.find({}, (err,data)=> {
        res.send(data);
    })

}


const deleteFlowers = async (req,res) => {
    const {c_id} = req.params;
    FlowersDataModel.remove({_id:c_id},(err,data)=> {
        FlowersDataModel.find({}, (err,data)=> {
            res.send(data);
        })
    })
};

const updateFlowers = async (req,res) => {
    const {c_id} = req.params;
    const {instructions, photo, name} = req.body;
    FlowersDataModel.findByIdAndUpdate(
        {_id:c_id}, 
        {instructions:instructions, photo:photo, name:name},
        {new:true},(err,data)=>{
            res.send(data)
        });
}



module.exports= {
    createFlowers,
    getFlowersData,
    deleteFlowers,
    updateFlowers

}