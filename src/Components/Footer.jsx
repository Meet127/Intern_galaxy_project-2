import React from 'react'

const Footer = () => {

  let footerstyle ={
     position : "relative" ,
     top:"70vh",
     width:"100%",
     left: "0",
     bottom: "0",
  }
  return (
    <footer className="ft fotter foo" style={footerstyle}>
      <p className="text-center py-3">Copyright @copy; MyTodosList.com</p>
    </footer>
  )
}

export default Footer
