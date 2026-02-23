import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useNavigate, useParams} from "react-router-dom";
import {teamData} from "../../data/teamData.js";

const MemberDetail = () => {
    const {memberId} = useParams(); // URL에서 :memberId 값을 가져옴
    const [activeTab, setActiveTab] = useState('education'); // 기본 탭: 학력
    const navigate = useNavigate();

    // 데이터에서 해당 ID와 일치하는 팀원 찾기
    const member = teamData.find(m => m.id === memberId);
    if (!member) {
        return <div className="container text-center py-5">팀원 정보를 찾을 수 없습니다.</div>;
    }

    return (
        <div className="container" data-aos="fade-up">
            {/* 상세 내용 표시 (기존 MemberDetail의 JSX 내용 그대로 사용) */}
            <div className="row mt-5">
                <div className="row mb-5 d-flex align-items-center justify-content-around">
                    {/* 왼쪽: 사진 */}
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <img src={member.img} className="img-fluid rounded shadow" alt={member.name}/>
                    </div>

                    {/* 오른쪽: 기본 소개 */}
                    <div className="col-lg-6 content d-flex flex-column justify-content-between h-100">
                        {/* 상단 영역: 이름, 설명, 요약 */}
                        <div className="top-info">
                            <span className="content-subtitle">{member.role}</span>
                            <h2 className="content-title mb-5">
                                <span className="text-primary-emphasis">{member.name}</span>
                                <span className="m-3 fs-5 text-muted">{member.engName}</span>
                            </h2>
                            <p className="lead mb-5" dangerouslySetInnerHTML={{__html: member.description}}></p>
                            <ul className="list-unstyled">
                                {member.summary?.map((item, index) => (
                                    <li key={index} className="mb-2 d-flex">
                                        <i className="bi bi-check2-circle text-danger-emphasis me-2"></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 하단 영역: 다른 구성원 이동 링크 카드 (mt-auto를 주면 확실히 아래로 붙습니다) */}
                        <div className="other-members-section mt-auto pt-5">
                            <h6 className="fw-bold mb-3 text-muted" style={{fontSize: '0.9rem', letterSpacing: '1px'}}>
                                OTHER MEMBERS
                            </h6>
                            <div className="row g-3">
                                {teamData
                                    .filter(m => m.id !== member.id)
                                    .map((other) => (
                                        <div key={other.id} className="col-6">
                                            <Link to={`/About/team/${other.id}`} className="text-decoration-none">
                                                <div
                                                    className="other-member-card p-2 border rounded-3 d-flex align-items-center bg-white shadow-sm-hover transition">
                                                    <img
                                                        src={other.img}
                                                        alt={other.name}
                                                        className="rounded-circle me-3"
                                                        style={{
                                                            width: '45px',
                                                            height: '45px',
                                                            objectFit: 'cover',
                                                            border: '2px solid #eee'
                                                        }}
                                                    />
                                                    <div>
                                                        <div className="text-dark fw-bold"
                                                             style={{fontSize: '0.95rem'}}>{other.name}</div>
                                                        <div className="text-muted"
                                                             style={{fontSize: '0.75rem'}}>{other.role}</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-11">
                        <ul className="nav nav-tabs custom-tabs">
                            <li className="nav-item">
                                <button className={`nav-link ${activeTab === 'education' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('education')}>학력
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link ${activeTab === 'experience' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('experience')}>경력
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link ${activeTab === 'activities' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('activities')}>외부활동
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link ${activeTab === 'cases' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('cases')}>업무사례
                                </button>
                            </li>
                        </ul>

                        <div className="tab-content p-4 border border-top-0 rounded-bottom mb-4">
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
        </div>
    );
};

export default MemberDetail;