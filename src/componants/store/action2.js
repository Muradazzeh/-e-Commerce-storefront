
let initialState = {
    products: [
        {
            category: 'ELECTRICAL',
            name: 'phone 1',
            price: 300 ,
            description: 'its a u phone',
            inventory: 32,
            image:" https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"

        },
        {
            category: 'ELECTRICAL',
            name: 'tv 2 ',
            price: 600,
            description: 'its new tv with hd price',
            inventory: 34,
            image:"https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 "
        },
        {
            category: 'ELECTRICAL',
            name: 'tablet',
            price: 15.99,
            description: 'its tablet for your select',
            inventory: 11,
            image:"https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 "
        },
        {
            category: 'ELECTRICAL',
            name: 'tablet2',
            price:200,
            description: 'its tablet for your select',
            inventory: 15,
            image:" https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=404&q=80"
        },
        {
            category: 'ELECTRICAL',
            name: 'pc',
            price: 15.99,
            description: 'the best price for pc',
            inventory: 16,
            image:" https://images.unsplash.com/photo-1657214058650-31cc8400713b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
        },
        {
            category: 'ELECTRICAL',
            name: 'headset ',
            price: 15.99,
            description: 'its tablet headset your select',
            inventory: 11,
            image:"https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=865&q=80 "
        },
        {
            category: 'ELECTRICAL',
            name: 'speaker ',
            price: 15.99,
            description: 'its for your house application',
            inventory: 11,
            image:"https://images.unsplash.com/photo-1609702847389-b8aec1b0b929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=963&q=80 "
        },
        {
            category: 'FOOD',
            name: 'Rice',
            price: 59.99,
            description: 'good for health testing',
            inventory: 24,
            image:"https://images.unsplash.com/photo-1655826953584-bda9ee71fd41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
        },
        {
            category: 'FOOD',
            name: 'SEA FOOD',
            price: 500.99,
            description: 'its sea creature for your select',
            inventory: 3,
            image :" https://images.unsplash.com/photo-1661881781609-e2b6adc0b27b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        },
        {
            category: 'FOOD',
            name: 'cake',
            price: 100.99,
            description: 'birthday cake',
            inventory: 2,
            image: "https://images.unsplash.com/photo-1661831109363-bcedd87d1831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"

        },
        {
            category: 'CLOTHES',
            name: 'jeans',
            price: 100.99,
            description: 'its dumb jeans',
            inventory: 5,
            image : "https://images.unsplash.com/photo-1660866838287-d2239bb99976?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        },
        {
            category: 'CLOTHES',
            name: 'shirt',
            price: 100.99,
            description: 'its nice shirt',
            inventory: 2,
            image:"https://images.unsplash.com/photo-1661065266388-fa817d6d7d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        },
        {
            category: 'GAMES',
            name: 'PUBG',
            price: 100.99,
            description: 'its the best game ever ',
            inventory: 6,
            image:" https://images.unsplash.com/photo-1633450797384-9242a83a7597?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
        },
        {
            category: 'GAMES',
            name: 'need for speed',
            price: 100.99,
            description: 'its stupids game',
            inventory: 2,
            image:" https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        },
        {
            category: 'SKIN CARE',
            name: 'sun block vipers',
            price: 100.99,
            description: 'its good for sun block',
            inventory: 2,
            image:" https://images.unsplash.com/photo-1631730486572-226d1f595b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=475&q=80"
        },
        {
            category: 'SKIN CARE',
            name: 'nivea',
            price: 100.99,
            description: 'its cream',
            inventory: 60,
            image:"https://images.unsplash.com/photo-1552046122-03184de85e08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 "
        },
        {
            category: 'BEAUTY & FRAGRANCE',
            name: 'boss',
            price: 100.99,
            description: 'its best perfume',
            inventory: 7,
            image:"https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 "
        },
        {
            category: 'SPORTS',
            name: 'football',
            price: 100.99,
            description: 'its UEFA FOOTBALL from champions league',
            inventory: 50,
            image:" https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
        },
        {
            category: 'SPORTS',
            name: 'golf',
            price: 80,
            description: 'its UEFA FOOTBALL from champions league',
            inventory: 50,
            image:" https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        },
        {
            category: 'SPORTS',
            name: 'basketball',
            price: 100.99,
            description: 'its UEFA FOOTBALL from champions league',
            inventory: 50,
            image:"https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
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
