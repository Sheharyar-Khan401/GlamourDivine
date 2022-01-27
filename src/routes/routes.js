import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Aboutus from "../pages/about/AboutsUs";
import Beauty from "../pages/Categories/beauty/Beauty";
import Garden from "../pages/Categories/garden/Garden";
import Grocery from "../pages/Categories/grocery/Grocery";
import HomeKitchen from "../pages/Categories/Home&KItchen/HomeAndKitchen";
import Pets from "../pages/Categories/pets/Pets";
import SportsOutdoors from "../pages/Categories/sports&Outdoors/SpoortsOutdoors";
import Contact from "../pages/contact/Contact";
import Home from "../pages/homepage/Home";

export const AppRouter = (props) => {
    const myRoutes = (
        <Switch>
            <Route exact path={'/category-pets'}>
                <Pets />
            </Route>
            <Route exact path={'/home'}>
                <Home />
            </Route>
            <Route exact path="/category-beauty">
                <Beauty />
            </Route>
            <Route exact path="/contact">
                <Contact />
            </Route>
            <Route exact path="/category-garden">
                <Garden/>
            </Route>
            <Route exact path={'/category-grocery'}>
                <Grocery/>
            </Route>
            <Route exact path ="/category-home">
                <HomeKitchen/>
            </Route>
            <Route exact path='/about-us'>
                <Aboutus/>
            </Route>
            <Route exact path={'/category-sports'}>
                <SportsOutdoors/>
            </Route>
        </Switch>
    )
    return (
        <div>
            <BrowserRouter>
                {myRoutes}
            </BrowserRouter>
        </div>
    )
}