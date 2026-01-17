import bookImg from '/src/assets/img/portfolio/books-1.jpg';
const DirectionsPage = () => {
    return (
        <>
            <section id="contact" className="contact section">

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row">

                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="mb-4">
                                <img style={{width: '100%'}} src={bookImg}/>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                                <img src="/img/naver_box.jpg"  alt="네이버 톡톡" />
                                <div>
                                    <h3>네이버 톡톡</h3>
                                    <p>준비중입니다.</p></div>
                            </div>
                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                                <img src="/img/kakao_box.png" alt="카카오톡 채널" />
                                <div>
                                    <h3>카카오톡 채팅 상담</h3>
                                    <p>준비중입니다.</p>
                                </div>
                            </div>
                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                                <i className="bi bi-telephone-fill flex-shrink-0"></i>
                                <div>
                                    <h3>전화 문의</h3>
                                    <p>032-876-2777</p>
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