import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AboutPage from '../components/AboutPage';
import PortfolioPage from '../components/PortfolioPage';
import Header from '../components/Header';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={PortfolioPage} exact={true}/>
                <Route path="/about" component={AboutPage} exact={true}/>
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;