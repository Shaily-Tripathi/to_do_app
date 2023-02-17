const todoModel = require('../models/todoModel')


const createToDo = async function(req,res){
    try{
        const {text} = req.body;
        const saveToDo = await todoModel.create({text});
        res.status(201).send({status: true, msg:"Added Successfully", data: saveToDo});
    }catch(error){
        res.status(500).send({ status: false, message: error.message });
    }

}
const getToDo = async function(req,res){
    try{
        const fetchTodo = await todoModel.find();
        res.send(fetchTodo);
    }catch(error){
        res.status(500).send({ status: false, message: error.message });
    }

}


const updateToDo = async function(req,res){
    try{
        const {_id, text} = req.body;
        const upToDo = await todoModel.findByIdAndUpdate(_id, {text});
        res.status(200).send({status: true, msg:"Updated Successfully"});
    }catch(error){
        res.status(500).send({ status: false, message: error.message });
    }

}

const deleteToDo = async function(req,res){
    try{
        
        const {_id} = req.body;
        const delToDo = await todoModel.findByIdAndDelete(_id);
        res.status(200).send({status: true, msg:"Deleted Successfully"});
    }catch(error){
        res.status(500).send({ status: false, message: error.message });
    }

}

module.exports = {createToDo, getToDo, updateToDo, deleteToDo}