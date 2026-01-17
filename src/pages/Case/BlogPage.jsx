import {useEffect, useState} from 'react';
import axios from 'axios';

const BlogPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchRSS = async () => {
            try {
                // CORS 해결을 위해 아까 설정한 Vite 프록시 활용
                // vite.config.js에 target: 'https://rss.blog.naver.com' 추가 필요
                const response = await axios.get(`/rss/${import.meta.env.VITE_NAVER_BLOG_ID}.xml`);
                const parser = new DOMParser();
                const xml = parser.parseFromString(response.data, "text/xml");
                const items = Array.from(xml.querySelectorAll("item")).map(node => {
                    const description = node.querySelector("description").textContent;

                    // 1. description(본문) 안에서 첫 번째 이미지 주소만 정규식으로 뽑아내기
                    const imgRegex = /<img[^>]+src=["']([^"']+)["']/;
                    const match = description.match(imgRegex);
                    const imageUrl = match ? match[1] : undefined; // 이미지가 없으면 기본 이미지

                    // 2. HTML 태그 제거하고 순수 텍스트만 남기기 (깔끔한 요약을 위해)
                    const cleanDescription = description.replace(/<[^>]*>?/gm, '').slice(0, 100) + "...";

                    return {
                        title: node.querySelector("title").textContent,
                        link: node.querySelector("link").textContent,
                        thumbnail: imageUrl,
                        description: cleanDescription,
                        date: node.querySelector("pubDate").textContent,
                    };
                });

                setPosts(items);
            } catch (error) {
                console.error("RSS 로딩 실패:", error);
            }
        };
        fetchRSS();
    }, []);

    const getImageUrl = (thumbnail) => {
        // 1. 이미지가 없거나 잘못된 경우 기본 이미지
        if (!thumbnail || thumbnail === 'undefined') {
            return '/img/logo_box.svg';
        }

        // 2. 환경별 주소 설정
        const isLocal = window.location.hostname === 'localhost';

        if (isLocal) {
            // 로컬에서는 프록시를 쓸 수 없으므로 네이버 주소 그대로 사용 (단, 엑박은 뜰 수 있음)
            return thumbnail;
        } else {
            // 배포 환경(Cloudflare)에서는 우리가 만든 프록시 사용
            return `/image-proxy?url=${encodeURIComponent(thumbnail)}`;
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return "";

        const date = new Date(dateString);

        return date.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).replace(/\.$/, ""); // 마지막 점 제거

    };

    return (
        <>
            <section id="services" className="services section">
                {/* Section Title */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>Blog</h2>
                    <p>교육청으로 간 변호사</p>
                </div>

                <div className="container">
                    <div className="row gy-4">
                        {posts.map((post, idx) => (
                            <div
                                key={idx}
                                className="col-lg-4 col-md-6"
                                data-aos="fade-up"
                                data-aos-delay={(idx + 1) * 100}
                            >
                                <div className="blog-card">
                                    <div className="blog-image-wrapper d-flex justify-content-center">
                                        <img
                                            src={getImageUrl(post.thumbnail)}
                                            alt={post.title}
                                            onError={(e) => {
                                                // 무한 루프 완전 차단: 이 핸들러 자체를 제거
                                                e.target.onerror = null;
                                                // 기본 이미지로 교체 (public 폴더에 있는 실제 경로여야 함)
                                                e.target.src = '/img/logo_box.svg';
                                            }}
                                            referrerPolicy="no-referrer" // 로컬에서 네이버 이미지를 직접 볼 때 그나마 도움이 됨
                                        />
                                    </div>
                                    <div className="blog-content">
                                        <span className="blog-date">{formatDate(post.date)}</span>
                                        <a href={post.link} target="_blank" rel="noreferrer"
                                           className="stretched-link">
                                            <h4>{post.title}</h4>
                                        </a>
                                        <p className="blog-description">
                                            {/* 본문 요약이 있다면 짧게 제한 */}
                                            {post.description.length > 100
                                                ? `${post.description.substring(0, 100)}...`
                                                : post.description}
                                        </p>
                                        {/* 템플릿 스타일의 화살표 버튼 (옵션) */}
                                        <div className="mt-3"
                                             style={{fontSize: '14px', color: 'var(--accent-color)'}}>
                                            더 보기 <i className="bi bi-arrow-right"></i>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
};

export default BlogPage;