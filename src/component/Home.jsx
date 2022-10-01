import React from 'react'
import Products from './Products'
import { motion } from "framer-motion" ;


const Home = () => {
    return (
    <div className='hero'>
        <div className="card bg-dark text-white border-0">
          <img src="/assets/bg1.jpg" className="card-img" alt="background" height="550px" />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className='container'>
                    <motion.h5 initial={{opacity:0 ,x:350 }} animate={{opacity:1 ,x:0}} transition={{delay:0.3}} 
                    className="card-title display-3 fw-bolder mb-0 ">NEW SEASON ARRIVALS</motion.h5>
                    <motion.p initial={{opacity:0 ,x:-350 }} animate={{opacity:1 ,x:0}} transition={{delay:0.3}} 
                     className="card-text lead fs-2">
                        CHECK OUT ALL THE TRENDS
                    </motion.p>
                </div>
            </div>
        </div>
        <Products/>
    </div>
    )
}

export default Home
