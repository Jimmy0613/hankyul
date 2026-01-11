import {useEffect} from "react";
import bg from '/src/assets/img/hero-bg.jpg';
import {NavLink} from "react-router-dom";

const Home = () => {
    useEffect(() => {
        document.body.classList.add('index-page');

        return () => {
            document.body.classList.remove('index-page')
        };
    }, []);

    return (
        <>
            <section id="hero" className="hero section dark-background">

                <img src={bg} alt="bg" data-aos="fade-in" />

                    <div className="container">

                        <div className="row justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
                            <div className="col-xl-9 col-lg-8">
                                <h2>
                                    <span>"</span>과정에서 신뢰를<span>,</span>
                                    <br className="mobile-br" /> {/* 모바일 전용 줄바꿈 추가 */}
                                    결과에서 만족을<span>"</span>
                                </h2>
                                <p>우리는 의뢰인과 함께 걷는 과정을 소중히 여깁니다.<br/>
                                    사건을 준비하고 해결해 나가는 모든 과정에서 충분히 소통하고 신뢰를 쌓습니다.<br/>
                                    결과 또한 반드시 만족스러워야 한다는 믿음으로, 한결은 언제나 마지막까지 책임을 다합니다.<br/>
                                    과정에서 안심을, 결과에서 확신을 드리는 것. <br/>그것이 한결의 철학입니다.</p>
                            </div>
                        </div>

                        <div className="row gy-4 mt-5 justify-content-center" data-aos="fade-up" data-aos-delay="200">
                            <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon-box">
                                    <i className="bi bi-people"></i>
                                    <h3><NavLink to="/About/team">구성원 소개</NavLink></h3>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="400">
                                <div className="icon-box">
                                    <i className="bi bi-file-earmark-text"></i>
                                    <h3><NavLink to="/Service/medical">의료</NavLink></h3>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="500">
                                <div className="icon-box">
                                    <i className="bi bi-hospital"></i>
                                    <h3><NavLink to="/Service/school">학교폭력</NavLink></h3>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="600">
                                <div className="icon-box">
                                    <i className="bi bi-map"></i>
                                    <h3><NavLink to="/Contact/directions">오시는 길</NavLink></h3>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="700">
                                <div className="icon-box">
                                    <i className="bi bi-calendar-check"></i>
                                    <h3><NavLink to="/Contact/book">상담예약</NavLink></h3>
                                </div>
                            </div>
                        </div>

                    </div>
            </section>
        </>
)
};

export default Home;