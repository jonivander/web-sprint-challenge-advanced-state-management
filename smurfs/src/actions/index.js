import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const ADD_SMURF = 'ADD_SMURF'; 

export const fetchSmurfs = () => (dispatch) => {
    dispatch({ type: FETCH_SMURFS })
    axios
    .get('http://localhost:3333/smurfs')
    .then((res) => {
        console.log(res);
        dispatch({ type: FETCH_SMURFS, payload: res.data })
    })
    .catch((err) => console.log(err)); 
}

export const addSmurf = () => (dispatch) => {
    dispatch({ type: ADD_SMURF })
    axios
    .post('http://localhost:3333/smurfs', input)
    .then((res) => {
        dispatch({ type: ADD_SMURF, payload: res.data })
    })
}