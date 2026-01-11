import React from "react";
import { serviceData } from "../../data/serviceData.js";

const ServiceCivilPage = () => (
    <>
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
            <h2>Service</h2>
            <p>민사/이혼/상속</p>
        </div>
        <div className="col-12">
            <div className="p-4 border rounded">
                {serviceData.civil}
            </div>
        </div>
    </>
);

export default ServiceCivilPage;