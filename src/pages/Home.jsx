import {useEffect} from "react";
import {Users, FileText, School, MapPinned, CalendarCheck, Stethoscope} from 'lucide-react';
import bg from '/src/assets/img/hero-bg.jpg';
import {NavLink} from "react-router-dom";
import Seo from "../components/seo/Seo.jsx";

const Home = () => {
    useEffect(() => {
        document.body.classList.add('index-page');

        return () => {
            document.body.classList.remove('index-page')
        };
    }, []);

    return (
        <>
        <Seo
            title="공동법률사무소 한결 | 인천 변호사, 학교폭력·의료소송"
            description="공동법률사무소 한결은 인천 변호사로서 학교폭력, 의료소송, 민사, 형사 사건 상담을 제공하고 한결칼럼으로 사건 대응 정보를 안내합니다."
            keywords="공동법률사무소 한결, 인천 변호사, 인천 학교폭력 변호사, 인천 의료소송 변호사, 한결칼럼"
            path="/"
            structuredData={{
                "@context": "https://schema.org",
                "@type": "LegalService",
                name: "공동법률사무소 한결",
                url: "https://law-hankyul.com/",
                areaServed: ["인천", "대한민국"],
                serviceType: ["인천 변호사", "인천 학교폭력 변호사", "인천 의료소송 변호사"],
            }}
        />
        <section id="hero" className="hero section dark-background">

            <img src={bg} alt="bg" data-aos="fade-in"/>

            <div className="container">

                <div className="row justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-xl-9 col-lg-8">
                        <h2>
                            <span>"</span>과정에서 신뢰를<span>,</span>
                            <br className="mobile-br"/> {/* 모바일 전용 줄바꿈 추가 */}
                            결과에서 만족을<span>"</span>
                        </h2>
                        <p>우리는 의뢰인과 함께 걷는 과정을 소중히 여깁니다.<br/>
                            사건을 준비하고 해결해 나가는 모든 과정에서 충분히 소통하고 신뢰를 쌓습니다.<br/>
                            결과 또한 반드시 만족스러워야 한다는 믿음으로, 한결은 언제나 마지막까지 책임을 다합니다.<br/>
                            과정에서 안심을, 결과에서 확신을 드리는 것. <br/>그것이 한결의 철학입니다.</p>
                    </div>
                </div>

                <div className="row gy-4 mt-5 justify-content-center" data-aos="fade-up" data-aos-delay="200">
                    {/* 구성원 소개 */}
                    <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="300">
                        <NavLink to="/About/team">
                            <div className="icon-box">
                                <Users size={32} strokeWidth={2} color="#FFE600"/>
                                <h3>구성원 소개</h3>
                            </div>
                        </NavLink>
                    </div>

                    {/* 의료 (문서 형태) */}
                    <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="400">
                        <NavLink to="/Service/medical">
                            <div className="icon-box">
                                <Stethoscope size={32} strokeWidth={2} color="#FFE600"/>
                                <h3>의료</h3>
                            </div>
                        </NavLink>
                    </div>

                    {/* 학교폭력 (학교 건물) */}
                    <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="500">
                        <NavLink to="/Service/school">
                            <div className="icon-box">
                                <School size={32} strokeWidth={2} color="#FFE600"/>
                                <h3>학교폭력</h3>
                            </div>
                        </NavLink>
                    </div>

                    {/* 오시는 길 */}
                    <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="600">
                        <NavLink to="/Contact/directions">
                            <div className="icon-box">
                                <MapPinned size={32} strokeWidth={2} color="#FFE600"/>
                                <h3>오시는 길</h3>
                            </div>
                        </NavLink>
                    </div>

                    {/* 상담예약 */}
                    <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="700">
                        <NavLink to="/Contact/book">
                            <div className="icon-box">
                                <CalendarCheck size={32} strokeWidth={2} color="#FFE600"/>
                                <h3>상담예약</h3>
                            </div>
                        </NavLink>
                    </div>
                </div>

            </div>
        </section>
        </>
    )
};

export default Home;
