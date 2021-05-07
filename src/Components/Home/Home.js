import React from 'react';
import './Home.css';
import Mydetails from '../Sidebar/MyDetails/Mydetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import ServiceData from '../Service/ServiceData';


const Home = () => {
   return (
      <div className="container">
         <div className="row">
            <div className="col-md-4">
            <Mydetails></Mydetails>
            </div>
            <div className="text-section col-md-8 scrollbar">
               <div className="mb-3">
                     <h2><FontAwesomeIcon icon={faCheckCircle}/>
                  <span> About Me</span></h2>
               </div>
               <hr className="text-white"/>
               <div>
                  <p className="text-white ">
                  <span>Hi, I am Uddipan Chakma.</span>I am a professional Full-Stack Web Developer. I have more than 3 years of experience in Web Sector and work with different clients in the local and freelance marketplace I'm expart in<span>  -</span><br></br> HTML, CSS, JS, MySQL, NODE.JS, EXPRESS, CORS, MONGODB and REACT.
                  </p>
                  <p>AGE: .....<span>35</span></p>
                  <p>RESIDENCE: .....<span>Bangladesh</span></p>
                  <p>FREELANCE: .....<span>Available</span></p>
                  <p>ADDRESS: .....<span>Dhaka, Bangladesh</span></p>
               </div>
               <hr className="text-white"/>
                     <div className=" mt-5">
                           <h4><FontAwesomeIcon icon={faCheckCircle}/>
                           <span>  My Service</span></h4>
                           
               <hr className="text-white"/>
                     <div className="">
                   <ServiceData></ServiceData>
                </div>
               </div>
               
            </div>
         </div>
      </div>
   );
};

export default Home;