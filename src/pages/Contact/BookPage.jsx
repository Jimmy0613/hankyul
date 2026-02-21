import React, {useEffect} from 'react';
import {ChevronRight, ChevronsRight, Phone} from "lucide-react";

const BookPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.classList.add('portfolio-details-page');
        return () => document.body.classList.remove('portfolio-details-page');
    }, []);

    return (
        <section id="contact-info" className="contact section">
            <div className="container" data-aos="fade-up">

                <div className="row gx-lg-5 align-items-center">
                    {/* 왼쪽: 상담 채널 (사이즈 대폭 축소 버전) */}
                    <div className="col-lg-6">
                        <div className="ms-2">
                            {/* 1. 네이버 톡톡 카드 */}
                            <a
                                href="https://talk.naver.com/ct/wq0ekfq"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="d-flex align-items-center p-3 mb-3 bg-white rounded-3 shadow-sm border contact-card-item"
                                style={{textDecoration: 'none', transition: 'all 0.3s'}}
                            >
                                <img src="/img/naver_box.jpg" alt="네이버" className="rounded-2 me-3"
                                     style={{width: '40px', height: '40px'}}/>
                                <h3 className="fs-6 fw-bold mb-0" style={{color: '#1a3a5f'}}>네이버 톡톡 상담하기</h3>
                            </a>

                            {/* 2. 카카오톡 카드 */}
                            <a
                                href="http://pf.kakao.com/_fhKAX"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="d-flex align-items-center p-3 mb-3 bg-white rounded-3 shadow-sm border contact-card-item"
                                style={{textDecoration: 'none', transition: 'all 0.3s'}}
                            >
                                <img src="/img/kakao_box.png" alt="카카오" className="rounded-2 me-3"
                                     style={{width: '40px', height: '40px'}}/>
                                <h3 className="fs-6 fw-bold mb-0" style={{color: '#1a3a5f'}}>카카오톡 채널 상담하기</h3>
                            </a>

                            {/* 3. 전화문의 카드 (모바일 전용 tel 링크 클래스 유지) */}
                            <a
                                href="tel:032-876-2777"
                                className="d-flex align-items-center p-3 mb-4 bg-light rounded-3 shadow-sm border tel-link contact-card-item"
                                style={{textDecoration: 'none', transition: 'all 0.3s'}}
                            >
                                <div
                                    className="me-3 d-flex align-items-center justify-content-center bg-white rounded-2 shadow-sm"
                                    style={{width: '40px', height: '40px'}}>
                                    <Phone size={22} strokeWidth={2.5} color="#002D5D"/>
                                </div>
                                <h3 className="fs-6 fw-bold mb-0" style={{color: '#002D5D'}}>전화문의 032-876-2777</h3>
                            </a>

                            {/* 하단 강조 문구 */}
                            <div className="notice-box mt-4 ms-1 fs-5">
                                <div className="d-flex align-items-start mb-2">
                                    <span className="fw-bold me-2" style={{color: '#002D5D'}}>|</span>
                                    <p className="mb-0 small fw-bold" style={{color: '#444'}}>법률 상담은 예약제로 운영됩니다.</p>
                                </div>
                                <div className="d-flex align-items-start">
                                    <span className="fw-bold me-2" style={{color: '#002D5D'}}>|</span>
                                    <p className="mb-0 small fw-bold" style={{color: '#444'}}>대표변호사 2인이 직접 상담합니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 오른쪽: 대표 이미지 */}
                    <div className="col-lg-6 mt-5 mt-lg-0">
                        <img src='/img/book.png' alt="Contact" className="img-fluid rounded-4 shadow-lg w-100"
                             style={{maxHeight: '400px', objectFit: 'cover'}}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BookPage;