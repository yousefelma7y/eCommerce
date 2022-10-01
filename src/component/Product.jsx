import React ,{useEffect ,useState} from 'react' ;
import {useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import {useParams} from 'react-router' ;
import {NavLink} from 'react-router-dom' ;
import Skeleton from 'react-loading-skeleton'


const Product = () => {

    const {id} = useParams() ;
    const [product , setProduct] = useState([]) ;
    const [loading , setLoading] = useState(false) ;

    const dispatch = useDispatch() ;
    const addProduct = (product) =>{
        dispatch(addCart(product)) ;
    }

    useEffect(()=> {
        const getProduct = async () =>{
            setLoading(true) ;
            const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`  );
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct() ;

    }, []);

    const Loading = () =>{
        return(
            <>
             <div className="col-md-6">
              
                <Skeleton height={400} />
            </div>
            <div className="col-md-6" style={{lineHeight:2}}>
                <Skeleton height={50} width={300}/>
                <Skeleton height={75} />
                <Skeleton height={25} width={150}/>
                <Skeleton height={50} />
                <Skeleton height={150} />
              
            </div>
            </>
        )
    }
    const ShowProducts = () =>{
        return(
            <>
            <div className="col-lg-6">
                <img  src={product.images} alt={product.title} height='400px' width="400px" />
            </div>
            <div className="col-lg-6">
              
                <h1 className='display-6'>
                {product.title}
                </h1>
                <p className="lead fw-bolder"> Rating {product.rating && product.rating.rate }  <i className="fa fa-star"></i> </p>
               <h3 className="display-6 fw-bold my-4">
                $ {product.price}
               </h3>
               <p className="lead">{product.description}</p>
               <button className='btn btn-outline-dark px-4 py-2' 
               onClick={()=>addProduct(product)} >
                Add To Cart
               </button>
               <NavLink to='/cart' className='btn btn-dark ms-2 px-3 py-2'>
                Go To Cart
               </NavLink>
            </div>
            </>
        )
    }
    
  return (
    <div>
        <div className='container py-5'>
            <div className='row py-4'>
                {loading ? <Loading/> : <ShowProducts/>}
            </div>
        </div>
    </div>
   
  )
}

export default Product
