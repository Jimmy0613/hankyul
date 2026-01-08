import {useEffect, useState} from 'react';
import axios from 'axios';
import noimage from '/src/assets/img/clients/client-2.png';

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
                    const imageUrl = match ? match[1] : noimage; // 이미지가 없으면 기본 이미지

                    // 2. HTML 태그 제거하고 순수 텍스트만 남기기 (깔끔한 요약을 위해)
                    const cleanDescription = description.replace(/<[^>]*>?/gm, '').slice(0, 100) + "...";

                    return {
                        title: node.querySelector("title").textContent,
                        link: node.querySelector("link").textContent,
                        thumbnail: imageUrl,
                        description: cleanDescription,
                        pubDate: node.querySelector("pubDate").textContent,
                    };
                });

                setPosts(items);
            } catch (error) {
                console.error("RSS 로딩 실패:", error);
            }
        };
        fetchRSS();
    }, []);

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
                                <div className="service-item position-relative">
                                    {/* 썸네일 이미지가 있다면 표시, 없다면 기본 아이콘 */}
                                    <div className="mb-3" style={{overflow: 'hidden', borderRadius: '8px'}}>
                                        <img
                                            src={post.thumbnail ? post.thumbnail : noimage}
                                            alt={post.title}
                                            style={{width: '100%', height: '200px', objectFit: 'cover'}}
                                        />
                                    </div>

                                    {/* 제목: 클릭 시 네이버 블로그로 이동 */}
                                    <a href={post.link} target="_blank" rel="noreferrer" className="stretched-link">
                                        <h3>{post.title}</h3>
                                    </a>

                                    {/* 요약 내용 */}
                                    <p>
                                        {post.description.length > 100
                                            ? `${post.description.substring(0, 100)}...`
                                            : post.description}
                                    </p>

                                    {/* 템플릿 스타일의 화살표 버튼 (옵션) */}
                                    <div className="mt-3" style={{fontSize: '14px', color: 'var(--accent-color)'}}>
                                        더 보기 <i className="bi bi-arrow-right"></i>
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