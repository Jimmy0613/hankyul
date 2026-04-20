import { Link, useLocation } from "react-router-dom";

const breadcrumbNameMap = {
  About: "사무실 소개",
  hello: "인사말",
  team: "구성원 소개",
  cej: "최은정 변호사",
  syr: "서유리 변호사",
  special: "한결의 차별점",
  Service: "업무분야",
  medical: "의료",
  doctor: "의료진을 위한",
  patient: "환자를 위한",
  school: "학교폭력",
  criminal: "형사",
  civil: "민사",
  family: "가사",
  labor: "노무",
  Case: "블로그",
  Column: "한결 칼럼",
  Contact: "상담 및 안내",
  directions: "오시는 길",
  book: "상담예약",
  detail: "칼럼 상세",
};

const Breadcrumb = () => {
  const location = useLocation();
  let pathnames = location.pathname.split("/").filter(Boolean);

  if (pathnames.length === 1) {
    if (pathnames[0] === "About") pathnames.push("hello");
    if (pathnames[0] === "Service") pathnames.push("medical");
  }

  if (pathnames[0] === "Column" && pathnames.length > 1) {
    pathnames = ["Column", "detail"];
  }

  if (location.pathname === "/") return null;

  const pageTitle =
    breadcrumbNameMap[pathnames[pathnames.length - 1]] || pathnames[pathnames.length - 1];

  return (
    <div className="page-title light-background">
      <div className="heading">
        <div className="container">
          <h1>{pageTitle}</h1>
        </div>
      </div>
      <nav className="breadcrumbs">
        <div className="container">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            {pathnames.map((name, index) => {
              const routeTo =
                name === "detail"
                  ? "/Column"
                  : `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;
              const label = breadcrumbNameMap[name] || name;

              return (
                <li key={`${routeTo}-${name}`}>
                  {isLast ? <span>{label}</span> : <Link to={routeTo}>{label}</Link>}
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
