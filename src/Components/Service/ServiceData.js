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
        Description:"I will fix your any wordPress problems, related to themes, plugin, css, javascript and react.I can also handle backend error."
    },
    {
        siteTitle:"Wev Design",
        icon: "far fa-code",
        Description:"I will create and convert psd template to html.It will be pixel perfect design and fully responsive website."
    },
    {
        siteTitle:"Web Develoment",
        icon: "far fa-code",
        Description:"Create your website with Bootstrap. I can developed your site using JavaScript and React"
    },
    {
        siteTitle:"Landing Page",
        icon: "far fa-code",
        Description:"Looking for someone for a landing page. I will create you a eye-catching landing page with a professional touch with any kind of requirements."
    },
    {
        siteTitle:"Clone with React",
        icon: "far fa-code",
        Description:"I Cloned any site 100% cloning with react. Just send me your choice web site I will clone it same to same.  ."
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