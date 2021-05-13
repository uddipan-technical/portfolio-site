import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AttachNav.css';
import {
   faFacebook,
   faGithub,
   faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AttachNav = () => {
   return (
      <div className="social">
         <a href="https://github.com/uddipan01" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
         </a>
         {'  '}
         <a
            href="#"
            target="_blank"
            rel="noreferrer"
         >
            <FontAwesomeIcon icon={faLinkedin} />
         </a>
         {'  '}
         <a
            href="#"
            target="_blank"
            rel="noreferrer"
         >
            <FontAwesomeIcon icon={faFacebook} />
         </a>
         <Link to="/home">
            <FontAwesomeIcon icon={faHome} />
         </Link>
      </div>
   );
};

export default AttachNav;
