import { faCode } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const MyWorkDetails = (props) => {
    const {title, url, img, skills,skill1, skill2,skill3,skill4,skill5,skill6,skill7,skill8,skill9} = props.data;
    return (
        <div className="portfolio-Section">
         <div className="">
            <div className="port-img">
                <h3 className="text-center">{title}</h3>
                <img className="work-img" src={img} alt="" width="350" height="300"/>
           </div>
           <div className="skill">
            <ul className="projects">
              <li>{skills}</li>
              <li>{skill1}</li>
              <li>{skill2}</li>
              <li>{skill3}</li>
              <li>{skill4}</li>
              <li>{skill5}</li>
              <li>{skill6}</li>
              <li>{skill7}</li>
              <li>{skill8}</li>
              <li>{skill9}</li>
              <a className="liveLink" href={url} target="_blank"rel="noreferrer">Live Demo</a>
            </ul>
           </div>
         </div>
   </div>
    );
};

export default MyWorkDetails;