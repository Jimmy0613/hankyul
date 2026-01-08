import React, { useState } from 'react';

const MemberDetail = ({ member, onBack }) => {
  const [activeTab, setActiveTab] = useState('education'); // 기본 탭: 학력

  return (
    <div className="container" data-aos="fade-up">
      <button onClick={onBack} className="btn btn-dark mb-4">
        <i className="bi bi-arrow-left"></i> 돌아가기
      </button>
        <div className="row mb-5">
            {/* 왼쪽: 사진 */}
            <div className="col-lg-4 mb-4 mb-lg-0">
                <img src={member.img} className="img-fluid rounded shadow" alt={member.name}/>
            </div>

            {/* 오른쪽: 기본 소개 */}
            <div className="col-lg-7 content">

                <span className="content-subtitle">{member.role}</span>
                <h2 className="content-title">
                    <span className="text-primary-emphasis">{member.name}</span><span
                    className="m-3 fs-5 text-muted">CHOI EUN JIN</span>
                </h2>
                <p className="lead">
                    {member.description}
                </p>

            </div>
        </div>

        {/* 하단: 탭 영역 */}
        <div className="row">
            <div className="col-12">
                <ul className="nav nav-tabs custom-tabs">
                    <li className="nav-item">
                        <button className={`nav-link ${activeTab === 'education' ? 'active' : ''}`}
                                onClick={() => setActiveTab('education')}>학력
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link ${activeTab === 'experience' ? 'active' : ''}`}
                                onClick={() => setActiveTab('experience')}>경력 및 자격
                        </button>
                    </li>
                    <li className="nav-item">
              <button className={`nav-link ${activeTab === 'activities' ? 'active' : ''}`} onClick={() => setActiveTab('activities')}>외부활동</button>
            </li>
          </ul>

          <div className="tab-content p-4 border border-top-0 rounded-bottom">
            <ul className="list-unstyled mb-0">
              {member[activeTab]?.map((item, index) => (
                <li key={index} className="mb-2 d-flex">
                  <i className="bi bi-check2-circle text-primary-emphasis me-2"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetail;