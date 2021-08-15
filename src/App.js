import './App.css';
import './AppMedia.css';

import Reg from "./components/Presentational/pages/Register"
import Login from "./components/Presentational/pages/Login"
import SeeAll from "./components/Presentational/pages/SeeAll"
import SeeId from "./components/Presentational/pages/SeeId"
import Map from "./components/Presentational/pages/Map"
import Seller from "./components/Presentational/pages/Seller"


import axios from 'axios';
import {Route} from 'react-router-dom'

axios.defaults.baseURL = "http://mmyu.synology.me:8080/";
axios.defaults.withCredentials = true;

function App() {
    return (
    <div>
        <Route path="/register" component={Reg}/>
        <Route path="/login" component={Login}/>
        <Route path="/all" component={SeeAll} exact/>
        <Route path="/map" component={Map}/>
        <Route path="/Seller" component={Seller} />
        <Route path="/SeeOne" component={SeeId} />
    </div>
    );
}

export default App;
