import React, { useState } from "react";
import { connect } from 'react-redux';
import  { addSmurf }  from '../actions';



function SmurfForm(props) {
    const initialFormValues = {
        name: '',
        height: '',
        age: ''
    }

    const [smurf, setSmurf] = useState(initialFormValues);

    const changeHandler = (e) => {
       setSmurf({...smurf, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        props.addSmurf(smurf);
    } 

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h2>Who's the smurfiest smurf to join the village?</h2>
            <input 
                type='text' 
                name= 'name'
                value={smurf.name} 
                placeholder='Smurf name'
                onChange={changeHandler}
            />
            <input 
                type='text' 
                name= 'age'
                value={smurf.age} 
                placeholder='Smurf age'
                onChange={changeHandler}
            />
            <input 
                type='text' 
                name= 'height'
                value={smurf.height} 
                placeholder='Smurf height'
                onChange={changeHandler}
            />
            <button type='submit'>SMURF</button>
        </form>
        </>
    )
}

export default connect(null, {addSmurf})(SmurfForm); 