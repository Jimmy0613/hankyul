import React from "react";
import {serviceData} from "../../data/serviceData.js";

const ServiceSchoolPage = () => (
    <>
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
            <h2>Service</h2>
            <p>학교폭력</p>
        </div>
        <div className="col-12">
            <div className="p-4 border rounded">
                {serviceData.school}
            </div>
        </div>
    </>
);

export default ServiceSchoolPage;