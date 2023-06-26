import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import './App.css';

import ThemeChanger from './components/ThemeChanger';
import Navigation from './components/Navigation';

import Dashboard from './pages/Dashboard';
import Market from './pages/Market';
import Stake from './pages/Stake';
import Launch from './pages/Launch';

import Preloader from './components/Preloader';

const App = () => {
    const [appLoading, setAppLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setAppLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    if(appLoading){
        return <Preloader />
    }

    return(
        <>
            <div className="sidebar">
                <div className="sidebar__wrapper">
                    <Link to="/" className="sidebar__logo">
                        <img src="/assets/img/logo.png" alt="logo" className="img black" />
                        <img src="/assets/img/logo-black.png" alt="logo" className="img light" />
                    </Link>

                    <Navigation />
                </div>

                <ThemeChanger />
            </div>

            <div className="content">
                <Routes>
                    <Route path="/">
                        <Route index element={<Dashboard />} />
                        <Route path="/market" element={<Market />} />
                        <Route path="/stake" element={<Stake />} />
                        <Route path="/launch" element={<Launch />} />
                    </Route>
                </Routes>
            </div>
        </>
    )
}

export default App;
