import {useEffect} from "react";
import {Rss, MessageCircle, School, Stethoscope} from "lucide-react";

const Footer = () => {

    useEffect(() => {
        /**
         * Apply .scrolled class to the body as the page is scrolled down
         */
        function toggleScrolled() {
            const selectBody = document.querySelector('body');
            const selectHeader = document.querySelector('#header');
            if (!selectHeader) return;

            if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
            window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
        }

        document.addEventListener('scroll', toggleScrolled);
        toggleScrolled();

        /**
         * Scroll top button
         */
        let scrollTop = document.querySelector('.scroll-top');

        function toggleScrollTop() {
            if (scrollTop) {
                window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
            }
        }

        scrollTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        document.addEventListener('scroll', toggleScrollTop);
        toggleScrollTop();

        return () => {
            document.removeEventListener('scroll', toggleScrolled);
            document.removeEventListener('scroll', toggleScrollTop);
        };
    }, []);


    return (
        <footer id="footer" className="footer dark-background">
            <div className="footer-top">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6 footer-about">
                            <a href="index.html" className="logo d-flex align-items-center">
                                <span className="sitename">공동법률사무소 한결</span>
                            </a>
                            <div className="footer-contact pt-3">
                                <p>인천 미추홀구 학익소로 63, 5층 (학익동, 신동빌딩) (22222)</p>
                                <p><strong>대표변호사:</strong> <span>송유리, 최은진</span></p>
                                <p><strong>광고책임변호사:</strong> <span>송유리</span></p>
                                <p><strong>사업자등록번호:</strong> <span>435-06-03388</span></p>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>About</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <a href="/"> Home</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="/About/team"> 구성원 소개</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="/Case/blog"> 블로그</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="/Case/success"> 성공사례</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Service</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <a href="/Service/medical"> 의료</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="/Service/school"> 학교폭력</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="/Service/criminal"> 형사</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="/Service/civil"> 민사</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <h4>Quick Links</h4>
                            <div className="social-links d-flex align-items-center gap-2">
                                {/* 1. 네이버 톡톡 */}
                                <a href="https://talk.naver.com/ct/wq0ekfq" target="_blank" rel="noreferrer"
                                   title="네이버 톡톡">
                                    <img style={{width: '32px', height: '32px', borderRadius: '6px'}}
                                         src="/img/naver_box.jpg" alt="네이버 톡톡"/>
                                </a>

                                {/* 2. 카카오톡 채널 */}
                                <a href="http://pf.kakao.com/_fhKAX" target="_blank" rel="noreferrer" title="카카오톡 채널">
                                    <img style={{width: '32px', height: '32px', borderRadius: '6px'}}
                                         src="/img/kakao_box.png" alt="카카오톡 채널"/>
                                </a>

                                {/* 3. 네이버 공식 블로그 (이미지 형태 유지) */}
                                <a href="https://blog.naver.com/hk-lawyer" target="_blank" rel="noreferrer"
                                   title="한결 공식 블로그">
                                    <img style={{width: '32px', height: '32px', borderRadius: '6px'}}
                                         src="/img/naver_blog.png" alt="한결 공식 블로그"/>
                                </a>

                                {/* 4. 학교폭력 블로그 (네이버 초록색 배경 + 흰색 아이콘) */}
                                <a href="https://blog.naver.com/attorney_hambok" target="_blank" rel="noreferrer"
                                   className="d-flex align-items-center justify-content-center rounded-2 shadow-sm"
                                   style={{width: '32px', height: '32px', backgroundColor: '#03C75A'}} title="학교폭력 블로그">
                                    <School size={18} color="#ffffff" strokeWidth={2.5}/>
                                </a>

                                {/* 5. 의료 블로그 (네이버 초록색 배경 + 흰색 아이콘) */}
                                <a href="https://blog.naver.com/attorney_hk" target="_blank" rel="noreferrer"
                                   className="d-flex align-items-center justify-content-center rounded-2 shadow-sm"
                                   style={{width: '32px', height: '32px', backgroundColor: '#03C75A'}} title="의료 블로그">
                                    <Stethoscope size={18} color="#ffffff" strokeWidth={2.5}/>
                                </a>
                            </div>
                            <div className="footer-contact pt-3">
                                <p><strong>Tel:</strong> <span>032-876-2777</span></p>
                                <p><strong>Fax:</strong> <span>032-876-3777</span></p>
                                <p><strong>Email:</strong> <span>hk-lawyer@naver.com</span></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container copyright text-center mt-4">
                <p>© <span>Copyright</span> 2026 <strong className="px-1">공동법률사무소 한결</strong>
                    <span>All Rights Reserved</span></p>
                <div className="credits">
                    {/* BootstrapMade 링크는 템플릿 라이선스에 따라 유지하거나 수정하시면 됩니다 */}
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a><br/>
                    Images by <a href="https://www.freepik.com">Freepik</a>, <a
                    href="https://pixabay.com/ko/">Pixabay</a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;