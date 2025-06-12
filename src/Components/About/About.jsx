 import { Helmet } from 'react-helmet'
import style from '../About/About.module.css'
export default function About() {
  return (
    <> 
   <Helmet>
        <title>About</title>
        <meta name="About" content="This is a About of my page." />
    </Helmet>
        <div className={`${style.AboutBackground} vh-100  d-flex justify-content-center align-items-center`}>
          <div className='container text-white position-absolute'>
        
          <div className='aboutinfo '>
              <h2 className='text-center text-uppercase '>  </h2>
          </div>
          
              {/* Title   */}
                <div className="text-center pt-4 mb-2"  style={{color: 'rgb(44, 62, 80)'}}>
                  <h2  className="text-uppercase mb-3 fs-1 fw-bolder text-white">About Component</h2>
                  {/* Line before and after */}
                  <div className='d-flex justify-content-center align-items-center'>
                    <div  className={`${style.line} `}  style={{backgroundColor: '#FFF'}}> </div>
                      <i  class="fa-solid fa-star mx-2 text-white"></i>{/*  Star */} 
                    <div  className={`${style.line} me-3`}  style={{backgroundColor: '#FFF'}}> </div>

                  </div>
                  
                </div>


              <div className='row'>
              <div className='col-lg-6 col-md-6'>
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
              <div className='col-lg-6 col-md-6'>
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
              
              </div> 
            </div>
          </div> 
        </>
  )
}
