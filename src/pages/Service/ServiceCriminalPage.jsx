import React from "react";
import {serviceData} from "../../data/serviceData.js";

const ServiceCriminalPage = () => (
    <>
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
            <h2>Service</h2>
            <p>형사</p>
        </div>
        <div className="col-12">
            <div className="p-4 border rounded">
                {serviceData.criminal}
            </div>
        </div>
    </>
);

export default ServiceCriminalPage;