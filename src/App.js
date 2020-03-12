import React, { useState, useLayoutEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Column, Row } from 'simple-flexbox';
import './App.css';

import ErrorBoundary from './components/layout/ErrorBoundary';
import IconBurger from './assets/icon-burger';
import SidebarComponent from './components/sidebar/SidebarComponent';
import HeaderComponent from './components/header/HeaderComponent';
import EventContent from './components/content/pages/EventContent';
import NotificationContent from './components/content/pages/NotificationContent';
import WelcomContent from './components/content/pages/WelcomContent';

const App = () => {
    const [ , forceUpdate ] = useState();
    const [isEspanded, setIsEspanded] = useState(false);
    const resize = useCallback(() => forceUpdate({}), []);

    const isMobile = window.innerWidth <= 960;

    useLayoutEffect(() => {
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
        };
    });

    const toggleMenu = () => setIsEspanded(prevState => !prevState);
    
    return (
        <React.StrictMode>
            <ErrorBoundary>
                <Row className="_100_container">
                    <Router>

                {!isEspanded && isMobile && (
                    <div className="_100_burgerIcon" onClick={toggleMenu}>
                        <IconBurger />
                    </div>
                )}

                        <SidebarComponent sidebarProps={{isEspanded, setIsEspanded, toggleMenu}} />

                        <Column flexGrow={1} className="_100_section">
                            <HeaderComponent isEspanded={isEspanded} />
                            <Switch>
                                <Route exact path="/events/:title" component={EventContent} />
                                <Route exact path="/notifications/:title" component={NotificationContent} />
                                <Route exact path="/" component={WelcomContent} />
                            </Switch>
                        </Column>
                        
                    </Router>
                </Row>
            </ErrorBoundary>
        </React.StrictMode>
    );
}

export default App;
