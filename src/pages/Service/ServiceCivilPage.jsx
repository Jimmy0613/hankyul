import React from "react";

const ServiceCivilPage = () => {
    return (
        <div className="container" data-aos="fade-up">
            {/* --- 민사 섹션 --- */}
            <div className="medical-section mb-5 pb-5">
                <div className="row align-items-center mb-4 gx-lg-6 flex-lg-row d-flex gx-xl-5 justify-content-center">
                    <div className="col-lg-6">
                        <p>
                            <h5 className="fw-bold" style={{color: '#002D5D'}}>정확한 법리와 치밀한 대응이 결과를 좌우합니다.</h5>
                            물품대금이나 임대차계약, 대여금반환 등 각종 계약 위반에 따른 분쟁이나 상대방의 불법행위로 인한 손해배상 사건은 권리관계의 정리와 증거 확보가 중요하므로 초기
                            단계에서 자료 확보와 전략 설정이 필요합니다.
                        </p>
                        <p>
                            <h5 className="fw-bold" style={{color: '#002D5D'}}>축적된 실무 경험으로 의뢰인이 원하는 결과를 만들어냅니다. </h5>
                            다수의 민사 사건을 수행해 온 경험을 바탕으로 사건의 구조와 핵심 쟁점을 정확히 파악합니다. 사건별 특성을 세심하게 검토하면서 기계적인 대응이 아닌 개별 사안에 맞춘
                            전략을 수립하며 의뢰인의 상황과 목표를 충분히 고려하여 현실적인 해결 방향을 제시합니다.
                        </p>
                        <p>
                            <h5 className="fw-bold" style={{color: '#002D5D'}}>한결은 계약서 검토부터 소송까지 체계적으로 대응합니다.</h5>
                            2인의 대표변호사가 상담부터 사건 종결까지 직접 대응하면서 계약서 검토, 내용증명 작성부터 소송까지 체계적으로 대응하여 의뢰인의 비용과 시간을 최소화하면서 최적의
                            결과를 도출합니다.
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
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>폭행 등 불법행위로 인한 손해배상
                        </li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>내용증명, 조정신청, 합의 등</li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>기타 민사 사건</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ServiceCivilPage;