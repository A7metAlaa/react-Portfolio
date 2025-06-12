import React, { useState } from 'react'
import pic1 from "../../assets/images/port1.png"
import pic2 from "../../assets/images/port2.png"
import pic3 from "../../assets/images/port3.png"

 import style from '../Portfolio/Portfolio.module.css'
import { Modal  , Button  } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'
export default function Portfolio() {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (imgSrc) => {
    setSelectedItem(imgSrc);
    setShow(true);
  };

  return (
        <>
       <Helmet>
        <title>portfolio</title>
        <meta name="portfolio" content="This is a portfolio" />
      </Helmet>

       <div className='container mt-5 mb-3'>

                {/* Title   */}
                <div className="text-center pt-5 mb-2"  style={{color: 'rgb(44, 62, 80)'}}>
                   <h2  className="text-uppercase mb-3 fs-1 ">portfolio component</h2>
                  {/* Line before and after */}
                  <div className='d-flex justify-content-center align-items-center'>
                    <div  className={`${style.line} `}  style={{backgroundColor: 'rgb(44, 62, 80)'}}> </div>
                      <i  class="fa-solid fa-star mx-2"></i>{/*  Star */} 
                     <div  className={`${style.line} me-3`}  style={{backgroundColor: 'rgb(44, 62, 80)'}}> </div>

                  </div>
                  
                 </div>

                {/*  Cards */}
                <div className='row mb-3'>
                 
                   <div as={ Link} className={`${style.container}  col-md-4 col-lg-4 `}  style={{cursor:'pointer'}} 
                      onClick={() => handleShow(pic1)}> 
                    <img src={pic1} className={`${style.image}`}
                    alt='pic1'/>
                    <div className={`${style.overlay}` } >
                    <div className={`${style.text}`} >
                      <i className='text-white fa-solid fa-plus fa-6x'></i>
                    </div>
                  </div>
                  </div>

                   <div as={ Link} className={`${style.container}  col-md-4 col-lg-4 `} style={{cursor:'pointer'}} onClick={() => handleShow(pic2)}> 
                    <img src={pic2} className={`${style.image}`}
                    alt='pic2'/>
                    <div className={`${style.overlay}` } >
                    <div className={`${style.text}`} >
                      <i className='text-white fa-solid fa-plus fa-6x'></i>
                    </div>
                  </div>
                  </div>
                  
                   <div as={ Link} className={`${style.container}  col-md-4 col-lg-4 `} style={{cursor:'pointer'}}  
                      onClick={() => handleShow(pic3)}> 
                    <img src={pic3} className={`${style.image}`}
                    alt='pic3'/>
                    <div className={`${style.overlay}` } >
                    <div className={`${style.text}`} >
                      <i className='text-white fa-solid fa-plus fa-6x'></i>
                    </div>
                  </div>
                  </div>
                </div>
 
                <div className='row'>
                 
                   <div as={ Link} className={`${style.container}  col-md-4 col-lg-4 `}  style={{cursor:'pointer'}} 
                      onClick={() => handleShow(pic1)}> 
                    <img src={pic1} className={`${style.image}`}
                    alt='pic1'/>
                    <div className={`${style.overlay}` } >
                    <div className={`${style.text}`} >
                      <i className='text-white fa-solid fa-plus fa-6x'></i>
                    </div>
                  </div>
                  </div>

                   <div as={ Link} className={`${style.container}  col-md-4 col-lg-4 `} style={{cursor:'pointer'}} onClick={() => handleShow(pic2)}> 
                    <img src={pic2} className={`${style.image}`}
                    alt='pic2'/>
                    <div className={`${style.overlay}` } >
                    <div className={`${style.text}`} >
                      <i className='text-white fa-solid fa-plus fa-6x'></i>
                    </div>
                  </div>
                  </div>
                  
                   <div as={ Link} className={`${style.container}  col-md-4 col-lg-4 `} style={{cursor:'pointer'}}  
                      onClick={() => handleShow(pic3)}> 
                    <img src={pic3} className={`${style.image}`}
                    alt='pic3'/>
                    <div className={`${style.overlay}` } >
                    <div className={`${style.text}`} >
                      <i className='text-white fa-solid fa-plus fa-6x'></i>
                    </div>
                  </div>
                  </div>
                </div>

         
      </div>

    </>
     
     
    
  )
}
