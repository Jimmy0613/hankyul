export async function onRequest(context) {
  const url = new URL(context.request.url);

  // url.pathname이 "/rss/attorney_hambok.xml" 형태일 때
  // /rss/ 부분을 제외한 나머지 파일명만 추출합니다.
  const targetId = url.pathname.replace('/rss/', '');

  if (!targetId || targetId === '/rss') {
    return new Response("RSS 아이디가 없습니다.", { status: 400 });
  }

  const targetUrl = `https://rss.blog.naver.com/${targetId}`;

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
      },
    });
  } catch (error) {
    return new Response("네이버 연결 실패", { status: 500 });
  }
}