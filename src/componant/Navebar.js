import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navebar(props) {
  return (
    <>
       <nav className={`navbar navbar-expand-lg navebar-${props.rmode} bg-${props.rmode} navebar-${props.mode} bg-${props.mode} `}>
<div className="container-fluid">
  <Link className={`navbar-brand text-${props.mode==="dark"?"light":"dark"}`} to="#">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className={`nav-link active text-${props.mode==="dark"?"light":"dark"}`} aria-current="page" to="/">{props.home}</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link text-${props.mode==="dark"?"light":"dark"} `} to="/about">About</Link>
      </li>
     
     
    </ul>
    <div className="custom-control custom-switch">
   
  <input type="checkbox" className="custom-control-input" onClick={props.togle}  id="customSwitch2"/>
  
  <label className={`custom-control-label text-${props.mode==="dark"?"light":"dark"} htmlFor="customSwitch2 mx-3`}>Enable Dark Mode</label>

</div>
   
  </div>
</div>
</nav>
    </>
  )
}
Navebar.propTypes={title:PropTypes.string.isRequired}
