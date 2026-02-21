import React from 'react';

const ServiceCriminalPage = () => {
    return (
        <div className="container" data-aos="fade-up">
            {/* --- 형사 섹션 --- */}
            <div className="medical-section mb-5 pb-5">
                <div className="row align-items-center mb-4 gx-lg-6 flex-lg-row-reverse d-flex gx-xl-5 justify-content-center">
                    <div className="col-lg-6">
                        <p>
                            <h5 className="fw-bold" style={{color: '#002D5D'}}>형사 사건은 초기 대응이 결과를 좌우합니다.</h5>
                            한결은 사건 접수 단계부터 신속하고 체계적으로 대응합니다. 사건 초기 변론 전략 수립부터 경찰
                            조사, 검찰 수사, 법원 단계에 이르기까지 전 과정을 일관되게 관리합니다.
                        </p>
                        <p>
                            <h5 className="fw-bold" style={{color: '#002D5D'}}>한결의 강점은 사건의 본질을 정확히 파악하는 분석력입니다.</h5>
                            사건의 본질이 사실관계 다툼에 있는지, 법리다툼에 있는지 여부에 따라 변론 전략은 크게 달라집니다. 한결은 다양한 시각으로 사건의 쟁점을 면밀히 검토하고, 사소한
                            부분도 놓치지 않도록 치밀하게 대응합니다.
                        </p>
                        <p>
                            <h5 className="fw-bold" style={{color: '#002D5D'}}>수많은 성공사례가 이를 입증합니다.</h5>
                            한결은 풍부한 실무 경험과 치밀한 전략을 바탕으로 의뢰인에게 현실적이고 유리한 해결책을 제시하는, ‘젊고 강한’ 변호사들입니다.

                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img src="/img/criminal.png" alt="Criminal" className="img-fluid rounded-4 shadow-sm"
                             style={{maxHeight: '300px', width: '100%', objectFit: 'cover'}}/>
                    </div>
                </div>
                {/* 세부 업무분야 블록 (가로로 넓게) */}
                <div className="service-description p-4 bg-light rounded-4 shadow-sm">
                    <h5 className="fw-bold mb-3"><i className="bi bi-layers-fill me-2 text-primary"></i>세부 업무분야</h5>
                    <ul className="list-unstyled row gy-2 mb-0">
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>성범죄(강간, 강제추행,
                            통신매체이용음란, 성매매 등)
                        </li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>교통범죄(음주운전, 위험운전치사상,
                            도주치사상 등)
                        </li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>마약(대마, 향정)</li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>재산범죄(사기, 횡령, 배임 등)
                        </li>
                        <li className="col-md-4"><i className="bi bi-check2 text-primary me-2"></i>형사일반(폭행, 상해, 명예훼손 등)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ServiceCriminalPage;