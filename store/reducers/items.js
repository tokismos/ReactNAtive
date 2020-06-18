import { ADD_ITEM, FETCH_ITEMS } from "../actions/items"
import Maison from "../../models/maison"

const initialState={
    items:[],
}

export default(state=initialState,action)=>{
    switch(action.type){
        case ADD_ITEM:

        const maison=new Maison(
            action.item.itemId,
            action.item.ville,
            action.item.adresse,
            action.item.image,
            action.item.prix,
        );
        return {
            items:[...state.items,maison]
        } 

        case FETCH_ITEMS:
            
        return {
            items:action.items
        }

        default:
            return state
    }
}