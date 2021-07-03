import React from 'react';
import shop from '../../Photos/ecommerce.png';
import ecommerce from '../../Photos/fasfion.png';
import email from '../../Photos/email.png';
import booking from '../../Photos/booking.png';
import slider from '../../Photos/slider.png';
import transport from '../../Photos/transport.png';
import hungry from '../../Photos/hungry.png';
import cleaning from '../../Photos/cleaning.png';
import portfolio from '../../Photos/portfolio.png';
import redux from '../../Photos/redux.png';
import blog from '../../Photos/bolg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MyWork.css';
import Zoom from 'react-reveal/Zoom';
import Mydetails from '../Sidebar/MyDetails/Mydetails';
import MyWorkDetails from './MyWorkDetails';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const workData = [
      {
         title:"Static portfolio", skill1:"HTML",
         skill2:"CSS3",  skill3:"Bootstrap",
         skill5:"React", skill6:"Node.Js",
         skill7:"Mongodb", skill8:"Express",
         skill9:"CORS",skill9:"Github",
         skills:"FireBase", skill4:"JavaScript",
         img: portfolio,
         url:"https://uddipan01.github.io/Assignment01/assignment"
      },
      {
         title:"Ecommerce", skill1:"HTML",
         skill2:"CSS3", skill3:"Bootstrap",
         skill5:"React", skill6:"Node.Js",
         skill7:"Mongodb", skill8:"Express",
         skill9:"CORS",skill9:"Github",
         skills:"FireBase", skill4:"JavaScript",
         img: ecommerce,
         url:"https://uddipan01.github.io/Assignment-2/"
      },
      {
         title:"PHD To HTML", skill1:"HTML",
         skill2:"CSS3", Skskill3ill3:"Bootstrap",
         skill5:"React", skill6:"Node.Js",
         skill7:"Mongodb", skill8:"Express",
         skill9:"CORS",skill9:"Github",
         skills:"FireBase", skill4:"JavaScript",
         img: email,
         url:"https://uddipan01.github.io/psd-email/"
      },
      {
         title:"Booking a Ticket", skill1:"HTML",
         skill2:"CSS3", skill3:"Bootstrap",
         skill5:"React", skill6:"Node.Js",
         skill7:"Mongodb", skill8:"Express",
         skill9:"CORS",skill9:"Github",
         skills:"FireBase", img: slider,
         skill4:"JavaScript",
         img: booking,
         url:"https://uddipan01.github.io/Assignment-04/"
      },
      { title:"BD SHOP", skill1:"HTML", skill2:"CSS3",
         skill3:"Bootstrap", skill4:"JavaScript",
         skill5:"React", skill6:"Node.Js",
         skill7:"Mongodb",skill8:"Express",
         skill9:"CORS", skill9:"Github",
         skills:"FireBase", img: shop,
         url:"https://full-stack-client-8eafd.web.app/"
      },
      { title:"Making-Slider", skill1:"HTML", skill2:"CSS3",
         skill3:"Bootstrap", skill4:"JavaScript",
         skill5:"React", skill6:"Node.Js",
         skill7:"Mongodb", skill8:"Express",
         skill9:"CORS",skill9:"Github",
         skills:"FireBase", img: slider,
         url:"https://uddipan01.github.io/Assignment-6/"
      },
      { title:"Transport-Service", skill1:"HTML", skill2:"CSS3",
         skill3:"Bootstrap", skill4:"JavaScript",
         skill5:"React", skill6:"Node.Js",
         skill7:"Mongodb", skill8:"Express",
         skill9:"CORS", skill9:"Github", skills:"FireBase",
         img: transport, url:"https://assignmentnine-8b45d.web.app/"
      },
      { title:"Food-Corner", skill1:"HTML", skill2:"CSS3",
      skill3:"Bootstrap", skill4:"JavaScript",
      skill5:"React", skill6:"Node.Js",
      skill7:"Mongodb", skill8:"Express",
      skill9:"CORS", skill9:"Github", skills:"FireBase",
      img: hungry, url:"https://uddipan01.github.io/Assignment-5/"
   },
   { title:"Cleaning-Solution", skill1:"HTML", skill2:"CSS3",
   skill3:"Bootstrap", skill4:"JavaScript",
   skill5:"React", skill6:"Node.Js",
   skill7:"Mongodb", skill8:"Express",
   skill9:"CORS", skill9:"Github", skills:"FireBase",
   img: cleaning, url:"https://complete-client-website.web.app/"
},
{ title:"Movee", skill1:"HTML", skill2:"CSS3",
skill3:"Bootstrap", skill4:"JavaScript",
skill5:"React", skill6:"Node.Js",
skill7:"Mongodb", skill8:"Express",
skill9:"CORS", skill9:"Github", skills:"FireBase",
img: redux, url:"https://my-reactredux.web.app/"
},
{ title:"Blogs", skill1:"HTML", skill2:"CSS3",
skill3:"Bootstrap", skill4:"JavaScript",
skill5:"React", skill6:"Node.Js",
skill7:"Mongodb", skill8:"Express",
skill9:"CORS", skill9:"Github", skills:"FireBase",
img: blog, url:"https://my-blogs-site.web.app/"
}
   ]

const MyWork = () => {
   return (
      <div className="container">
        <div className="row">
           <div className="col-md-4">
           <Mydetails></Mydetails>
           </div>
           <div className="col-md-8 scrollbar bg-white">
            <h4 className="mt-3"><span><FontAwesomeIcon icon={faCheckCircle}/>MY PROJECT</span></h4>
            <hr className="text-white"/>
              { 
               workData.map(data => <MyWorkDetails data={data} key={data.title}/>)
              }
           </div>
        </div>
    </div>


     
   );
};

export default MyWork;

