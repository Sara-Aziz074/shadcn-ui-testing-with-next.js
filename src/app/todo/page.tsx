"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState , useEffect } from "react";

function Todo () {
  const [todo,setToDo]= useState("");
  const [todos,setToDos]= useState<string[]> ([]);

const [update, setUpdate] = useState(1); 




console.log(update)
 useEffect (()=>{
  // setToDo("useEffect")
  console.log(" U Effect")

  console.log(update)

 }, [update])

 const addTodo=() => {
//   console.log("ADD TODO")
// setUpdate(100);

setToDos([...todos, todo]);
setToDo("");
 }

 const deleteTodo=(index:number) =>{
console.log(index)
 }
 return  (
    <div  className="flex min-h-screen flex-col items-center p-28">
      <div className="flex w-full max-w-sm items-center space-x-2">
      <Input value={todo}
       onChange={(e) =>{

        // console.log(e.target.value)
        setToDo(e.target.value);
      }}
       placeholder="Title" />
    <Button onClick={addTodo} >Add</Button>

      </div>
      <div className="mt10">

        {todos.map((item,index)=> <div key={index} className="flex gap-5 py-2 justify-center items-center"> 
        
        <p>{item}</p>
        
        <Button variant="destructive" onClick={()=>deleteTodo(index)}>Delete</Button>
        </div>)}
      </div>
  </div>)
};
export default Todo;