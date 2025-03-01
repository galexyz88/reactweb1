import React from "react"
import Navbar from "./Components/Navbar";
import "./App.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./Components/pages/Home"
import Services from "./Components/pages/Services";
import Products from "./Components/pages/Products";
import SignUp from "./Components/pages/SignUp";
function App(){
    return(
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/services" component={Services}/>
                    <Route path="/products" component={Products}/>
                    <Route path="/sign-up" component={SignUp}/>

                </Switch>
            </Router>
        </>
    )
}

export default App