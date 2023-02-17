import './App.css';
import {useState, useEffect} from 'react';
import Item from './components/Item';
import axios from 'axios';
//import { deleteToDo, updateToDo } from '../controllers/todoController';

function App() {

  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [isUpdating, setUpdating] = useState("");

  const addUpdate = ()=>{
    if(isUpdating === ""){
      axios.post("http://localhost:5000/createToDo", {text})
    .then((res)=> {
      console.log(res.data)
      setText("")
    })
    .catch((error)=>console.log(error))
    }else{
      axios.put("http://localhost:5000/updateToDo", {_id: isUpdating, text})
    .then((res)=> {
      console.log(res.data)
      setText("");
      setUpdating("");
    })
    .catch((error)=>console.log(error))
    }
    }
  

  const updateToDo = (_id,text) =>{
    setUpdating(_id);
    setText(text);
  }

  const deleteToDo = (_id) =>{
    axios.post("http://localhost:5000/deleteToDo", {_id})
    .then((res)=> {
      console.log(res.data);
    })
    .catch((error)=>console.log(error))
  }

 
  useEffect(()=>{
    axios.get("http://localhost:5000/getToDo")
    .then((res)=> setTodo(res.data))
    .catch((error)=>console.log(error))
  })

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
      
      <div className="top">
        <input type="text" placeholder="Add Your List" value={text} onChange={(e)=>setText(e.target.value)} />
        <div className='add' onClick={addUpdate}>{isUpdating?"Update":"Add"}</div>
      </div>
      <div className='list'>
      {todo.map(item=> <Item 
      key={item._id} 
      text={item.text} 
      remove={()=>deleteToDo(item._id)}
      update={()=>updateToDo(item._id, item.text)} />)}
    <Item/>
      </div>
    </div>
    </div>
  );
}


export default App;
