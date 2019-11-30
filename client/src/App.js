import React from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound/NotFound"
import Login from "./views/Login/Login"
import 'bootstrap/dist/css/bootstrap.min.css';
import WhitePaper from './views/WhitePaperPage/WhitePaper';
import About from './views/About/About';
import ProductPage from './views/ProductPage/ProductPage';
import Contact from "./views/Contact/Contact";
import Dashboard from "./views/Dashboard/Dashboard";
import Footer from './components/Footer/Footer';
import {HashLink as Link} from "react-router-hash-link";
import {loadReCaptcha} from 'react-recaptcha-v3'
import config from './config/config';
import './styles.css'
import leftPad from 'left-pad';
import 'bootstrap/dist/css/bootstrap.min.css';

const RoutedApp = withRouter(props => <App {...props}/>);

const App = (props) => {
    const {pathname} = props.location;
    const homeLogo = <Link to={'/home'}>
    <img src='/assets/home.png' className= 'home'
         alt='This is replacement text if an image does not display.'/>
</Link>;

    return (
        <div>
            {loadReCaptcha(config.captcha.sitekey)}
            <div style={{display: "flex", flexDirection: "row", width: "90%"}} className='m-auto' id='top'>
                {pathname == '/contact' ? homeLogo : null}
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/">
                        <Redirect to="/home"/>
                    </Route>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/whitepages" component={WhitePaper}/>
                    <Route exact path="/product" component={ProductPage}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/dashboard" component={Dashboard}/>
                    <Route exact path ="/not-found" component={NotFound}/>
                    <Redirect from='*' to="/not-found" />
                </Switch>
            </div>
            {pathname != '/not-found' ? <Footer/> : null}
        </div>
    );
};

export default RoutedApp;
