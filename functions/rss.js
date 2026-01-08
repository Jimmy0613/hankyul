// functions/rss.js
export async function onRequestGet(context) {
  // URL에서 아이디 부분(예: attorney_hambok.xml)을 가져옵니다.
  const url = new URL(context.request.url);
  const targetId = url.pathname.split('/rss/')[1];

  if (!targetId) {
    return new Response("아이디가 없습니다.", { status: 400 });
  }

  // 네이버 RSS 주소로 직접 요청을 보냅니다.
  const targetUrl = `https://rss.blog.naver.com/${targetId}`;

  try {
    const response = await fetch(targetUrl);
    const data = await response.text();

    // 브라우저에게 XML 데이터라고 알려주며 CORS를 허용(Access-Control-Allow-Origin)합니다.
    return new Response(data, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    return new Response("네이버 RSS를 가져오는 데 실패했습니다.", { status: 500 });
  }
}