import { FETCH_SMURFS, ADD_SMURF } from '../actions';

const initialState = {
    smurfs: []
};

const smurfReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SMURFS:
            return {
                ...state,
                smurfs: action.payload
            }
        case ADD_SMURF:
            return {
                ...state, 
                smurfs: [...state.smurfs, action.payload]
            }
        default:
            return state
    }
}


export default smurfReducer; 