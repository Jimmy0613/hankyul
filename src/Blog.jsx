import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
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
        const imageUrl = match ? match[1] : "/default-thumbnail.png"; // 이미지가 없으면 기본 이미지

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
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1) )', gap: '20px' }}>
  {posts.map((post, idx) => (
    <div key={idx} style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
      {/* 썸네일 이미지 */}
      <img
          src={post.thumbnail}
          alt={post.title}
          referrerPolicy="no-referrer"
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />

      <div style={{ padding: '15px' }}>
        <h3 style={{ fontSize: '18px', margin: '0 0 10px' }}>{post.title}</h3>
        <p style={{ color: '#666', fontSize: '14px' }}>{post.description}</p>
        <a href={post.link} target="_blank" rel="noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>
          자세히 보기
        </a>
      </div>
    </div>
  ))}
</div>
  );
}

export default App;