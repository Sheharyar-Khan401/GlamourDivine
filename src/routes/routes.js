import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Beauty from "../pages/Categories/beauty/Beauty";
import Garden from "../pages/Categories/garden/Garden";
import Grocery from "../pages/Categories/grocery/Grocery";
import Pets from "../pages/Categories/pets/Pets";
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