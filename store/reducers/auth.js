import { SIGNUP, LOGIN,LOGOUT, AUTOLOGIN,ISAUTOLOGINENABLED } from "../actions/auth"


const initialState={

    ID:null,
    isLoged:false,
    isAutoLoginEnabled:false
    
}

export default (state=initialState,action)=>{
    switch (action.type){
        case SIGNUP:

            return {
                ...initialState,
                ID:action.auth
            }
        
        case LOGIN:
            return {
                ...initialState,
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
            case ISAUTOLOGINENABLED:
                return{
                    ...initialState,
                    isAutoLoginEnabled:action.value

                }

            default:
                return state
    }
}