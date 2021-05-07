import { faFacebookF, faGoogle, faLinkedinIn, faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import Image from '../../../Photos/uc.png';
import './Mydetails.css';

const Mydetails = () => {
    return (
        <div id="myDetails" className="col-md-12">
            <div>
               <img class="portfolio-img" src={Image} alt=""/>
            </div>
            <div className="mt-3">
               <h4 className="text-center fw-bold" style={{ color: '#daa520' }}>
                  UDDIPAN CHAKMA
               </h4>
              <h6 className="text-center text-white">
                  <Typical
                     steps={['', 100, 'FRONT-END WEB DEVELOPER', 'Woo-commerce', 'Freeluncer', 50]}
                     loop={Infinity}
                  />
               </h6>
               <div className="fa-icon text-center">
                   <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"><FontAwesomeIcon icon={faGoogle}/></a>
                   <a href="https://www.facebook.com/uddipan.chakma.58/"><FontAwesomeIcon icon={faFacebookF}/></a>
                   <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
                   <a href="live:uddipan1230"><FontAwesomeIcon icon={faSkype}/></a>
                   <a href=" https://www.linkedin.com/in/uddipan-chakma-915309171/"><FontAwesomeIcon icon={faLinkedinIn}/></a>
               </div>
               <div className="button-btn mt-3">
               <button className="btn-btn">
               <a href="https://drive.google.com/file/d/135cW-h9puvrOIPp9we5uA3piJzYlGbRA/view">DOWNLOAD CV<FontAwesomeIcon icon={faArrowRight}/></a>

               </button>
               <button className="btn-btn">
               <Link className="" to="/contact">
                   <a className="text-center"
                     href="">CONTACT ME <FontAwesomeIcon icon={faFileDownload} />
                  </a>
                  </Link>
               </button>
               </div>
            </div>
        </div>
        
    );
};

export default Mydetails;
