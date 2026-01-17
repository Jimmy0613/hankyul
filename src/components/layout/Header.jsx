import {Link, NavLink, useLocation} from 'react-router-dom';
import {useEffect, useState} from "react";

const Header = () => {
    const [isMobileNavActive, setIsMobileNavActive] = useState(false);
    const location = useLocation(); // 현재 경로 감지

    // 메뉴 닫기 (클래스만 정리)
    const closeAllMenus = () => {
        setIsMobileNavActive(false);
        document.body.classList.remove('mobile-nav-active');
    };

    // 드롭다운 토글 함수
    const handleDropdownToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const icon = e.currentTarget;
        const parentLi = icon.closest('li');
        const nextUl = icon.closest('a').nextElementSibling;

        if (parentLi) parentLi.classList.toggle('active');
        if (nextUl) nextUl.classList.toggle('dropdown-active');
    };

    // [핵심] 페이지 이동 시 현재 주소에 맞는 드롭다운을 열어주는 로직
    useEffect(() => {
        // 모든 드롭다운 초기화
        document.querySelectorAll('.navmenu .active, .dropdown-active').forEach(el => {
            el.classList.remove('active', 'dropdown-active');
        });

        // 현재 경로(location.pathname)를 포함하는 NavLink를 찾음
        const activeLink = document.querySelector(`.navmenu a[href="${location.pathname}"]`);

        if (activeLink) {
            // 해당 링크가 드롭다운 안에 있다면 부모들을 찾아 클래스 추가
            let parent = activeLink.parentElement;
            while (parent && !parent.classList.contains('navmenu')) {
                if (parent.classList.contains('dropdown')) {
                    parent.classList.add('active'); // 부모 li 활성화
                    const childUl = parent.querySelector('ul');
                    if (childUl) childUl.classList.add('dropdown-active'); // 하위 ul 열기
                }
                parent = parent.parentElement;
            }
            activeLink.classList.add('active');
        }
    }, [location]); // 페이지 주소가 바뀔 때마다 실행

    const toggleMobileNav = () => {
        setIsMobileNavActive(prev => !prev);
        document.body.classList.toggle('mobile-nav-active');
    };


    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

                <Link to="/" className="logo d-flex align-items-center me-auto me-lg-0" onClick={closeAllMenus}>
                    <img style={{ filter: 'brightness(0) invert(1)'}} src="/img/logo_wide.svg" alt="로고"/>
                </Link>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li className="dropdown">
                            {/* NavLink 클릭 시 메뉴 닫기 (드롭다운 아이콘 제외) */}
                            <NavLink to="/About" onClick={closeAllMenus}>
                                <span>한결 소개</span>
                                <i
                                    className="bi bi-chevron-down toggle-dropdown"
                                    onClick={handleDropdownToggle} // 여기서 별도로 드롭다운 제어
                                ></i>
                            </NavLink>
                            <ul>
                                <li><NavLink to="About/hello" onClick={closeAllMenus}>인사말</NavLink></li>
                                <li><NavLink to="About/team" onClick={closeAllMenus}>구성원 소개</NavLink></li>
                                <li><NavLink to="About/special" onClick={closeAllMenus}>한결의 차별화</NavLink></li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <NavLink to="/Service" onClick={closeAllMenus}>
                                <span>업무분야</span>
                                <i className="bi bi-chevron-down toggle-dropdown" onClick={handleDropdownToggle}></i>
                            </NavLink>
                            <ul>
                                <li><NavLink to="/Service/medical" onClick={closeAllMenus}>의료</NavLink></li>
                                <li><NavLink to="/Service/school" onClick={closeAllMenus}>학교폭력</NavLink></li>
                                <li><NavLink to="/Service/criminal" onClick={closeAllMenus}>형사</NavLink></li>
                                <li><NavLink to="/Service/civil" onClick={closeAllMenus}>민사/이혼/상속</NavLink></li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <NavLink to="/Case" onClick={closeAllMenus}>
                                <span>업무사례</span>
                                <i className="bi bi-chevron-down toggle-dropdown" onClick={handleDropdownToggle}></i>
                            </NavLink>
                            <ul>
                                <li><NavLink to="/Case/blog" onClick={closeAllMenus}>블로그</NavLink></li>
                                <li><NavLink to="/Case/success" onClick={closeAllMenus}>성공사례</NavLink></li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <NavLink to="/Contact" onClick={closeAllMenus}>
                                <span>오시는길</span>
                                <i className="bi bi-chevron-down toggle-dropdown" onClick={handleDropdownToggle}></i>
                            </NavLink>
                            <ul>
                                <li><NavLink to="/Contact/directions" onClick={closeAllMenus}>오시는 길</NavLink></li>
                                <li><NavLink to="/Contact/book" onClick={closeAllMenus}>상담예약</NavLink></li>
                            </ul>
                        </li>

                    </ul>

                    <i
                      className={`mobile-nav-toggle d-xl-none bi ${isMobileNavActive ? 'bi-x' : 'bi-list'}`}
                      onClick={toggleMobileNav}
                    ></i>
                </nav>

                <Link className="btn-getstarted" to="/Contact/book" onClick={closeAllMenus}>상담예약</Link>
            </div>
        </header>
    );
};

export default Header;