import { FETCH_SMURFS, ADD_SMURF } from '../actions';

const initialState = {
    smurfs: [
        {
            name: "Brainey",
            age: 200,
            height: "5cm",
            id: 0
        }
    ]
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
                smurfs: action.payload
            }
    }
}

export default smurfReducer; 