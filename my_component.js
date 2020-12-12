import React from 'react';
import {
    Text,
  } from 'react-native';
import {connect} from "react-redux"; 
import {setColor} from "./action"; 

const mapStateToProps = (state) => { 
    console.log("ALL STATES", state);
    return { 
        f_color: state.f_color
    }
};

const mapDispatchToProps = (dispatch) => { 
    return { 
        setColor(color) { 
            dispatch( setColor(color) ) 
        },
    }
} 
const My_Component: () => React$Node = (props) => {
    console.log("ALL STATES", props);
    return (
        <Text style={{fontSize:180, color: props.f_color}} onPress={()=>{props.setColor("yellow")}}>Hiii......{props.f_color}</Text>
    );
  };




export default connect(mapStateToProps,mapDispatchToProps)(My_Component); 


// import { combineReducers } from 'redux'; // const facebook_url = 'facebook_url'; // const twitter_url = 'twitter_url'; // const instagram_url = 'instagram_url'; // const youtube_url = 'youtube_url'; // const initialState = { // expanded:true, // facebook_url:'', // twitter_url:'', // instagram_url:'', // youtube_url:'', // } // const reducer = ( state=initialState, action ) => { // switch( action.type ){ // case 'SHOW_HIDE': // return { ...state, expanded : !state.expanded } // case 'SMP_DATA': // return { ...state, [action.key] : action.text} // case 'UPDATE_DATA': // return { ...state, facebook_url : action.datas[facebook_url], twitter_url : action.datas[twitter_url], // instagram_url : action.datas[instagram_url], youtube_url : action.datas[youtube_url], } // default: // return state // } // } // export default combineReducers({ reducer }) 