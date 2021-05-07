import React from 'react';
import semanticHtml from '../../Photos/html-semantic.jpg';
import hooks from '../../Photos/hooks.jpg';
import es6 from '../../Photos/jsES6.jpg';
import './Blog.css';
import Fade from 'react-reveal/Fade';
import Mydetails from '../Sidebar/MyDetails/Mydetails';

const Blog = () => {
   return (
      <div className="container d-flex">
       <div className="col-md-4">
       <Mydetails></Mydetails>
       </div>
         <div className="col-md-8 scrollbar">
         <h4 className="text-white mt-5 mb-3">Comming Soon ...</h4>
         <hr className="text-white" style={{ width: '50%' }} />
         </div>
         </div>
   );
};

export default Blog;
