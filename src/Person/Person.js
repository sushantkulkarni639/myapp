import React from 'react';  
import './Person.css'
const Person=(props)=> {
    return(
        <div className="Person">
            <p onClick={props.click}>This is from {props.name} Component of age {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    )
}
export default Person;