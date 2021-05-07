import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Shared/Navbar';
import Header from './Components/Header/Header';
import About from './Components/About/Resume';
import Contact from './Components/Contact/Contact';
import MyWork from './Components/MyWork/MyWork';
import Blog from './Components/Blog/Blog';
import AttachNav from './Components/AttachNav/AttachNav';
import Resume from './Components/About/Resume';

function App() {
   return (
      <Router>
         <Navbar></Navbar>
         <Switch>
            <Route exact path="/">
               <Header></Header>
            </Route>
            <Route exact path="/home">
               <Header></Header>
            </Route>
            <Route exact path="/resume">
               <Resume></Resume>
            </Route>
            <Route exact path="/work">
               <MyWork></MyWork>
            </Route>
            <Route excat path="/contact">
               <Contact></Contact>
            </Route>
            <Route exact path="/blog">
               <Blog></Blog>
            </Route>
         </Switch>
         <AttachNav></AttachNav>
      </Router>
   );
}

export default App;
