import { HashRouter as Router, Switch, Route, Redirect, useHistory} from "react-router-dom";
import Home from "./Components/Pages/Home";

// CSS
import "./assets/css/Style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper-bundle.min.css'
import AboutNgo from "./Components/Pages/AboutNgo";
import Contact from "./Components/Pages/Contact";
import ScrollToTop from "./Components/Pages/ScrollToTop";
// import About from "./Components/Pages/About";

function App() {
  const history = useHistory();

  return (
    <div className="App">
    <Router history={history} basename='/' >
   <ScrollToTop>
       <Switch>
         {/* <Route exact path='/login' component={Login} /> */}
         <Route exact path='/' component={Home} />
         <Route path='/about' component={AboutNgo} />
         <Route path='/contact' component={Contact} />
         <Redirect from="*" to="/" />
       </Switch>
       </ScrollToTop>
     </Router>
   
    </div>
  );
}

export default App;
