
export default function Footer() {
  return (
        <>
    <footer className=" text-center text-lg-start text-white d-flex justify-content-center align-items-center flex-wrap" style={{backgroundColor:'#2c3e50'}}>
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0 text-center">
                        <h5 className="text-uppercase ">LOCATION</h5>
                        <p> 2215 John Daniel Drive   </p>
                        <p> Clark , Mo 65243   </p>
                    </div>

                      <div className="col-lg-4 col-md-12 mb-4 mb-md-0 text-center">
                        <h5 className="text-uppercase ">ABOUT The Web </h5>
                        
                        <div className="d-flex gap-3  justify-content-center align-items-center text-center">
                            <i className="fa-brands fa-facebook fs-4"></i>
                            <i className="fa-brands fa-twitter fs-4"></i>
                            <i className="fa-brands fa-linkedin fs-4"></i>
                            <i className="fa-solid  fa-globe fs-4"></i>
                        </div>
                     </div>

                      <div className="col-lg-4 col-md-12 mb-4 mb-md-0 text-center" >
                        <h5 className="text-uppercase">ABOUT FREELANCER</h5>
                        <p>Freelance is a free to use , licensed Bootstrap theme created by Route</p>
                     </div>
                </div>
            </div>

        </footer>
            <div className="text-center p-3  text-white" style={{background:'#1a252f'}}>
               Copyright © Your Website 2021
            </div>
        
            </>
  )
}






























