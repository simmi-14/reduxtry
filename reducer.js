import {combineReducers} from "redux"; 


export const f_color = (state ='black', action) => { 
    return (action.type === 'SET_COLOR') ? action.payload : state;
};

let appReducer = combineReducers({ f_color }); 

export default appReducer; 