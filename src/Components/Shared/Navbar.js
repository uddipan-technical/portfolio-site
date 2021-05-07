import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
   return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top px-3">
         <div className="container-fluid">
            <Link className="navbar-brand" to="/home">
               <h5 className="" style={
                  { color: '#fff',
                    fontSize:'40px'
                   }
                  }>
                  Uddipan
               </h5>
            </Link>
            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div
               className="collapse navbar-collapse"
               id="navbarSupportedContent"
            >
               <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-fill">
                  <li className="nav-item active">
                     <Link className="nav-link" aria-current="page" to="/home">
                        Home
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/resume">
                        Resume
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/work">
                        Projects
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="blog">
                        Blog
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/contact">
                        Contact
                     </Link>
                  </li>
                  <li className="nav-item">
                     <a
                        className="nav-link resume-link"
                        href="https://drive.google.com/file/d/1iBQT6dr8xIjO1F11tzzUHmmdoayKFCdi/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                     >
                        Cover-Leter
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
