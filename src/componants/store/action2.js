
let initialState = {
    products: [
        {
            category: 'ELECTRICAL',
            name: 'phone 1',
            price: 300 ,
            description: 'its a u phone',
            inventory: 32,
            

        },
        {
            category: 'ELECTRICAL',
            name: 'tv 2 ',
            price: 600,
            description: 'its new tv with hd price',
            inventory: 34
        },
        {
            category: 'ELECTRICAL',
            name: 'tablet',
            price: 15.99,
            description: 'its tablet for your select',
            inventory: 11
        },
        {
            category: 'ELECTRICAL',
            name: 'tablet2',
            price:200,
            description: 'its tablet for your select',
            inventory: 15
        },
        {
            category: 'ELECTRICAL',
            name: 'pc',
            price: 15.99,
            description: 'the best price for pc',
            inventory: 16
        },
        {
            category: 'ELECTRICAL',
            name: 'headset ',
            price: 15.99,
            description: 'its tablet headset your select',
            inventory: 11
        },
        {
            category: 'ELECTRICAL',
            name: 'speaker ',
            price: 15.99,
            description: 'its for your house application',
            inventory: 11
        },
        {
            category: 'FOOD',
            name: 'Rice',
            price: 59.99,
            description: 'good for health testing',
            inventory: 24
        },
        {
            category: 'FOOD',
            name: 'SEA FOOD',
            price: 500.99,
            description: 'its sea creature for your select',
            inventory: 3
        },
        {
            category: 'FOOD',
            name: 'cake',
            price: 100.99,
            description: 'birthday cake',
            inventory: 2
        },
        {
            category: 'CLOTHES',
            name: 'jeans',
            price: 100.99,
            description: 'its dumb jeans',
            inventory: 5
        },
        {
            category: 'CLOTHES',
            name: 'shirt',
            price: 100.99,
            description: 'its nice shirt',
            inventory: 2
        },
        {
            category: 'GAMES',
            name: 'PUBG',
            price: 100.99,
            description: 'its the best game ever ',
            inventory: 6
        },
        {
            category: 'GAMES',
            name: 'need for speed',
            price: 100.99,
            description: 'its stupids game',
            inventory: 2
        },
        {
            category: 'SKIN CARE',
            name: 'sun block vipers',
            price: 100.99,
            description: 'its good for sun block',
            inventory: 2
        },
        {
            category: 'SKIN CARE',
            name: 'nivea',
            price: 100.99,
            description: 'its cream',
            inventory: 60
        },
        {
            category: 'BEAUTY & FRAGRANCE',
            name: 'boss',
            price: 100.99,
            description: 'its best perfume',
            inventory: 7
        },
        {
            category: 'SPORTS',
            name: 'football',
            price: 100.99,
            description: 'its UEFA FOOTBALL from champions league',
            inventory: 50
        },

    ],
}

export default (state=initialState,action) =>{
    const {type ,payload}=action;
    switch(type){
      
            case 'SETCATEGORY':
                let products = initialState.products;
                return { products };
    
            case 'RESET':
                return initialState;
    
            default:
                return state;
        }
    }

    export const set =(catagorie)=>{
        return {
            type: 'SETCATEGORY',
            payload :catagorie

        }
     }
