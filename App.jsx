import { useEffect, useState } from "react";
import axios from "axios";
function App(){
  const[selectedID,setSelectedId]= useState([])
  
  return <div>
      <button onClick={function(){
        setSelectedId(1);
      }}>1</button>

      <button onClick={function(){
        setSelectedId(2);
      }}>2</button>

      <button onClick={function(){
        setSelectedId(3);
      }}>3</button>
      
      <Todo id={selectedID}/>
  </div>
}

function Todo({id}){
  const [todo,setTodo] = useState([]);

  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
      .then(response=>{
        setTodo(response.data.todo)
      })
  },[id])



  return<div>
    id:{id}
    <h2>
      {todo.title}
    </h2>
    <h3>
      {todo.description}
    </h3>
  </div>
}


export default App;

