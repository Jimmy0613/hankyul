import React from "react";

const ServiceLaborPage = () => {
    return (
        <div className="container" data-aos="fade-up">
            {/* --- 민사 섹션 --- */}
            <div className="medical-section mb-5 pb-5">
                <div className="row align-items-center mb-4 gx-lg-6 flex-lg-row d-flex gx-xl-5 justify-content-center">
                    <div className="col-lg-6">
                        <p>
                            인사노무분야는 민사, 형사 등의 문제가 얽힌 법률 분쟁입니다.
                        </p>
                        <p>
                            공동법률사무소 한결은 실무 경험을 토대로 부당해고, 급여, 직장내 갈등 문제까지 노무 전반에 걸친 분쟁에 대해 대응합니다.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img src="/img/labor.jpg" alt="Criminal" className="img-fluid rounded-4 shadow-sm"
                             style={{maxHeight: '300px', width: '100%', objectFit: 'cover'}}/>
                    </div>
                </div>
                {/* 세부 업무분야 블록 (가로로 넓게) */}
                <div className="service-description p-4 bg-light rounded-4 shadow-sm">
                    <h5 className="fw-bold mb-3"><i className="bi bi-layers-fill me-2 text-primary"></i>세부 업무분야</h5>
                    <ul className="list-unstyled row gy-2 mb-0">
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>임금청구

                        </li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>부당해고
                        </li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>직장내괴롭힘
                        </li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>업무상 질병, 산업재해
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ServiceLaborPage;