import { LOGIN_START,LOGIN_FAILED, LOGIN_SUCCESS } from "../actions/actionTypes";

const initialAuthState={
user:{},
error:null,
isLoggedIn:false,
InProgress:false
}



export default function auth(state=initialAuthState,action){
 switch (action.type) {
   case LOGIN_START:
     return {
       ...state,
       InProgress: true,
     };
   case LOGIN_SUCCESS:
     return {
       ...state,
       InProgress: false,
       isLoggedIn:true,
       
       error:null
     };
   case LOGIN_FAILED:
     return {
       ...state,
       InProgress: true,
       error:action.error
     };
     default:
              return state;
 }
}