let initialState = {
    cartItem : [],
    itemCount : 0,
   selected:[]
    
}

export default (state=initialState,action) =>{
    const {type ,payload}=action;
    switch(type){
       case 'ADD_CART' : 
       let active = payload
       let itemCount = state.itemCount +1
       let cartItem =[...state.cartItem ,active]
       
       console.log(state.itemCount,"itemcount")
       console.log(itemCount)
       console.log(cartItem ,"cartItem ")
     
       return {...state,cartItem :cartItem  ,
        itemCount : itemCount,
        
    }
      
        case 'REMOVE':
            console.log(payload,"cartItem remove")
           
             
             
            return {
                ...state,
                cartItem: state.cartItem.filter(
                  (item) => item.id !== payload
                ),
                  itemCount:state.itemCount-1

            }
       case 'SELECT-PROD' : 
       console.log(payload,"this is the details")
       let selected = [payload]
       console.log(selected,"this is the details1111111111111")
    return {
        ...state,cartItem:state.cartItem,
        itemCount:state.itemCount,
        selected:selected
    }
       case 'RESET' : 
return initialState
       default :
       return state
    }
}

export const add =(item)=>{
   return {
       type: 'ADD_CART',
       payload : item
   }
}
export const select =(product)=>{
   return {
       type: 'SELECT-PROD',
       payload : product
   }
}
export const reset = ()=>{
   return {
       type: 'RESET',
}
}
export const remove = (item)=>{
   return {
       type: 'REMOVE',
       payload:item
}
}