// ServiceLayout.jsx (틀 역할)
import { Outlet } from 'react-router-dom';
import {useEffect} from "react";

const ServiceLayout = () => {
    useEffect(() => {
        document.body.classList.add('portfolio-details-page');
        return () => document.body.classList.remove('portfolio-details-page');
    }, []);

    return (
        <section id="services" className="services section">
            <div className="container">
                <div className="row">
                    <Outlet /> {/* 여기에 MedicalPage나 SchoolPage가 갈아끼워짐 */}
                </div>
            </div>
        </section>
    );
};

export default ServiceLayout;