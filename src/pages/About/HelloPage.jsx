import {useEffect} from "react";

const HelloPage = () => {
    useEffect(() => {
        document.body.classList.add('portfolio-details-page');

        return () => {
            document.body.classList.remove('portfolio-details-page')
        };
    }, []);

    return (
        <>
            <section id="about" className="about section">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row px-lg-5 gap-5">
                        <div className="d-flex col-lg-5 order-lg-1 justify-content-center align-items-center">
                            <img src="/img/logo_box.svg" className="img-fluid h-75" alt="hello"/>
                        </div>
                        <div className="col-lg-5 order-lg-2 content d-flex flex-column justify-content-center">
                            <h3>우리의 이름을 걸고,<br/>의뢰인의 이익을 지킵니다.</h3>
                            <p>공동법률사무소 한결은 대표변호사들의 이름을 모아 만든 이름입니다.<br/>
                                우리의 이름을 걸고 의뢰인의 권익을 위해 최선의 노력을 다하겠다는 약속이자, <br/>
                                최고의 법률서비스를 제공하겠다는 다짐입니다.</p>
                            <p>우리는 각자의 길에서 오랜 시간 쌓아온 전문성과 끈기를 바탕으로, <br/>
                                이제는 오직 의뢰인의 이익만을 위해 함께 나아갑니다.</p>
                            <p>한길만을 걸어온 우직함과 진정성을 무기로, <br/>
                                한결은 언제나 의뢰인의 곁에서 든든한 동반자가 되겠습니다.</p>
                            <p className="mt-5 text-end">공동법률사무소 한결 대표변호사 <strong>송유리, 최은진</strong></p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
};

export default HelloPage;

