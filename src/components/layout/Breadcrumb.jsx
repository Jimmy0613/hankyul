import {useLocation, Link} from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();

    // 1. 현재 경로를 분석
    let pathnames = location.pathname.split('/').filter((x) => x);

    // [핵심] 상위 경로(About, Case 등)만 있을 때 강제로 기본 하위 경로를 추가해서 보여주기
    // 리다이렉트가 일어나기 전 찰나의 순간에도 올바른 이름을 보여줍니다.
    if (pathnames.length === 1) {
        if (pathnames[0] === 'About') pathnames.push('hello');
        if (pathnames[0] === 'Case') pathnames.push('blog');
        if (pathnames[0] === 'Service') pathnames.push('medical');
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
        'civil': '민사/이혼/상속',
        'Case': '업무사례',
        'blog': '블로그',
        'success': '성공사례',
        'Contact': '오시는길',
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
                                <li key={routeTo}> {/* key를 routeTo로 변경하는게 안전함 */}
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