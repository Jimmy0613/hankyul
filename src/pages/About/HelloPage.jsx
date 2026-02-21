import {useEffect} from "react";

const HelloPage = () => {
    useEffect(() => {
        document.body.classList.add('portfolio-details-page');
        return () => {
            document.body.classList.remove('portfolio-details-page')
        };
    }, []);

    return (
        <section id="about" className="about section">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row align-items-center justify-content-between gy-5 gx-lg-5">

                    {/* 오른쪽: 사진 영역 (SpecialPage와 동일하게 rounded-4, shadow-lg 적용) */}
                    <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="200">
                        <div className="image-wrapper position-relative">
                            <img
                                src="/img/hello.png"
                                className="img-fluid rounded-4 shadow-lg w-100"
                                alt="hello"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    {/* 왼쪽: 글씨 영역 (SpecialPage의 텍스트 영역과 일치하도록 col-lg-6 설정) */}
                    <div className="col-lg-6">
                        <div className="content" style={{fontSize: '1rem'}}>
                            <h3 className="fw-bold mb-lg-5">변함없는 마음으로, <br/>‘한결’같이 당신의 곁을 지킵니다.</h3>
                            <p className="mt-2 text-muted">공동법률사무소 한결은 언제나 의뢰인의 권익을 위해 최선의 노력을 다하며,<br/>최고의 법률서비스를 제공합니다.</p>
                            <p className="text-muted">우리는 각자의 길에서 오랜 시간 쌓아온 전문성을 바탕으로,<br/>이제는 오직 의뢰인의 이익만을 위해 함께 나아갑니다.</p>
                            <p className="text-muted">한길만을 걸어온 우직함과 진정성을 무기로,<br/>한결은 언제나 의뢰인의 곁에서 든든한 동반자가 되겠습니다.</p>

                            <p className="mt-5 text-end pe-lg-4">공동법률사무소 한결 대표변호사 <strong>송유리, 최은진</strong></p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
};

export default HelloPage;