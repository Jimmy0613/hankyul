export async function onRequest(context) {
  const url = new URL(context.request.url);
  const imageUrl = url.searchParams.get('url');

  if (!imageUrl) return new Response("No URL provided", { status: 400 });

  // 핵심: 네이버를 속이기 위한 가짜 헤더 설정
  const customHeaders = {
    'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
    'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Sec-Fetch-Dest': 'image',
    'Sec-Fetch-Mode': 'no-cors',
    'Sec-Fetch-Site': 'cross-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    // Referer를 아예 보내지 않거나, 네이버 메인으로 설정
    'Referer': ''
  };

  try {
    const imageResponse = await fetch(imageUrl, {
      method: 'GET',
      headers: customHeaders,
      redirect: 'follow'
    });

    if (!imageResponse.ok) {
      return new Response(`Naver responded with ${imageResponse.status}`, { status: imageResponse.status });
    }

    // 이미지를 바이너리 형태로 받아서 그대로 브라우저에 전달
    const imageData = await imageResponse.arrayBuffer();

    return new Response(imageData, {
      headers: {
        "Content-Type": imageResponse.headers.get("Content-Type") || "image/png",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=86400"
      },
    });
  } catch (e) {
    return new Response("Error fetching image", { status: 500 });
  }
}