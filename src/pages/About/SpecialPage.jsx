import {useEffect} from "react";

const SpecialPage = () => {
    useEffect(() => {
        document.body.classList.add('portfolio-details-page');

        return () => {
            document.body.classList.remove('portfolio-details-page')
        };
    }, []);

    return (
        <>
            <section id="services" className="services section">

                <div className="container">

                    <div className="row gy-4">

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="service-item position-relative">
                                <div className="icon">
                                    <i className="bi bi-telephone"></i>
                                </div>
                                <a href="#" className="stretched-link">
                                    <h3>365일 24시간, 대표변호사 직접 상담</h3>
                                </a>
                                <p>미리 예약하면 평일 저녁, 주말, 공휴일 대표변호사 직접 상담</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="service-item position-relative">
                                <div className="icon">
                                    <i className="bi bi-person"></i>
                                </div>
                                <a href="#" className="stretched-link">
                                    <h3>처음부터 끝까지, 대표변호사가 함께</h3>
                                </a>
                                <p>대표변호사 2인이 함께 상담하고, 함께 사건을 진행합니다.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="service-item position-relative">
                                <div className="icon">
                                    <i className="bi bi-journal-check"></i>
                                </div>
                                <a href="#" className="stretched-link">
                                    <h3>한결에는 사무장, 상담직원이 없습니다.</h3>
                                </a>
                                <p>언제든 변호사와 연락, 서면 대표변호사 직접 작성</p>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
};

export default SpecialPage;

