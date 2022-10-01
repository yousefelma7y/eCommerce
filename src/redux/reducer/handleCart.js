

const cart = [] ;

const handleCart =(state = cart , action) => {
 const product = action.payload ;
 switch (action.type) {
    case "ADDITEM":
        //Check If Product Is Already Exist
        const exist = state.find((x)=> x.id === product.id) ;
        if (exist){
            //increase the Quantity
            return state.map((x)=> 
            x.id === product.id ? {...x , qty : x.qty + 1 } :x );
        }else {
            const product = action.payload;
            return [
                ...state,
                {
                    ...product,
                    qty : 1, 
                }
            ]
        }
        break;
        case "DELITEM": 
        const exist1 = state.find((x)=> x.id === product.id) ;
        if (exist1.qty !== 0){
            return state.filter((x)=> x.id !== exist1.id );
        }
        else{
            return state.map((x)=>
             x.id === product.id ? {...x , qty: x.qty -1 }: x
            );
        }
         break;

        case "DECREMENTITEM" :
            const exist2 = state.find((x)=> x.id === product.id) ;
            if (exist2){
                //decrease the Quantity
                return state.map((x)=> 
                x.id === product.id ? {...x , qty : x.qty - 1 } :x );
            }else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty : 1, 
                    }
                ]
            }
            break;


    default:
       return state ;
        break;
 }
}

export default handleCart ;