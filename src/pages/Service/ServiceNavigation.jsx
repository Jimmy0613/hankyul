import { Link, useLocation } from 'react-router-dom';
import { Stethoscope, School, Gavel, Users, Briefcase, FileText } from "lucide-react";

const ServiceNavigationPage = () => {
    const location = useLocation(); // 현재 경로 가져오기 (예: /Service/civil)

    // 업무분야 데이터 배열화 (관리하기 편하게!)
    const services = [
        { path: "/Service/medical", label: "의료", icon: <Stethoscope size={16} className="me-2"/> },
        { path: "/Service/school", label: "학교폭력", icon: <School size={16} className="me-2"/> },
        { path: "/Service/criminal", label: "형사", icon: <Gavel size={16} className="me-2"/> },
        { path: "/Service/civil", label: "민사", icon: <FileText size={16} className="me-2"/> },
        { path: "/Service/family", label: "가사", icon: <Users size={16} className="me-2"/> },
        { path: "/Service/labor", label: "노무", icon: <Briefcase size={16} className="me-2"/> },
    ];

    return (
        <div className="container mt-5"> {/* 간격 확보를 위해 container와 mt-5 추가 */}
            <hr style={{ opacity: '0.1' }} />

            <div className="other-services-nav pt-4">
                <h5 className="fw-bold mb-4 text-center" style={{ color: '#1a3a5f' }}>
                    다른 업무분야
                </h5>
                <div className="d-flex flex-wrap justify-content-center gap-2">
                    {services
                        // 현재 경로(location.pathname)와 일치하지 않는 것만 보여주기
                        .filter(service => !location.pathname.startsWith(service.path))
                        .map((service, index) => (
                            <Link
                                key={index}
                                to={service.path}
                                className="btn btn-outline-primary btn-sm px-4 py-2 rounded-pill d-flex align-items-center shadow-sm"
                            >
                                {service.icon} {service.label}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceNavigationPage;