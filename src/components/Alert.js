import React from 'react'

function Alert(props) {
    const cap = (word)=> {
        return word.charAt(0).toUpperCase() + word.slice(1) ;

    }
  return (
    <div style={{height: '50px'}}>
  {props.Title && <div className={`alert alert-${props.Title.type} alert-dismissible fade show`} role="alert">
  <strong>{cap(props.Title.type)}</strong> : {props.Title.msg}
 
</div>}
</div>
  )
}

export default Alert

