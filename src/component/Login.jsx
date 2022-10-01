import React from 'react'
import './login.css' ;
import { motion } from "framer-motion" ;


const Login = () => {
 
    return (
    <div className='login-page d-flex justify-content-center '>

        <div className='login-card  row col-10 bg-light m-5 rounded  '>

            <motion.div initial={{opacity:0 ,x:-300 }} animate={{opacity:1 ,x:0}} transition={{delay:0.3}}
             className='col-12 col-lg-5 '>
                <div className='p-2 m-2 row'>               
                    <motion.h1 initial={{opacity:0 ,x:250 }} animate={{opacity:1 ,x:0}} transition={{delay:0.1}} 
                     className='m-3 col-12 log-h'>
                        LOG IN
                    </motion.h1>    

                    <motion.label initial={{opacity:0 ,x:-250 }} animate={{opacity:1 ,x:0}} transition={{delay:0.2}} 
                    className='mt-3'>
                        EMAIL :
                    </motion.label> 

                    <motion.input initial={{opacity:0 ,x:250 }} animate={{opacity:1 ,x:0}} transition={{delay:0.3}}
                     className=' login-input'  type="email" placeholder='Enter Your Email'/>       

                    <motion.label initial={{opacity:0 ,x:-250 }} animate={{opacity:1 ,x:0}} transition={{delay:0.4}}
                     className='mt-3'>
                        PASSWORD :
                    </motion.label> 

                    <motion.input initial={{opacity:0 ,x:250 }} animate={{opacity:1 ,x:0}} transition={{delay:0.5}} 
                    className=' login-input'  type="password" placeholder='Enter Your Password' />          

                    <motion.input initial={{opacity:0 ,x:-250 }} animate={{opacity:1 ,x:0}} transition={{delay:0.6}} 
                    className='login-btn rounded  mt-3 ' value='LOG IN' type='submit' />  

                    <motion.a initial={{opacity:0 ,x:250 }} animate={{opacity:1 ,x:0}} transition={{delay:0.7}}
                     className='m-3 forget-link p-5' href=''>FORGET PASSWORD </motion.a>
                </div>
            </motion.div>

            <motion.div initial={{opacity:0 ,x:300 }} animate={{opacity:1 ,x:0}} transition={{delay:0.3}}
            className=' col-lg-7 login-image '>
              <img src="/assets/login.png" className="card-img " alt="background" height="550px" />
            </motion.div>
         
        </div>
       
    </div>
    
    )
}

export default Login
