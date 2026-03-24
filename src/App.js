import { useState } from "react";

function App(){

const [task,setTask]=useState("");
const [list,setList]=useState([]);

function addTask(){
if(task.trim()==="") return;
let newList=[...list,task].sort();
setList(newList);
setTask("");
}

function deleteTask(index){
let updated=list.filter((_,i)=>i!==index);
setList(updated);
}

return(
<div style={{textAlign:"center",marginTop:"50px"}}>

<h2>Todo App</h2>

<input 
placeholder="Enter task"
value={task}
onChange={(e)=>setTask(e.target.value)}
/>

<button onClick={addTask}>Add</button>

<br/><br/>

<ul style={{listStyle:"none"}}>
{list.map((item,index)=>(
<li key={index}>
{item}
<button onClick={()=>deleteTask(index)}>Delete</button>
</li>
))}
</ul>

</div>
);
}

export default App;