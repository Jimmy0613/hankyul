import {Link, NavLink} from 'react-router-dom';
import {useState} from "react";

const Header = () => {
    // 모바일 메뉴 열림/닫힘 상태 관리
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavActive(!isMobileNavActive);
        // 템플릿 CSS가 body.mobile-nav-active를 기준으로 작성되어 있으므로 body에 클래스 추가/제거
        document.body.classList.toggle('mobile-nav-active');
    };

    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div
                className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

                <Link to="/" className="logo d-flex align-items-center me-auto me-lg-0">
                    <img style={{ height: '100%'}} src="/img/logo.png" alt="공동법률사무소 한결"/>
                </Link>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li className="dropdown">
                            <NavLink to="/About">
                                <span>한결 소개</span>
                                <i className="bi bi-chevron-down toggle-dropdown"></i>
                            </NavLink>
                            <ul>
                                <li><NavLink to="About/hello">인사말</NavLink></li>
                                <li><NavLink to="About/team">구성원 소개</NavLink></li>
                                <li><NavLink to="About/special">한결의 차별화</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="/Service"><span>업무분야</span></NavLink></li>
                        <li className="dropdown"><NavLink to="/Case"><span>업무사례</span> <i
                            className="bi bi-chevron-down toggle-dropdown"></i></NavLink>
                            <ul>
                                <li><NavLink to="/Case/blog">블로그</NavLink></li>
                                {/*<li><NavLink to="#">인스타그램</NavLink></li>*/}
                                <li><NavLink to="/Case/success">성공사례</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="/Directions">오시는길</NavLink></li>
                    </ul>
                    {/* 모바일 토글 버튼 */}
                    <i
                        className={`mobile-nav-toggle d-xl-none bi ${isMobileNavActive ? 'bi-x' : 'bi-list'}`}
                        onClick={toggleMobileNav}
                    ></i>
                </nav>

                <a className="btn-getstarted" href="#">상담예약</a>
            </div>
        </header>
    )
};

export default Header;