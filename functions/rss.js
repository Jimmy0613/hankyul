// functions/rss.js
export async function onRequest(context) {
  const url = new URL(context.request.url);

  // URL에서 '/rss/' 이후의 모든 문자열을 가져옵니다.
  // 예: https://hankyul.pages.dev/rss/attorney_hambok.xml -> attorney_hambok.xml
  const pathParts = url.pathname.split('/rss/');
  const targetPath = pathParts[1];

  if (!targetPath) {
    return new Response("RSS 아이디(파일명)가 누락되었습니다.", { status: 400 });
  }

  const targetUrl = `https://rss.blog.naver.com/${targetPath}`;

  try {
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    const data = await response.text();

    return new Response(data, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Access-Control-Allow-Origin": "*", // CORS 해결
        "Cache-Control": "no-cache"
      },
    });
  } catch (error) {
    return new Response("네이버 서버 연결 실패", { status: 500 });
  }
}