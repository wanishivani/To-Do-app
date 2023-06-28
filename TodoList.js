import React from 'react';
import {Card} from 'react-bootstrap';
function Todolist(props) {
  return (
    <Card >
        
    <li className="list-item">
        {props.item}
        <span className='icons'>
        <i 
        onClick={e=>{
            props.deleteItem(props.index)
        }}>Delete</i>
        </span>
    </li>
    </Card>
  )
}

export default Todolist