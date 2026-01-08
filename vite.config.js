import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 1. 블로그 RSS용 프록시 (이게 추가되어야 합니다)
      '/rss': {
        target: 'https://rss.blog.naver.com',
        changeOrigin: true,
        // 주소의 /rss 부분을 떼어내고 네이버로 전달합니다.
        rewrite: (path) => path.replace(/^\/rss/, ''),
      },
      // 2. 나중에 쓸 네이버 API용 프록시 (기존 유지)
      '/api': {
        target: 'https://openapi.naver.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})