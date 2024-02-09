import React from 'react'
import Todoitem from './Todoitem'

const Todos = (props) => {
  const todostyle={
    minHeight : "70vh"
  }
  return (
    
    <div className='container' style={todostyle}>
      <h3 className='my-5'> Todos List </h3> 
 
      {props.todos.length===0? 
        
       <div class="card ft text-white bg-dark"><div class="card-body text-white bg-dark"><p class="card-text text-white bg-dark">
       "No todos to desplay"                {/* khali aa j kam nu 6 baki uper niche styling kari 6 */}
       </p></div></div>
        
        :
      props.todos.map((todo) => {
        return <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />
      })
      }
        
    </div>
  )
}

export default Todos


