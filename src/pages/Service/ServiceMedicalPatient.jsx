import React from 'react';

const ServiceMedicalPatient = ({onBack}) => {
    return (<div className="container" data-aos="fade-up">
        {/* 뒤로가기 버튼 */}
        <button onClick={onBack} className="btn btn-outline-dark mb-3">
            <i className="bi bi-arrow-left"></i> 목록으로 돌아가기
        </button>

        {/* 1. 상단 핵심 타이틀 */}
        <div className="text-center mb-5 py-4">
            <h2 className="fw-bold" style={{color: '#002D5D'}}>
                의료소송의 핵심은 진료기록부입니다.
            </h2>
            <h4 className="mt-3 text-muted fw-normal">
                한결은 비법률가에게 진료기록부를 맡기지 않고, <strong>간호사 출신 변호사</strong>가 직접 분석합니다.
            </h4>
        </div>

        {/* --- 형사 섹션 --- */}
        <div className="medical-section mb-5 pb-5">
            <h3 className="fw-bold mb-4 text-primary-emphasis border-start border-4 border-primary ps-3">환자를 위한 -
                민사</h3>
            <div className="row align-items-center mb-4 gx-lg-5">
                <div className="col-lg-5">
                    <p className="mb-3">
                        민사소송은 진료 과정에서 의료진의 과실이 있었고, 그로인해 환자에게 구체적인 손해가 발생하였을 때 그 손해액을 산정하여 의료기관이나 의료진을 상대로 금전적 배상을
                        청구하는 절차입니다.
                    </p>
                    <p className="mb-3">
                        의료소송에서는 진료상 과실과 환자에게 발생한 악결과 사이의 인과관계 입증을 위해 주로 진료기록감정을 받고, 손해배상금액을 특정하기 위해서는 피해자에 대한 신체감정
                        절차가 필수적으로 진행되고 있습니다.

                    </p>
                    <p className>
                        감정은 당사자가 질문하는 내용에 대한 답변의 형태로 이루어지므로 어떻게 질문하는지가 매우 중요하다고 할 수 있습니다. 따라서 진료기록부를 확인하고 어떤 부분을
                        중점적으로 다투어야 하는지 파악할 수 있는 변호사와 함께 소송을 준비해야 합니다.
                    </p>
                </div>
                <div className="col-lg-6">
                    <img src="/img/medical_civil2.jpg" alt="Criminal" className="img-fluid rounded-4 shadow-sm"
                         style={{maxHeight: '300px', width: '100%', objectFit: 'cover'}}/>
                </div>
            </div>
        </div>

        {/* --- 민사 섹션 (지그재그: 이미지 좌측) --- */}
        <div className="medical-section mb-5 pb-5">
            <h3 className="fw-bold mb-4 text-primary-emphasis border-start border-4 border-primary ps-3">환자를
                위한 - 형사</h3>
            <div className="row align-items-center mb-4 gx-lg-5 flex-lg-row">
                <div className="col-lg-5">
                    <p className="mb-3">진료상 과실로 인해 환자의 생명, 신체에 위해가 발생할 경우 형법상 업무상 과실치사상죄가 성립할 수 있습니다. 또한 진료기록부 허위
                        작성, 허위 진단서 발급, 진료 거부 등 의료법 및 관련 법령을 위반한 경우도 있습니다.
                    </p>
                    <p>형사는 민사보다 엄격하게 판단합니다. 따라서 의료진의 과실이 있다고 생각된다 하더라도 형사 고소를 하는 것은 신중히 판단해야 합니다.
                    </p>
                    <p>고소 전 반드시 변호사와 상담 후 사안을 검토하여 진행하시기 바랍니다.

                    </p>
                </div>
                <div className="col-lg-6">
                    <img src="/img/medical_criminal2.png" alt="Civil" className="img-fluid rounded-4 shadow-sm"
                         style={{maxHeight: '300px', width: '100%', objectFit: 'cover'}}/>
                </div>
            </div>

        </div>

        {/* --- 행정 섹션 (다시 이미지 우측) --- */}
        <div className="medical-section mb-5 pb-5">
            <h3 className="fw-bold mb-4 text-primary-emphasis border-start border-4 border-primary ps-3">환자를 위한 - 소송
                외</h3>
            <div className="row align-items-center mb-4 gx-lg-5">
                <div className="col-lg-5">
                    <p className="mb-3">한국의료분쟁조정중재원, 한국소비자원 등 소송 외의 절차를 이용할 수 있습니다.
                    </p>
                    <p>의료분쟁조정중재원에서 합의가 성립하는 경우 재판상 화해와 동일한 효력이 인정됩니다. 충분한 검토없이 합의에 이르게 될 경우 그로인한 불이익은 고스란히 환자가 받게
                        됩니다.
                    </p>
                    <p>따라서 의료분쟁조정중재 과정 역시 변호사의 도움을 받아 신중하고 적극적으로 대응하는 것이 필요합니다.
                    </p>
                    <p>또한 중요한 쟁점을 놓친 채 조정을 신청하는 경우도 많습니다.
                    </p>
                    <p>만약 변호사에게 사건을 위임하는 것이 어렵다면 최소한 조정을 신청하기 전에는 변호사에게 상담을 받고 조정신청서를 검토받아 제출해야 합니다.
                    </p>
                </div>
                <div className="col-lg-6">
                    <img src="/img/medical_etc.jpg" alt="Admin" className="img-fluid rounded-4 shadow-sm"
                         style={{maxHeight: '300px', width: '100%', objectFit: 'cover'}}/>
                </div>
            </div>
        </div>
    </div>);
};

export default ServiceMedicalPatient;