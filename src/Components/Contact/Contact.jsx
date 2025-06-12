import React from 'react'
import { Helmet } from 'react-helmet'
 import style from '../Contact/Contact.module.css'

export default function Contact() {
  return (
      <>
        <Helmet>
        <title>Contact</title>
        <meta name="Contact" content="This is a Contact Page" />
       </Helmet>
      <div className='container w-50 p-3  mt-5 '>
         
                   {/* Title   */}
                 <div className="text-center pt-3"  style={{color: 'rgb(44, 62, 80)'}}>
                  <h3  className="text-uppercase mb-3   ">Contact section</h3>
                  {/* Line before and after */}
                  <div className='d-flex justify-content-center align-items-center'>
                    <div  className={`${style.line} `}  style={{backgroundColor: 'rgb(44, 62, 80)'}}>  </div>
                      <i  class="fa-solid fa-star mx-2 "></i>{/*  Star */} 
                    <div  className={`${style.line} me-3`}  style={{backgroundColor: 'rgb(44, 62, 80)'}}>  </div>

                  </div>
                  
                </div>
         <form className='vh-100'>
            <div class="mb-3">
            <input type="text" className="form-control border-0 border-bottom py-3" id="exampleInputName" placeholder='userName'/>
         </div>

         
         <div className="mb-3">
            <input type="text" className="form-control border-0 border-bottom py-3" id="exampleInputAge" aria-describedby="AgeHelp" placeholder='userAge'/>
            </div>
         
         <div className="mb-3">
            <input type="email" className="form-control border-0 border-bottom py-3" id="exampleInputEmail" aria-describedby="emailHelp" placeholder='userEmail'/>
            </div>
         <div class="mb-3">
            <input type="password" className="form-control border-0 border-bottom py-3" id="exampleInputPassword1" placeholder='password'/>
         </div>
         
         <button type="submit" class="btn btn-success" style={{backgroundColor:'#1abc9c', border:'none' , outline:'none'}}>Submit</button>
         </form>
      </div>

      </>
  )
}
