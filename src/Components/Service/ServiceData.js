import { faCode } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Home from '../Home/Home';
import ServiceDetails from './ServiceDetails';

const serviceData = [
    {
        title: "My Service",
        siteTitle:"Woo-commerce Website",
        icon: "far fa-code",
        Description:"I am expart on creating woocommerce site.If tou wanted to creata with React and even without code I can do."
    },
    {
        siteTitle:"Fixing Errors",
        icon: "far fa-code",
        Description:"I am expart on creating woocommerce site.If tou wanted to creata with React and even without code I can do."
    },
    {
        siteTitle:"Wev Design",
        icon: "far fa-code",
        Description:"I am expart on creating woocommerce site.If tou wanted to creata with React and even without code I can do."
    },
    {
        siteTitle:"Web Develoment",
        siteTitle:"WordPress",
        icon: "far fa-code",
        Description:"I am expart on creating woocommerce site.If tou wanted to creata with React and even without code I can do."
    },
    {
        siteTitle:"Landing Page",
        icon: "far fa-code",
        Description:"I am expart on creating woocommerce site.If tou wanted to creata with React and even without code I can do."
    },
    {
        siteTitle:"PHD to React",
        icon: "far fa-code",
        Description:"I am expart on creating woocommerce site.If tou wanted to creata with React and even without code I can do."
    },
]

const ServiceData = () => {
    return (
        <section className="col-md-12">
    
          <div className="card-deck mt-2">
               {
                serviceData.map(data => <ServiceDetails data={data} key={data.title}/>)
               }
          </div>
  </section>
    );
};

export default ServiceData;