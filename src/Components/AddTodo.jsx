import React from 'react'
import { useState } from "react";

const AddTodo = ({addTodo}) => {
  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");
  
  const submit = (e) => {
    e.preventDefault();
    if(!title || !desc){
      alert("Title or Description is empty")
    }
    addTodo(title,desc);
    setTitle("");
    setDesc("");
  }
  return (
    <div className="container my-5">
      <h3 className="my-3">Add Todo</h3>
      <form onSubmit={submit}>
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Title"></input>
        </div>
        <div className="form-group my-3">
            <label htmlFor="desc" >Description</label>
            <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" placeholder="Description"></input>
        </div>
          <button type="submit" className="btn my-2 btn-outline-danger my-3">Add</button>
      </form>
    </div>
  )
}

export default AddTodo