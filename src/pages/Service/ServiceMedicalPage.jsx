import React, { useState } from 'react';
import ServiceMedicalDoctor from './ServiceMedicalDoctor.jsx';
import ServiceMedicalPatient from './ServiceMedicalPatient.jsx'; // 새로 추가

const ServiceMedicalPage = () => {
    const [selectedServiceId, setSelectedServiceId] = useState(null);

    // 서비스 데이터
    const medicalServices = [
        {
            id: 'doctor',
            title: '의료진을 위한',
            img: '/img/portrait-friendly-doctor-isolated-gray.jpg',
        },
        {
            id: 'patient',
            title: '환자를 위한',
            img: '/img/close-up-nurse-comforting-ill-patient-hospital-ward.jpg',
        }
    ];

    // 조건부 렌더링 함수
    const renderDetail = () => {
        if (selectedServiceId === 'doctor') {
            return <ServiceMedicalDoctor onBack={() => setSelectedServiceId(null)} />;
        }
        if (selectedServiceId === 'patient') {
            return <ServiceMedicalPatient onBack={() => setSelectedServiceId(null)} />;
        }
        return null;
    };

    return (
        <section id="medical-service" className="team section">
            {selectedServiceId ? (
                renderDetail()
            ) : (
                <div className="container" data-aos="fade-up">
                    <div className="row gy-4 justify-content-center">
                        {medicalServices.map((service) => (
                            <div
                                key={service.id}
                                className="col-lg-5 col-md-6"
                                onClick={() => setSelectedServiceId(service.id)}
                                style={{ cursor: 'pointer' }}
                            >
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
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default ServiceMedicalPage;