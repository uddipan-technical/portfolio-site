import React from 'react';
import image1 from '../../Photos/eazybazar.jpg';
import eazyBazar from '../../Photos/e-commerce.jpg';
import rider from '../../Photos/rider.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../MyWork/MyWork.css';
import './HomeProject.css';
import { Link } from 'react-router-dom';

const HomeProject = () => {
   return (
      <div className="container">
         <h4 className="text-white mt-5 mb-3">SOME OF MY PROJECTS ...</h4>
         <hr className="text-white" style={{ width: '50%' }} />
         <div className="projects">
            <div className="card home-card " style={{ width: '18rem' }}>
               <img src={image1} className="card-img-top" alt="..." />
               <div className="card-body">
                  <h5 className="card-text">Tax-Adviser Service</h5>
                  <small className="details">
                     <ul>
                        <li>
                           Conditional dashboard where an ordinary user cannot
                           access admins’ info
                        </li>
                        <li>
                           Private user can add or remove any services and
                           control client's orders.
                        </li>
                     </ul>
                  </small>
               </div>
               <button className="btn bg-dark text-white fs-4">
                  <a
                     href="https://adiver-tax.web.app/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
                  </a>
                  <span className="mx-3">|</span>
                  <a
                     href="https://github.com/arpan-jo/Tax-Adviser-Service-Provider"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <FontAwesomeIcon icon={faGithub} />
                  </a>
               </button>
            </div>
            <div className="card home-card" style={{ width: '18rem' }}>
               <img src={eazyBazar} className="card-img-top" alt="..." />
               <div className="card-body">
                  <h5 className="card-text">Eazy-Bazar</h5>
                  <small className="details ">
                     <ul>
                        <li>SPA application</li>
                        <li>
                           Customers can buy any products, check order items
                        </li>
                        <li>
                           A user can review and buy or cancel any services
                        </li>
                     </ul>
                  </small>
               </div>
               <button className="btn bg-dark text-white fs-4">
                  <a
                     href="https://eazy-bazar.web.app/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
                  </a>
                  <span className="mx-3">|</span>
                  <a
                     href="https://github.com/arpan-jo/Eazy-Bazar-E-commerce"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <FontAwesomeIcon icon={faGithub} />
                  </a>
               </button>
            </div>
            <div className="card home-card" style={{ width: '18rem' }}>
               <img src={rider} className="card-img-top" alt="..." />
               <div className="card-body">
                  <h5 className="card-text">Rider Service </h5>
                  <small className="details">
                     <ul>
                        <li>A user can choice any of vehicle services</li>
                        <li>
                           Also s/he can choice destination by clicking from
                           Map.
                        </li>
                     </ul>
                  </small>
               </div>
               <button className="btn bg-dark text-white fs-4">
                  <a
                     href="https://eazy-ride.firebaseapp.com/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
                  </a>
                  <span className="mx-3">|</span>
                  <a
                     href="https://github.com/arpan-jo/Eazy-Rider"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <FontAwesomeIcon icon={faGithub} />
                  </a>
               </button>
            </div>
         </div>
         <button className="btn mt-3 explore-btn">
            <Link className="explore-link" to="/work">
               Explore more
            </Link>
         </button>
      </div>
   );
};

export default HomeProject;
