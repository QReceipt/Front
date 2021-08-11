import './App.css';
import './AppMedia.css';

import Reg from "./components/Presentational/pages/Register"
import Login from "./components/Presentational/pages/Login"
import SeeAll from "./components/Presentational/pages/SeeAll"
import Map from "./components/Presentational/pages/Map"
import Seller from "./components/Presentational/pages/Seller"

import {Route} from 'react-router-dom'

function App() {
    return (
    <div>
        <Route path="/register" component={Reg}/>
        <Route path="/login" component={Login}/>
        <Route path="/all" component={SeeAll} exact/>
        <Route path="/map" component={Map}/>
        <Route path="/Seller" component={Seller} />
    </div>
    );
}

export default App;
