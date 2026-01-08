import ContactMap from "./ContactMap.jsx";

const DirectionsPage = () => {
    return (
        <>
            <section id="contact" className="contact section">

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row gy-4 py-5 px-5">

                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="mb-4">
                                <ContactMap />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                                <i className="bi bi-geo-alt flex-shrink-0"></i>
                                <div>
                                    <h3>오시는 길</h3>
                                    <p>인천 미추홀구 학익소로 63, 신동빌딩 5층</p></div>
                            </div>
                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                                <i className="bi bi-car-front flex-shrink-0"></i>
                                <div>
                                    <h3>주차 안내</h3>
                                    <p>건물에 별도의 주차장이 마련되어 있지 않습니다.</p>
                                    <p><strong>인천구치소 민원인 주차장(인천 미추홀구 학익소로 30)</strong>을 무료로 이용하실 수 있습니다.<br/>(사무실까지 도보
                                        6분)</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </section>
        </>
    )
}

export default DirectionsPage;