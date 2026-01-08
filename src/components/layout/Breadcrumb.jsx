import {useLocation, Link} from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    if (location.pathname === '/') return null;

    const breadcrumbNameMap = {
        'About': '한결 소개',
        'hello': '인사말',
        'team': '구성원 소개',
        'special': '한결의 차별화',

        'Service': '업무분야',

        'Case': '업무사례',
        'blog': '블로그',
        'success': '성공사례',

        'Directions': '오시는 길',
    }

    return (
        <div className="page-title light-background">
            <div className="heading">
                <div className="container">
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
                                <li key={name}>
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