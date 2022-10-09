import React from 'react'
import './register.css' ;
import { BsGoogle } from 'react-icons/bs';
import { motion } from "framer-motion" ;
import { Link } from 'react-router-dom';


const Register = () => {
  return (
    <div className='signup-page row w-100 d-flex justify-content-center'>
        <motion.div initial={{opacity:0 ,x:-400 }} animate={{opacity:1 ,x:0}} transition={{delay:0.3}} 
        className='col-xl-5 col-lg-4  '>
         <img src="/assets/signup.png" className="signup-img " alt="background"  />
            
        </motion.div>
        <div className='signup-card col-xl-7 col-lg-9 col-12 p-5 m-lg-0 m-3 row d-flex justify-content-center'>

            <div className=' col-xl-7 col-lg-8 col-md-7 col-sm-8 row'>  

                <motion.h1 initial={{opacity:0 ,x:350 }} animate={{opacity:1 ,x:0}} transition={{delay:0.1}} 
                className='col-12  fw-bold log-h'>SIGN UP HERE</motion.h1>
                
                <motion.p initial={{opacity:0 ,x:-350 }} animate={{opacity:1 ,x:0}} transition={{delay:0.2}} className='fw-bold text-muted col-12'>
                        Already a member ? <Link to="/login">Log In</Link>
                </motion.p>

                <motion.label initial={{opacity:0 ,x:350 }} animate={{opacity:1 ,x:0}} transition={{delay:0.3}} className='col-12 mt-4'>
                    NAME :
                </motion.label> 

                <motion.input initial={{opacity:0 ,x:-350 }} animate={{opacity:1 ,x:0}} transition={{delay:0.3}} 
                className='col-12 signup-input rounded'  type="name" placeholder='Enter Your Name' />    

                <motion.label initial={{opacity:0 ,x:350 }} animate={{opacity:1 ,x:0}} transition={{delay:0.4}} className='col-12 mt-4'>
                    EMAIL :
                </motion.label> 

                <motion.input initial={{opacity:0 ,x:-350 }} animate={{opacity:1 ,x:0}} transition={{delay:0.4}}
                 className='col-12 signup-input rounded'  type="email" placeholder='Enter Your Email'/>   

                <motion.label initial={{opacity:0 ,x:350 }} animate={{opacity:1 ,x:0}} transition={{delay:0.5}} className='col-12 mt-4 '>
                    PASSWORD :
                </motion.label> 
                <motion.input initial={{opacity:0 ,x:-350 }} animate={{opacity:1 ,x:0}} transition={{delay:0.5}}
                 className='col-12 signup-input rounded'  type="password" placeholder='Create a Password'/>  

                <motion.input initial={{opacity:0 ,x:350 }} animate={{opacity:1 ,x:0}} transition={{delay:0.6}} 
                className='col-12 mt-5 rounded signup-btn' value='Create An Account' type='submit' />

                <motion.button initial={{opacity:0 ,x:-350 }} animate={{opacity:1 ,x:0}} transition={{delay:0.6}}
                 className='google-signup col-12 mt-3  rounded '>
                  <BsGoogle className='text-primary'/>  Sign up with Google
                </motion.button>

            </div>
         
        </div>          

    </div>
      
  
  )
}

export default Register
