import React, { useReducer, useState } from "react";
import { ADD_SMURF } from '../actions';
import smurfReducer from '../reducer';

export default function SmurfForm() {
    const [smurfs, dispatch] = useReducer(smurfReducer, [])
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [height, setHeight] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ 
            type: ADD_SMURF, 
            payload: {
                name: name,
                age: age, 
                height: height, 
            }
        })
        setName('')
        setAge()
        setHeight('')
    } 

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h2>Who's the smurfiest smurf to join the village?</h2>
            <input 
                type='text' 
                value={name} 
                placeholder='Smurf name'
                onChange={e => setName(e.target.value)}
            />
            <input 
                type='text' 
                value={age} 
                placeholder='Smurf age'
                onChange={e => setAge(e.target.value)}
            />
            <input 
                type='text' 
                value={height} 
                placeholder='Smurf height'
                onChange={e => setHeight(e.target.value)}
            />
            <button type='submit'>SMURF</button>
        </form>
        </>
    )
}