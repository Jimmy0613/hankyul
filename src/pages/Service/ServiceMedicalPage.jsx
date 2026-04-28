import React from 'react';
import { Link } from 'react-router-dom';
import Seo from "../../components/seo/Seo.jsx";

const ServiceMedicalPage = () => {
    // 서비스 데이터
    const medicalServices = [
        {
            id: 'doctor',
            title: '의료진을 위한',
            img: '/img/portrait-friendly-doctor-isolated-gray.jpg',
            path: '/Service/medical/doctor'
        },
        {
            id: 'patient',
            title: '환자를 위한',
            img: '/img/close-up-nurse-comforting-ill-patient-hospital-ward.jpg',
            path: '/Service/medical/patient'
        }
    ];

    return (
        <>
        <Seo
            title="인천 의료소송 변호사 | 공동법률사무소 한결"
            description="인천 의료소송 변호사를 찾는 분들을 위해 의료진 측과 환자 측 사건 대응을 나누어 안내하는 공동법률사무소 한결의 의료분쟁 페이지입니다."
            keywords="인천 의료소송 변호사, 의료분쟁 변호사, 의료과오, 환자 측 의료소송, 의료진 측 의료소송, 공동법률사무소 한결"
            path="/Service/medical"
        />
        <section id="medical-service" className="team section">
            <div className="container" data-aos="fade-up">
                <div className="row gy-4 justify-content-center">
                    {medicalServices.map((service) => (
                        <div key={service.id} className="col-lg-5 col-md-6">
                            {/* Link 태그로 감싸서 페이지 이동 처리 */}
                            <Link to={service.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="member team-member service-card">
                                    <div className="member-img position-relative overflow-hidden rounded-4"
                                         style={{ height: '350px' }}>
                                        <img
                                            src={service.img}
                                            className="img-fluid w-100 h-100"
                                            alt={service.title}
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <div className="social d-flex justify-content-center align-items-center">
                                            <span className="text-white">자세히 보기 <i className="bi bi-plus"></i></span>
                                        </div>
                                    </div>
                                    <div className="member-info text-center pt-4">
                                        <h4 className="mt-2 fw-bold">{service.title}</h4>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
};

export default ServiceMedicalPage;