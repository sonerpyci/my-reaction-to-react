import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className={"Person"}>
            <h3 onClick={props.click}>I'm {props.name || "Anonym"} and I am {props.age || "tousands"} years old!</h3>
            <p>{props.children}</p>
            <input type={"text"} onChange={props.onChangeHandler} value={props.name}/>
            <button onClick={props.deletePersonHandler} className={"delete-person"}>Delete</button>
        </div>
    )
}

export default person