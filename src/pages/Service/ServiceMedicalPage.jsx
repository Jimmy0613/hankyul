import React, {useState} from "react";
import {serviceData} from "../../data/serviceData.js";

const ServiceMedicalPage = () => {
    // 의료 내부에서 사용할 탭 상태
    const [innerTab, setInnerTab] = useState('doctor');

    return (
        <>
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Service</h2>
                <p>여기에 제목 넣어도 되고 빼도 되고</p>
            </div>
            <div className="col-12">
                <ul className="nav nav-tabs custom-tabs">
                    <li className="nav-item">
                        <button className={`nav-link ${innerTab === 'doctor' ? 'active' : ''}`}
                                onClick={() => setInnerTab('doctor')}>의료진을 위한
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link ${innerTab === 'patient' ? 'active' : ''}`}
                                onClick={() => setInnerTab('patient')}>환자를 위한
                        </button>
                    </li>
                </ul>
                <div className="tab-content p-4 border border-top-0 rounded-bottom">
                    {serviceData.medical[innerTab]}
                </div>
            </div>
        </>
    );
};

export default ServiceMedicalPage;