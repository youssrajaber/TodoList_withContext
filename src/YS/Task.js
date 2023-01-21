import React, { useContext } from 'react'
export default function Task(props) {

  return (
    <div>
        <div className="input-group">
          <input type="text" class="form-control" style={props.done ? {textDecoration:'line-through',color:'green',fontSize:'20px'} : {color:'black'}} value={props.txt} aria-label="Recipient's username with two button addons" aria-describedby="button-addon4"/>
          <div className="input-group-append" id="button-addon4">
            <button className="btn btn-outline-danger mr-2" type="button"  onClick={props.delf}><i class="fas fa-trash-alt"></i></button>
            <button className="btn btn-outline-success" type="button" onClick={props.donef}  >Done</button>
          </div>
        </div>
        
    </div>
  )
}
