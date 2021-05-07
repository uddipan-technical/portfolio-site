import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Mydetails from '../Sidebar/MyDetails/Mydetails';

const Contact = () => {
   const sendEmail = e => {
      e.preventDefault();
      emailjs
         .sendForm(
            'uc1234',
            'email1234',
            e.target,
            'user_2D7iYnkTpxoSjae7uT8Ij'
         )
         .then(
            result => {
               console.log(result.text);
            },
            error => {
               console.log(error.text);
            }
         );
   };

   return (
      <div className="container">
         <div className="row align-items-center">
            <div className="col-md-4 text-white">
               <Mydetails></Mydetails>
            </div>
            <div className="contact-form p-5 shadow rounded col-md-6">
               <h3 className="text-white text-center fw-bold">
                  GET IN <span style={{ color: '#daa520' }}>TOUCH</span>{' '}
               </h3>
               <form onSubmit={sendEmail}>
                  <input
                     className="form-control"
                     type="text"
                     name="user_name"
                     placeholder="Your Name"
                  />
                  <br />
                  <input
                     className="form-control"
                     type="email"
                     name="email"
                     placeholder="Your Email Address"
                     required
                  />
                  <br />
                  <textarea
                     rows="4"
                     className="form-control "
                     name="Your Message Here..."
                     placeholder="Type your message"
                     required
                  />
                  <br />
                  <button className="btn send-btn rounded" type="submit">
                     Send Message <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Contact;
