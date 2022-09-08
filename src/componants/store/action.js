let initialState = {
    catagories:[ 
       {name : 'Electronics', show : false},
      {name : 'FOOD', show : false },
      {name:'Clothes', show : false },
      {name : 'Shoes',show : false},
      {name : 'Furniture',show : false},
      {name : 'Others',show : false}
  ],
  
  }


  export default (state=initialState,action) =>{
    const {type ,payload}=action;
    switch(type){
       case 'SELECT' : 
       let active = payload
       let  catagories=state.catagories.map((data)=>{
           if(data.name===payload){
               return {
                   name :data.name,
                   show : !data.show
               }
           }
           return  data
       })
return {
    catagories:catagories,active:active
}
       case 'RESET' : 
return initialState
       default :
       return state
    }
}

export const select =(name)=>{
   return {
       type: 'SELECT',
       payload : name
   }
}
export const reset = ()=>{
   return {
       type: 'RESET',
}
}