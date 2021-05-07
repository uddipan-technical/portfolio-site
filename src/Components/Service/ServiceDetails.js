import { faCheckCircle, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ServiceDetails = (props) => {
    
   const {title, siteTitle, Description} = props.data;
    return (
           <div className="col-md-6">
                <div className="serviceData text-center mt-3">
                <i className="mt-5"><FontAwesomeIcon icon={faCode}/></i>
                <h4>{siteTitle}</h4>
                <p>{Description}</p>
          </div>
           </div>
    );
};

export default ServiceDetails;