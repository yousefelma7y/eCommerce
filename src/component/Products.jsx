import React , {useState ,useEffect} from 'react'
import { Button } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import Skeleton from 'react-loading-skeleton';
import {NavLink} from 'react-router-dom' ;


const Products = () => {
    const [data ,setData] = useState([]);
    const [filter ,setFilter] = useState(data) ;
    const [loading ,setLoading] = useState(false) ;
    const [paginationElements ,setPaginationElements ] = useState(8);

    let componentMounted =true ;


    const slice = filter.slice(0,paginationElements)

    const loadMore = () => {
      setPaginationElements(paginationElements + 8) ;
    }

    useEffect(() => {
        const getProducts = async () => {
         setLoading(true) ;
         const response = await fetch("https://api.escuelajs.co/api/v1/products");
         if(componentMounted) {
            setData(await response.clone().json());
            setFilter(await response.json());
            setLoading(false) ;
          
         }
         return () =>{
            componentMounted = false ;
         }
        }
        getProducts();
    } , []) ;
    
    const Loading = () => {
      return(
         <>
           <div className="col-md-3">
            <Skeleton height={350}/>
           </div>
           <div className="col-md-3">
            <Skeleton height={350}/>
           </div>
           <div className="col-md-3">
            <Skeleton height={350}/>
           </div>
           <div className="col-md-3">
            <Skeleton height={350}/>
           </div>
         </>
      );
    } ;
    const filterProduct =(name) => {
      const updatedList = data.filter((x)=>x.category.name === name) ;
      setFilter(updatedList) ;
    }

    const ShowProducts = () => {
      return (
      <>
         <div className='buttons d-flex justify-content-center mb-5 pb-5 row' >
            <button className="btn btn-outline-dark me-2 m-2 col-md-2 col-3" onClick={() => setFilter(data)}>All</button>
            <button className="btn btn-outline-dark me-2 m-2 col-md-2 col-3" onClick={() =>filterProduct("Shoes")}>Shoes</button>
            <button className="btn btn-outline-dark me-2 m-2 col-md-2 col-3" onClick={() =>filterProduct("Clothes")}>Clothes</button>
            <button className="btn btn-outline-dark me-2 m-2 col-md-2 col-3" onClick={() =>filterProduct("Furniture")}>Furniture </button>
            <button className="btn btn-outline-dark me-2 m-2 col-md-2 col-4" onClick={() =>filterProduct("Electronics")}>Electronics </button>
         </div>
         {slice.map((product)=>{
            return(
               <div className="col-lg-3 col-md-4 mb-4 " key={product.id}>
                
                  <Card className='h-100 text-center p-4' >
                     <Card.Img variant="top" src={product.images} alt={product.title} height="250px" />
                     <Card.Body>
                     <Card.Title className='mb-0'>{product.title.substring(0,12)}...</Card.Title>
                     <Card.Text className='lead fw-bold'>
                       ${product.price}
                     </Card.Text>
                     <NavLink to={`/products/${product.id}`} className='btn btn-outline-dark'>Buy Now</NavLink>
                     </Card.Body>
                  </Card>
                
               </div>
            )
         })}
         <Button className='col-4 col-md-5 col-lg-2' onClick={() => loadMore()} variant="outline-primary">LOAD MORE</Button>
      </>
      )
    
    }
    
    return (
    <div>
      <div className="container my-5 py-5">
         <div className="row">
            <div className="col-12 mb-5">
               <h1 className='display-6 fw-bolder text-center'>Latest Products</h1> <hr/>
            </div>
         </div>
         <div className="row justify-content-center">
            {loading ? <Loading/> : <ShowProducts/>}
         </div>
      </div>
    </div>
  )
}

export default Products
