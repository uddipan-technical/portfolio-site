import React from 'react';
import './About.css';
import '../Home/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBriefcase, faCheckSquare, faLaptopCode, faPaperPlane, faUniversity } from '@fortawesome/free-solid-svg-icons';
import Mydetails from '../Sidebar/MyDetails/Mydetails';
import Logo from '../../Photos/ginius.png';
import city from '../../Photos/city.png';
import tejgaon from '../../Photos/logo.png';
import fiverr from '../../Photos/fiverr.png';
import hero from '../../Photos/hero.png';
import { faBootstrap, faCss3Alt, faHtml5, faJava, faJsSquare, faNodeJs, faReact, faReacteurope } from '@fortawesome/free-brands-svg-icons';
import { ProgressBar } from 'react-bootstrap';
import { faFlag } from '@fortawesome/free-regular-svg-icons';


const Resume = () => {
   return (
      <div id="about" className="container">
      <div className="row">
         <div className="col-md-4">
         <Mydetails></Mydetails>
         </div>
      <div className="col-md-8 scrollbar">
               <div className="Resume">
                     <h2><FontAwesomeIcon icon={faCheckSquare}/>
                  <span> Resume</span></h2>
               </div>
               
                  <div className="col-md-12">
                       <div className="d-flex bar">
                           <div className="col-md-6 right-bar experience-data mt-3">
                             <div className="mt-3">
                             <h5><FontAwesomeIcon icon={faBriefcase}/>  Experience</h5>
                                <hr className="text-white"/>
                             </div>
                             <div className="d-flex col-hight">
                                       <div>
                                          <h6 className="duration mb-3">Oct 19 - Present</h6> <br />
                                          <h5>Web & WordPress</h5>
                                          <h6>Developer</h6>
                                       </div>
                                       <div className="col-md-2 logo1">
                                          <img src={fiverr} alt=""/>
                                       </div>  
                              </div>
                              <hr className="text-white"/>
                              <div className="d-flex col-hight">
                                  <div className="">
                                             <h6 className="duration">Apr 19 - Present</h6> <br />
                                             <h5>Trainer</h5>
                                 </div>
                                 <div className="col-md-2 logo">
                                    <img src={Logo} alt=""/>
                                 </div>
                            </div>
                            <hr className="text-white"/>
                        </div>




                        <div className="col-md-6 right-bar experience-data mt-3">
                              <div className="mt-3">
                                    <h5 className="text-white"><FontAwesomeIcon icon={faUniversity}/> Education</h5>
                                    <hr className="text-white"/>
                              </div>
                              <div className="d-flex col-hight">
                                    <div>
                                       <h6 className="duration mb-3">June 2012-Dec 2016 </h6> <br />
                                       <h5>Bsc in EEE</h5> 
                                    </div>
                                    <div className="col-md-2 logo2">
                                      <img src={city} alt=""/>
                                   </div>
                             </div>
                             <hr className="text-white"/>
                             <div className="d-flex col-hight">
                                    <div>
                                    <h6 className="duration mb-3">July 2001-Feb 2007 </h6> <br />
                                          <h5>Msc & Bsc</h5>
                                          <h5>In Chemistry</h5>
                                    </div>
                                    <div className="col-md-2 logo2">
                                    <img src={tejgaon} alt=""/>
                                   </div>
                             </div>
                             <hr className="text-white"/>
                             <div className="d-flex col-hight">
                                    <div>
                                       <h6 className="duration mb-3">Dec 2021-June 2021 </h6> <br />
                                       <h5>Full Stack</h5>
                                       <h6 className="text-white">Web Developer Course</h6>
                                          
                                    </div>
                                    <div className="col-md-2 hero">
                                      <img src={hero} alt=""/>
                                   </div>
                             </div>
                             <hr className="text-white"/>
                        </div>
                       </div>
                   </div>
                   <div className="col-md12 d-flex bar">
                      <div className="col-md-6">
                               <div className="mt-5">
                                 <h2 className="text-white"><FontAwesomeIcon icon={faCheckSquare}/>
                                 <span> Skills</span></h2>
                               </div>
                           <div className="mt-5">
                              <label htmlFor="">HTML</label>
                              <ProgressBar variant="success" now={95} /><br/>
                              <label htmlFor="95%">CSS</label>
                              <ProgressBar variant="success" now={90} /><br/>
                              <label htmlFor="">JavaScript</label>
                              <ProgressBar variant="success" now={80} /><br/>
                              <label htmlFor="">React</label>
                              <ProgressBar variant="success" now={85} />
                        </div>
                      </div>
                      <div className="col-md-6">
                              <div className="mt-5">
                                  <h2><span><FontAwesomeIcon icon={faFlag}/>  Language</span></h2>
                               </div>
                              <div className="mt-5">
                                       <label htmlFor="">Bangla</label>
                                       <ProgressBar variant="success" now={100} /><br/>
                                       <label htmlFor="">English</label>
                                       <ProgressBar variant="info" now={80} /><br/>
                                       <label htmlFor="">Hindi</label>
                                       <ProgressBar variant="warning" now={80} />
                           </div>
                      </div>
                   </div>
                   <hr className="text-white"/>
                 <div className="container">
                  <h2 className="text-white">Coding Knowledge</h2>
                  <hr className="text-white"/>
                    <div className="d-flex bar">
                       <div className="coding col-md-6">
                       <h2 className="text-white"><FontAwesomeIcon icon={faLaptopCode}/>
                       <span> Front End</span></h2>
                       <hr className="text-white"/>
                       <ul className="d-flex">
                          <h6><FontAwesomeIcon icon={faJava}/></h6>
                          <h6><FontAwesomeIcon icon={faJsSquare}/></h6>
                          <h6><FontAwesomeIcon icon={faReacteurope}/></h6>
                          <h6><FontAwesomeIcon icon={faCss3Alt}/></h6>
                          <h6><FontAwesomeIcon icon={faHtml5}/></h6>
                          <h6><FontAwesomeIcon icon={faBootstrap}/></h6>
                       </ul>
                       </div>
                       <div className="coding col-md-6">
                       <h2 className="text-white"><FontAwesomeIcon icon={faLaptopCode}/>
                       <span> Backend</span></h2>
                       <hr className="text-white"/>
                       <ul className="d-flex">
                          <h6><FontAwesomeIcon icon={faHtml5}/></h6>
                          <h6><FontAwesomeIcon icon={faCss3Alt}/></h6>
                          <h6><FontAwesomeIcon icon={faReacteurope}/></h6>
                          <h6><FontAwesomeIcon icon={faJsSquare}/></h6>
                          <h6><FontAwesomeIcon icon={faNodeJs}/></h6>
                          <h6><FontAwesomeIcon icon={faBootstrap}/></h6>
                       </ul>
                       </div>
                    </div>
                 </div>
         
       </div> 
       </div>
     <div/>
   </div>
   );
};

export default Resume;
