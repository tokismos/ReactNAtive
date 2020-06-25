import { SIGNUP, LOGIN,LOGOUT, AUTOLOGIN, IS_AUTO_LOGIN_ENABLED } from "../actions/auth"


const initialState={

    ID:null,
    isLoged:false,
    isAutoLoginEnabled:false
    
}

export default (state=initialState,action)=>{
    switch (action.type){
                
        case LOGIN:
            return {
                ID:action.auth,
                isLoged:true
                
            }
        case LOGOUT:
            return{
                ...initialState
            }
        case  AUTOLOGIN:
            return {
                ...initialState,
                ID:action.key,
                isLoged:true
            }

        case IS_AUTO_LOGIN_ENABLED:
            return{
                ...initialState,
                isAutoLoginEnabled:action.value
            }
            default:
                return state
    }
}