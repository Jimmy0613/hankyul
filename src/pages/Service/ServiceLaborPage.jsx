import React from "react";

const ServiceLaborPage = () => {
    return (
        <div className="container" data-aos="fade-up">
            {/* --- 민사 섹션 --- */}
            <div className="medical-section mb-5 pb-5">
                <div className="row align-items-center mb-4 gx-lg-6 flex-lg-row d-flex gx-xl-5 justify-content-center">
                    <div className="col-lg-6">
                        <p>
                            <h5 className="fw-bold" style={{color: '#002D5D'}}>인사·노무 분쟁은 전략적으로 대응해야 합니다.</h5>
                            인사노무 분야는 단순한 근로관계의 문제가 아니라, 민사·형사 등의 복합적으로 얽힌 법률분쟁이므로 각 사건의 핵심 쟁점을 정확하게 분석하고 전략적으로 대응할 필요가
                            있습니다.
                        </p>
                        <p>
                            <h5 className="fw-bold" style={{color: '#002D5D'}}>다양한 사건 경험을 토대로 전략을 수립합니다.</h5>
                            인사노무 분쟁은 노동위원회 구제신청, 민사소송, 형사절차 등 다양한 절차가 존재합니다. 각 사건의 성격에 맞는 적절한 절차를 선택하고 법률적 판단과 함께 실제 분쟁
                            해결 가능성을 고려하여 각 사안에 적합한 전략을 세워 대응합니다.
                        </p>
                        <p>
                            <h5 className="fw-bold" style={{color: '#002D5D'}}>부당해고부터 임금·직장 내 갈등까지 현실적인 해결책을 제시합니다.</h5>
                            공동법률사무소 한결은 실무 경험을 바탕으로 부당해고, 징계처분, 임금 및 퇴직금 청구, 직장 내 갈등과 관련된 분쟁 등 인사·노무 전반에 걸친 사건에 대해 사실관계를
                            면밀히 검토하고 의뢰인의 상황과 목표를 충분히 고려하여 현실적인 해결 방향을 제시합니다.
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
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>기타 노동 관련 사건
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ServiceLaborPage;