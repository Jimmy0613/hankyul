import { useLocation, Link } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();

    // 1. 현재 경로를 분석
    let pathnames = location.pathname.split('/').filter((x) => x);

    // [수정] 상위 경로별 브레드크럼 노출 로직 정리
    if (pathnames.length === 1) {
        // 하위 메뉴가 여전히 존재하는 항목들만 push 유지
        if (pathnames[0] === 'About') pathnames.push('hello');
        if (pathnames[0] === 'Service') pathnames.push('medical');

        // Case(업무사례)는 이제 단일 페이지이므로 push('blog')를 하지 않습니다.
        // Contact도 하위가 push되지 않도록 비워두거나 필요에 따라 조정합니다.
    }

    if (location.pathname === '/') return null;

    const breadcrumbNameMap = {
        'About': '한결 소개',
        'hello': '인사말',
        'team': '구성원 소개',
        'special': '한결의 차별화',
        'Service': '업무분야',
        'medical': '의료',
        'school': '학교폭력',
        'criminal': '형사',
        'civil': '민사',
        'family': '가사',
        'labor': '노무',
        'Case': '업무사례', // 이제 /Case 접속 시 이것만 깔끔하게 표시됩니다.
        'blog': '블로그',
        'Contact': '상담 및 안내', // 부모 카테고리 이름
        'directions': '오시는 길',
        'book': '상담예약',
    }

    return (
        <div className="page-title light-background">
            <div className="heading">
                <div className="container">
                    {/* 마지막 요소의 이름을 제목으로 표시 */}
                    <h1>{breadcrumbNameMap[pathnames[pathnames.length - 1]] || pathnames[pathnames.length - 1]}</h1>
                </div>
            </div>
            <nav className="breadcrumbs">
                <div className="container">
                    <ol>
                        <li><Link to="/">Home</Link></li>
                        {pathnames.map((name, index) => {
                            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                            const isLast = index === pathnames.length - 1;

                            return (
                                <li key={routeTo}>
                                    {isLast ? (
                                        breadcrumbNameMap[name] || name
                                    ) : (
                                        <Link to={routeTo}>{breadcrumbNameMap[name] || name}</Link>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </nav>
        </div>
    );
};

export default Breadcrumb;