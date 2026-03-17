import {useEffect, useState} from 'react';
import axios from 'axios';

const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // 블로그 ID 배열 (여기에 추가 블로그 ID를 넣으세요)
    const blogIds = [
        'hk-lawyer',
        'attorney_hambok',
        'attorney_hk'
    ];

    useEffect(() => {
        const fetchAllRSS = async () => {
            try {
                setLoading(true);

                // 1. 여러 블로그의 요청을 동시에 생성
                const requests = blogIds.map(id =>
                    axios.get(`/rss/${id}.xml`)
                );

                // 2. 모든 요청이 완료될 때까지 대기
                const responses = await Promise.all(requests);

                let allItems = [];
                const parser = new DOMParser();

                responses.forEach(response => {
                    const xml = parser.parseFromString(response.data, "text/xml");
                    const items = Array.from(xml.querySelectorAll("item")).map(node => {
                        const description = node.querySelector("description").textContent;
                        const imgRegex = /<img[^>]+src=["']([^"']+)["']/;
                        const match = description.match(imgRegex);

                        let imageUrl = match ? match[1] : undefined;

                        if (imageUrl) {
                            imageUrl = imageUrl.replace(/\?type=[a-zA-Z0-9]+/, '?type=w2');
                        }

                        const cleanDescription = description.replace(/<[^>]*>?/gm, '').slice(0, 100) + "...";

                        return {
                            title: node.querySelector("title").textContent,
                            link: node.querySelector("link").textContent,
                            thumbnail: imageUrl,
                            description: cleanDescription,
                            date: new Date(node.querySelector("pubDate").textContent), // 정렬을 위해 Date 객체로 변환
                        };
                    });
                    allItems = [...allItems, ...items];
                });

                // 3. 전체 포스트를 날짜 최신순으로 정렬
                allItems.sort((a, b) => b.date - a.date);

                setPosts(allItems);
            } catch (error) {
                console.error("RSS 로딩 실패:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllRSS();
    }, []);

    const getImageUrl = (thumbnail) => {
        if (!thumbnail || thumbnail === 'undefined') return '/img/logo_box.svg';
        const isLocal = window.location.hostname === 'localhost';
        return isLocal ? thumbnail : `/image-proxy?url=${encodeURIComponent(thumbnail)}`;
    };

    const formatDate = (date) => {
        if (!date) return "";
        return date.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).replace(/\.$/, "");
    };

    return (
        <section id="services" className="services section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Blog</h2>
            </div>
            <div className="container">
                {loading ? (
                    <div className="text-center py-5">로딩 중...</div>
                ) : (
                    <div className="row gy-4">
                        {posts.map((post, idx) => (
                            <div
                                key={idx}
                                className="col-lg-4 col-md-6"
                                data-aos="fade-up"
                                data-aos-delay={(idx % 3 + 1) * 100}
                            >
                                <div className="blog-card">
                                    <div className="blog-image-wrapper d-flex justify-content-center">
                                        <img
                                            src={getImageUrl(post.thumbnail)}
                                            alt={post.title}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = '/img/logo_box.svg';
                                            }}
                                            referrerPolicy="no-referrer"
                                        />
                                    </div>
                                    <div className="blog-content">
                                        <span className="blog-date">{formatDate(post.date)}</span>
                                        <a href={post.link} target="_blank" rel="noreferrer" className="stretched-link">
                                            <h4>{post.title}</h4>
                                        </a>
                                        <p className="blog-description">
                                            {post.description}
                                        </p>
                                        <div className="mt-3" style={{fontSize: '14px', color: 'var(--accent-color)'}}>
                                            더 보기 <i className="bi bi-arrow-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogPage;
