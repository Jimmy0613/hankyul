import React from 'react';

const ServiceMedicalPatient = () => {
    return (<div className="container" data-aos="fade-up">

        {/* 1. 상단 핵심 타이틀 */}
        <div className="text-center mb-5 py-4">
            <h2 className="fw-bold" style={{color: '#002D5D'}}>
                학교폭력은 단순한 갈등이 아닙니다. 올바른 대응이 아이의 미래를 지킵니다.
            </h2>
            <h4 className="mt-3 text-muted fw-normal">
                의뢰인과 충분히 소통하며 사건을 바로잡고, <strong>결과까지 책임지는 법률 대응</strong>을 약속합니다.
            </h4>
        </div>

        {/* --- 형사 섹션 --- */}
        <div className="medical-section mb-5 pb-5">
            <h3 className="fw-bold mb-4 text-primary-emphasis border-start border-4 border-primary ps-3">학교폭력대책심의위원회</h3>
            <div className="row align-items-center mb-4 gx-lg-5">
                <div className="col-lg-6">
                    <p className="mb-3">
                        소위 ‘학폭위’라 불리는 절차입니다. 피해관련학생과 가해관련학생의 진술을 참고하여 신고된 행위가 학교폭력에 해당하는지 판단하고, 학교폭력에 해당한다면 관련학생들에게 어떤
                        조치를 내릴지 결정합니다.
                    </p>
                    <p>
                        한결은 - 사안 접수 직후부터 학생/학부모 의견서 작성 자문, 사안조사 동행, 대리인 의견서 작성, 학교폭력대책심의위원회 동행까지 모든 과정을 함께합니다.
                    </p>
                </div>
                <div className="col-lg-6">
                    <img src="/img/school1.jpg" alt="Criminal" className="img-fluid rounded-4 shadow-sm"
                         style={{maxHeight: '300px', width: '100%', objectFit: 'cover'}}/>
                </div>
            </div>
        </div>

        {/* --- 민사 섹션 (지그재그: 이미지 좌측) --- */}
        <div className="medical-section mb-5 pb-5">
            <h3 className="fw-bold mb-4 text-primary-emphasis border-start border-4 border-primary ps-3">행정심판 ·
                행정소송</h3>
            <div className="row align-items-center mb-4 gx-lg-5 flex-lg-row">
                <div className="col-lg-6">
                    <p className="mb-3">학교폭력대책심의위원회(학폭위) 조치결정에 대한 이의신청 절차입니다.
                    </p>
                    <p>한결은 – 300건 이상의 실제 사례를 기반으로 해당 조치 결정의 적정성 여부를 판단하고, 조치 결정의 절차적, 실체적 위법이 발견되면 행정심판 및 행정소송을 통해 이를
                        적극적으로 다투어 의미 있는 성과를 내고 있습니다.
                    </p>
                </div>
                <div className="col-lg-6">
                    <img src="/img/school2.jpg" alt="Civil" className="img-fluid rounded-4 shadow-sm"
                         style={{maxHeight: '300px', width: '100%', objectFit: 'cover'}}/>
                </div>
            </div>

        </div>

        {/* --- 행정 섹션 (다시 이미지 우측) --- */}
        <div className="medical-section mb-5 pb-5">
            <h3 className="fw-bold mb-4 text-primary-emphasis border-start border-4 border-primary ps-3">관련 민 · 형사사건</h3>
            <div className="row align-items-center mb-4 gx-lg-5">
                <div className="col-lg-6">
                    <p className="mb-3">학교폭력 사안과는 별도로 형사고소나 민사소송이 진행되는 경우가 있습니다. <br/>한결은 피해학생을 위한 형사고소 및 민사소송 제기를 지원하며, 가해학생의 경우 형사사건과 민사소송에서 효과적으로 대응하고 방어할 수 있는 전략을 마련합니다.

                    </p>

                </div>
                <div className="col-lg-6">
                    <img src="/img/school3.png" alt="Admin" className="img-fluid rounded-4 shadow-sm"
                         style={{maxHeight: '300px', width: '100%', objectFit: 'cover'}}/>
                </div>
            </div>
        </div>
    </div>);
};

export default ServiceMedicalPatient;