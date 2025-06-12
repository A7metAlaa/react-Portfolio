import { Link, NavLink } from "react-router-dom";

 import style from  "../../Components/Navbar/Navbar.module.css"
import { useEffect, useState } from "react";
export default function Navbar() {
   const [clicked , setClicked]  = useState(false)
  const [activeLink, setActiveLink] = useState("");
  useEffect(()=>{

  },[clicked])
  
  return  <>
  <nav className= {`${style.NavbarBackgroud} navbar navbar-expand-lg fixed-top`}   >
  <div className="container">
    <Link className="navbar-brand text-white text-uppercase fw-bold p-3" to="">Start Framework</Link>
    <button className="navbar-toggler" 
          type="button" 
        data-bs-toggle="collapse"
         data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-uppercase fw-bold " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
 
         <li className="nav-item">
              <NavLink
                onClick={() => setActiveLink("about")}
                className={`${activeLink === "about" ? style.active : ""} nav-link text-white rounded-3`}
                to="about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={() => setActiveLink("portfolio")}
                className={`${activeLink === "portfolio" ? style.active : ""} nav-link text-white rounded-3`}
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={()=>setActiveLink('Contact')}
                className={`${activeLink === "Contact" ? style.active : ""} nav-link text-white rounded-3`}
                to="/Contact"
              >
                Contact
              </NavLink>
            </li>
 
       
      </ul>
   
    </div>
  </div>
</nav>
</>
}

















