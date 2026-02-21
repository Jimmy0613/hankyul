import {useEffect} from "react";
import {PhoneCall, Scale, Users, FileText} from "lucide-react";

const SpecialPage = () => {
    useEffect(() => {
        document.body.classList.add('portfolio-details-page');
        return () => document.body.classList.remove('portfolio-details-page');
    }, []);

    return (
        <section id="special-features" className="services section">
            <div className="container" data-aos="fade-up">
                <div className="row gy-5 align-items-center">

                    {/* 왼쪽: 수직 리스트 영역 */}
                    <div className="col-lg-6">
                        <div className="special-list gap-3 d-flex flex-column">
                            {/* 아이템 1 */}
                            <div className="d-flex align-items-start mb-4" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon-circle me-4">
                                    <PhoneCall size={28} color="#FACC15"/>
                                </div>
                                <div>
                                    <h4 className="fw-bold mb-1">365일 24시간, 대표변호사 직접 상담</h4>
                                    <p className="text-muted mb-0">미리 예약하면 평일 저녁, 주말, 공휴일 대표변호사 직접 상담</p>
                                </div>
                            </div>

                            {/* 아이템 2 */}
                            <div className="d-flex align-items-start mb-4" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon-circle me-4">
                                    <Users size={28} color="#FACC15"/>
                                </div>
                                <div>
                                    <h4 className="fw-bold mb-1">처음부터 끝까지, 대표변호사가 함께</h4>
                                    <p className="text-muted mb-0">대표변호사 2인이 함께 상담하고, 함께 사건을 진행합니다.</p>
                                </div>
                            </div>

                            {/* 아이템 3 */}
                            <div className="d-flex align-items-start mb-4" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon-circle me-4">
                                    <Scale size={28} color="#FACC15"/>
                                </div>
                                <div>
                                    <h4 className="fw-bold mb-1">한결에는 상담직원이 없습니다.</h4>
                                    <p className="text-muted mb-0">사건 위임 전 초동상담부터 변호사와 직접 소통하세요.</p>
                                </div>
                            </div>

                            {/* 아이템 4 */}
                            <div className="d-flex align-items-start" data-aos="fade-up" data-aos-delay="400">
                                <div className="icon-circle me-4">
                                    <FileText size={28} color="#FACC15"/>
                                </div>
                                <div>
                                    <h4 className="fw-bold mb-1">한결에는 사무장이 없습니다.</h4>
                                    <p className="text-muted mb-0">서면 작성부터 결과 안내까지 모든 과정을 변호사가 직접 수행합니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 오른쪽: 이미지 영역 */}
                    <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="200">
                        <div className="image-wrapper position-relative">
                            <img src="/img/special.png" alt="Lawyer Consulting"
                                 className="img-fluid rounded-4 shadow-lg"/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SpecialPage;