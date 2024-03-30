import React from 'react'

export default function Alert(props) {
  return (
    
    <>
    <div style={{height:"45px"}}>
  { props.alert &&  <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{props.alert.type}</strong> {props.alert.msg}
</div>}
</div>
    </>
  )
}
