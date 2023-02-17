const {Router} = require('express');

const route = Router();

const {createToDo, getToDo, updateToDo, deleteToDo} = require('../controllers/todoController');

route.post("/createToDo", createToDo); 
route.get("/getToDo", getToDo); 
route.put("/updateToDo", updateToDo); 
route.post("/deleteToDo", deleteToDo); 

module.exports = route;