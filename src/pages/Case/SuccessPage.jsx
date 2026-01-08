import React, {useEffect, useState} from "react";
import {successData} from "../../data/successData.js";

const SuccessPage = () => {
    useEffect(() => {
        document.body.classList.add('portfolio-details-page');

        return () => {
            document.body.classList.remove('portfolio-details-page')
        };
    }, []);

    const [activeTab, setActiveTab] = useState('medical'); // 기본 탭: 의료

    return (
        <>
            <section id="services" className="services section">

                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <ul className="nav nav-tabs custom-tabs">
                                <li className="nav-item">
                                    <button className={`nav-link ${activeTab === 'medical' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('medical')}>의료
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className={`nav-link ${activeTab === 'school' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('school')}>학교폭력
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className={`nav-link ${activeTab === 'criminal' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('criminal')}>형사
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className={`nav-link ${activeTab === 'civil' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('civil')}>민사/이혼/상속
                                    </button>
                                </li>
                            </ul>

                            <div className="tab-content p-4 border border-top-0 rounded-bottom">
                                {successData[activeTab]}
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
};

export default SuccessPage;

