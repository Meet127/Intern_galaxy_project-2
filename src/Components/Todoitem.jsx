import React from 'react'

const Todoitem = ({todo ,onDelete}) => {
  return (
<>
  
  <div className="card ft text-white bg-dark mb-3">
    <h5 className="card-header text-white bg-dark mb-1">{todo.title}</h5>
    <div className="card-body text-white bg-dark mb-1">
      <p className="card-text mb-4">{todo.desc}</p>
        <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  </div>


    {/* <div>
      <h4 >{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger"  onClick={()=>{onDelete(todo)}}>Delete</button>
    </div> */}
  
 
  </>
  )
}

export default Todoitem