import React from 'react'
import { Link } from 'react-router-dom'; 

const dashboard = () => {
  return (
    <div>
      This is a dashboard
      <button>{<Link to="/driving">learn driving</Link>}</button>
      <button>{<Link to="/license">Go for liscense</Link>}</button>
    </div>
  )
}

export default dashboard
