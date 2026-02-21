import React from "react";

const ServiceCivilPage = () => {
    return (
        <div className="container" data-aos="fade-up">
            {/* --- 민사 섹션 --- */}
            <div className="medical-section mb-5 pb-5">
                <div className="row align-items-center mb-4 gx-lg-6 flex-lg-row d-flex gx-xl-5 justify-content-center">
                    <div className="col-lg-6">
                        <p>
                            물품대금이나 임대차계약, 대여금반환 등 각종 계약 위반에 따른 민사상 권리 구제나 상대방의 불법행위로 인한 손해에 대한 배상을 청구할 수 있습니다.
                        </p>
                        <p>
                            공동법률사무소 한결은 풍부한 실무 경험을 바탕으로 2인의 대표변호사가 상담부터 사건 끝까지 함께 대응합니다.

                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img src="/img/civil.jpg" alt="Criminal" className="img-fluid rounded-4 shadow-sm"
                             style={{maxHeight: '300px', width: '100%', objectFit: 'cover'}}/>
                    </div>
                </div>
                {/* 세부 업무분야 블록 (가로로 넓게) */}
                <div className="service-description p-4 bg-light rounded-4 shadow-sm">
                    <h5 className="fw-bold mb-3"><i className="bi bi-layers-fill me-2 text-primary"></i>세부 업무분야</h5>
                    <ul className="list-unstyled row gy-2 mb-0">
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>임대차보증금반환</li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>매매대금</li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>공사대금</li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>위약금</li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>부동산 인도</li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>폭행 등 불법행위로 인한 손해배상</li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>내용증명, 조정신청, 합의 등</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ServiceCivilPage;