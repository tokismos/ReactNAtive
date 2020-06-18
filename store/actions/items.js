import Maison from "../../models/maison";

export const ADD_ITEM = 'ADD_item';
export const FETCH_ITEMS = 'FETCH_ITEMS';

export const addItem=(ville,adresse,image,prix)=>{
    return async (dispatch,getState)=>{
        const ID=getState().auth.ID; 
        console.log(ID);
        
           const response = await fetch(`https://reacttest-ed503.firebaseio.com/items/${ID}.json`, {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                   ville,
                   adresse,
                   image,
                   prix
               })
           }
           );
           const resData = await response.json();
           
               if(!response.ok){
                   throw resData.error.message
               }
           console.log('item added');

     
          dispatch({type:ADD_ITEM,item:{
              itemId:resData.name,
              ville,
              adresse,
              image,
              prix
          }});
    }

}
export const fetchMaisons = () => {
    return async (dispatch,getState) => {
        const userId=getState().auth.ID;
        console.log(userId);
        
            const response = await fetch(
                `https://reacttest-ed503.firebaseio.com/items/.json`
            );

            if (!response.ok) {

                throw new Error('Something went wrong');


            }

            const resData = await response.json();
            const loadedMaisons = [];
            
            
            
            for (const key in resData) {
                for (const keyy in resData[key]){
                        
                    loadedMaisons.push(new Maison(
                        keyy,
                        resData[key][keyy].ville,
                        resData[key][keyy].adresse,
                        resData[key][keyy].image,
                        resData[key][keyy].prix
                    ))
                    
                }
                console.log(loadedMaisons);
            }
            dispatch({ type: FETCH_ITEMS, items: loadedMaisons });
        }
         
    
};
