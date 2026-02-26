import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {ChevronsRight} from "lucide-react";

const ServiceMedicalDoctor = () => {
    const navigate = useNavigate();

    return (
        <div className="container" data-aos="fade-up">
            {/* 뒤로가기 버튼 */}
            <button
                onClick={() => navigate('/Service/medical')}
                className="btn btn-sm btn-light mb-4"
            >
                <i className="bi bi-arrow-left"></i> 목록으로 돌아가기
            </button>
            {/* 1. 상단 핵심 타이틀 */}
            <div className="text-center mb-5 py-4">
                <h2 className="fw-bold" style={{color: '#002D5D'}}>
                    의료소송의 핵심은 진료기록부입니다.
                </h2>
                <h4 className="mt-3 text-muted fw-normal"> 한결은 비법률가에게 진료기록부를 맡기지 않고, <strong>간호사 출신 변호사</strong>가 직접
                    분석합니다.
                </h4>
            </div>

            {/* --- 형사 섹션 --- */}
            <div className="medical-section mb-5 pb-5">
                <h3 className="fw-bold mb-4 text-primary-emphasis border-start border-4 border-primary ps-3">형사</h3>
                <div className="row align-items-center mb-4 gx-lg-5">
                    <div className="col-lg-5">
                        <p className="mb-3">
                            의료인에 대한 가장 흔한 형태의 형사 처벌 유형은 보통 허위 및 과장 광고, 진료 거부 등 의료법 위반과 보건범죄단속에관한특별조치법, 응급의료에관한법률 등 관련
                            법령을 위반한 경우입니다.
                        </p>
                        <p className="mb-3">
                            또한 진료상 과실로 인해 환자의 생명, 신체에 위해를 가할 경우 형법상 업무상 과실치사상죄로 규율되는 사건도 의료법 위반 사건에 포함됩니다.
                        </p>
                        <p className>
                            형사 처벌을 받는 경우 형사처벌로 그치는 것이 아니라 자격정지 등 행정처분을 받을 수 있다는 점을 유의해야 합니다.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img src="/img/medical_criminal.jpg" alt="Criminal" className="img-fluid rounded-4 shadow-sm"
                             style={{maxHeight: '300px', width: '100%', objectFit: 'cover'}}/>
                    </div>
                </div>
                {/* 세부 업무분야 블록 (가로로 넓게) */}
                <div className="service-description p-4 bg-light rounded-4 shadow-sm col-11">
                    <h5 className="fw-bold mb-3"><i className="bi bi-layers-fill me-2 text-primary"></i>세부 업무분야</h5>
                    <ul className="list-unstyled row gy-2 mb-0">
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>업무상과실치사상</li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>무면허 의료 행위</li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>진료기록부 허위 작성</li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>대리처방</li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>진료거부</li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>마약류 오남용 처방</li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>리베이트 수수 등</li>
                    </ul>
                </div>
            </div>

            {/* --- 민사 섹션 (지그재그: 이미지 좌측) --- */}
            <div className="medical-section mb-5 pb-5">
                <h3 className="fw-bold mb-4 text-primary-emphasis border-start border-4 border-primary ps-3">민사</h3>
                <div className="row align-items-center mb-4 gx-lg-5 flex-lg-row">
                    <div className="col-lg-5">
                        <p className="mb-3">환자측에서 진료 중 과실, 설명의무위반 등을 주장하며 손해배상을 청구하는 경우 이에 대한 적극적인 대응이 필요합니다.<br/>재판부를
                            설득하기 위해 의학적 근거를 법리에 맞게 주장할 필요가 있으므로 의료현장에 대한 이해와 법적 지식을 갖춘 변호사를 찾아 의료소송을 맡기셔야 합니다.
                        </p>
                        <p>이외에도 한국의료분쟁조정중재원, 한국소비자원 등 중재기관을 통한 조정 사건에 대해서도 아무런 준비 없이 사건에 대응하여서는 안되고, 변호사와 함께 사건에 대응하시거나,
                            반드시 한 번은 변호사와 상담을 받아 잘못된 방향으로 사건이 진행되는 것을 막아야 합니다.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img src="/img/medical_civil.jpg" alt="Civil" className="img-fluid rounded-4 shadow-sm"
                             style={{maxHeight: '300px', width: '100%', objectFit: 'cover'}}/>
                    </div>
                </div>
                <div className="service-description p-4 bg-light rounded-4 shadow-sm col-11">
                    <h5 className="fw-bold mb-3"><i className="bi bi-layers-fill me-2 text-primary"></i>세부 업무분야</h5>
                    <ul className="list-unstyled row gy-2 mb-0">
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>수술 후 합병증 발생</li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>설명의무 위반</li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>항암치료 후 합병증 발생</li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>성형외과 / 피부과 시술 후 부작용 및
                            후유 장애 분쟁
                        </li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>치과 치료 후 합병증 발생 등</li>
                    </ul>
                </div>
            </div>

            {/* --- 행정 섹션 (다시 이미지 우측) --- */}
            <div className="medical-section mb-5 pb-5">
                <h3 className="fw-bold mb-4 text-primary-emphasis border-start border-4 border-primary ps-3">
                    행정</h3>
                <div className="row align-items-center mb-4 gx-lg-5">
                    <div className="col-lg-5">
                        <p className="mb-3">행정소송이란 행정청의 위법한 처분이나 부작위, 행정심판 재결로 인해 권리나 이익을 침해받은 국민이 법원에 제기하는 권리구제 절차를
                            말합니다.</p>
                        <p>의료인에 대한 흔한 형태의 행정처분 유형은 진료비허위청구나 부당청구에 따른 자격정지(의료인) 또는 업무정지(의료기관)처분이 있습니다. 이외에 의료법 위반이나 관련 법령
                            위반에 따른 자격정지 등이 있으며, 보험급여비용삭감처분 취소소송 등도 빈번합니다.</p>
                    </div>
                    <div className="col-lg-6">
                        <img src="/img/medical_admin.jpg" alt="Admin" className="img-fluid rounded-4 shadow-sm"
                             style={{maxHeight: '300px', width: '100%', objectFit: 'cover'}}/>
                    </div>
                </div>
                <div className="service-description p-4 bg-light rounded-4 shadow-sm col-11">
                    <h5 className="fw-bold mb-3"><i className="bi bi-layers-fill me-2 text-primary"></i>세부 업무분야</h5>
                    <ul className="list-unstyled row gy-2 mb-0">
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>현지조사 대응</li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>업무정지 처분/자격정지 처분에 대한
                            대응
                        </li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>집행정지</li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>취소소송 등</li>
                    </ul>
                </div>
            </div>
            <Link to={`/Service/medical/patient`} className="text-decoration-none">
                <div
                    className="other-member-card p-2 border rounded-3 d-flex align-items-center bg-white shadow-sm-hover transition col-2">
                    <ChevronsRight/>
                    <img
                        src='/img/close-up-nurse-comforting-ill-patient-hospital-ward.jpg'
                        alt='환자를 위한'
                        className="rounded-circle me-3"
                        style={{
                            width: '45px',
                            height: '45px',
                            objectFit: 'cover',
                            border: '2px solid #eee'
                        }}
                    />
                    <div>
                        <div className="text-dark fw-bold" style={{fontSize: '0.95rem'}}>
                            환자를 위한
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ServiceMedicalDoctor;