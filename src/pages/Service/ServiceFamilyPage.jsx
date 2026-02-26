import React from "react";

const ServiceFamilyPage = () => {
    return (
        <div className="container" data-aos="fade-up">
            {/* --- 민사 섹션 --- */}
            <div className="medical-section mb-5 pb-5">
                <div className="row align-items-center mb-4 gx-lg-6 flex-lg-row d-flex gx-xl-5 justify-content-center">
                    <div className="col-lg-6">
                        <p>
                            <h5 className="fw-bold" style={{color: '#002D5D'}}>관계와 감정까지 고려하여 신중한 대응이 필요합니다. </h5>
                            이혼과 상속 등 가족 간에 발생하는 분쟁은 관계와 감정이 얽혀 있는 만큼 단순한 법률적 다툼을 넘어 당사자에게 큰 상처와 부담을 남기는 복잡하고 민감한 문제입니다.
                        </p>
                        <p>
                            <h5 className="fw-bold" style={{color: '#002D5D'}}>전략으로 결과를 설계합니다.</h5>
                            감정이 앞설 수밖에 없는 상황일수록, 냉정하고 전략적인 접근이 필요합니다. 한결은 법률적 판단과 현실적 해결 가능성을 균형 있게 고려하여 맞춤형 해결책을 제시합니다.
                        </p>
                        <p>
                            <h5 className="fw-bold" style={{color: '#002D5D'}}>이혼부터 상속까지, 가사분쟁 전반에 대해 체계적으로 대응합니다. </h5>
                            공동법률사무소 한결은 이혼 및 사실혼 해소, 재산분할·위자료 청구, 친권 및 양육권 분쟁, 양육비 청구·감액, 상속재산 분할, 유류분 반환청구, 상속포기 및 한정승인 등 가사 전반에 걸친 사건을 체계적으로 대응합니다.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img src="/img/family.png" alt="Criminal" className="img-fluid rounded-4 shadow-sm"
                             style={{maxHeight: '300px', width: '100%', objectFit: 'cover'}}/>
                    </div>
                </div>
                {/* 세부 업무분야 블록 (가로로 넓게) */}
                <div className="service-description p-4 bg-light rounded-4 shadow-sm">
                    <h5 className="fw-bold mb-3"><i className="bi bi-layers-fill me-2 text-primary"></i>세부 업무분야</h5>
                    <ul className="list-unstyled row gy-2 mb-0">
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>이혼(재산분할, 양육권, 혼인무효/취소
                            등)
                        </li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>상속(유언, 유류분반환,
                            상속재산분할협의, 상속재산분할심판 등)
                        </li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>친족(친생자관계, 입양, 후견,
                            부양료청구 등)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ServiceFamilyPage;