import React, {useEffect} from 'react';
import {MapPin, Car} from "lucide-react";
import ContactMap from "./ContactMap.jsx";

const DirectionsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.classList.add('portfolio-details-page');
        return () => document.body.classList.remove('portfolio-details-page');
    }, []);

    return (
        <section id="location" className="contact section">
            <div className="container" data-aos="fade-up">

                <div className="row gx-lg-5 align-items-start">
                    {/* 왼쪽: 오시는 길 정보 */}
                    <div className="col-lg-6">
                        <div className="location-info-list">

                            {/* 1. 주소 카드 */}
                            <div
                                className="d-flex align-items-start p-4 mb-3 bg-white rounded-4 shadow-sm border-start border-4"
                                style={{borderColor: '#002D5D'}} data-aos="fade-up" data-aos-delay="200">
                                <div
                                    className="me-3 d-flex align-items-center justify-content-center bg-light rounded-circle"
                                    style={{width: '48px', height: '48px', minWidth: '48px'}}>
                                    <MapPin size={24} strokeWidth={2.5} color="#002D5D"/>
                                </div>
                                <div>
                                    <h3 className="fs-5 fw-bold mb-2" style={{color: '#333'}}>주소</h3>
                                    <p className="mb-0 text-dark fw-medium">인천 미추홀구 학익소로 63, 신동빌딩 5층</p>
                                    <p className="small text-muted mt-1">인천지방법원·검찰청 인근</p>
                                </div>
                            </div>

                            {/* 2. 주차 안내 카드 */}
                            <div
                                className="d-flex align-items-start p-4 mb-4 bg-white rounded-4 shadow-sm border-start border-4"
                                style={{borderColor: '#FACC15'}} data-aos="fade-up" data-aos-delay="300">
                                <div
                                    className="me-3 d-flex align-items-center justify-content-center bg-light rounded-circle"
                                    style={{width: '48px', height: '48px', minWidth: '48px'}}>
                                    <Car size={24} strokeWidth={2.5} color="#002D5D"/>
                                </div>
                                <div>
                                    <h3 className="fs-5 fw-bold mb-2" style={{color: '#333'}}>주차 안내</h3>
                                    <p className="text-muted mb-2 small">건물 외부 주차장이 협소합니다.</p>
                                    <div className="p-2 px-3 rounded-2"
                                         style={{backgroundColor: '#fff9e6', border: '1px dashed #FACC15'}}>
                                        <p className="mb-0 small fw-bold" style={{color: '#856404'}}>
                                            인근 공영주차장 또는 유료주차장을 이용해 주시기 바랍니다.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* 오른쪽: 지도 */}
                    <div className="col-lg-6 mt-4 mt-lg-0">
                        <div className="map-wrapper rounded-4 overflow-hidden shadow-lg border">
                            <ContactMap/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DirectionsPage;