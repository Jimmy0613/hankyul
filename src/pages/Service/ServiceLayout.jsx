// ServiceLayout.jsx (틀 역할)
import {Outlet} from 'react-router-dom';
import React, {useEffect} from "react";
import ServiceNavigationPage from "./ServiceNavigation.jsx";

const ServiceLayout = () => {
    useEffect(() => {
        document.body.classList.add('portfolio-details-page');
        return () => document.body.classList.remove('portfolio-details-page');
    }, []);

    return (
        <section id="services" className="services section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Outlet/>
                    </div>
                    <div className="col-12">
                        <ServiceNavigationPage/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceLayout;