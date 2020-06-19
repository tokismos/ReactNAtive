import { ADD_ITEM, FETCH_ITEMS } from "../actions/items"
import Maison from "../../models/maison"

const initialState={
    items:[],
}

export default(state=initialState,action)=>{
    switch(action.type){
      

        case FETCH_ITEMS:
            
        return {
            items:action.items
        }

        default:
            return state
    }
}