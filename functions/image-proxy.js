export async function onRequest(context) {
  const url = new URL(context.request.url);
  const imageUrl = url.searchParams.get('url'); // ?url=네이버이미지주소

  if (!imageUrl) return new Response("이미지 주소가 없습니다.", { status: 400 });

  try {
    const imageResponse = await fetch(imageUrl, {
      headers: {
        'Referer': 'https://blog.naver.com/', // 네이버 내부에서 부르는 척 위장
        'User-Agent': 'Mozilla/5.0'
      }
    });

    const { readable, writable } = new TransformStream();
    imageResponse.body.pipeTo(writable);

    return new Response(readable, {
      headers: {
        "Content-Type": imageResponse.headers.get("Content-Type") || "image/jpeg",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=86400" // 이미지 캐싱 (속도 향상)
      }
    });
  } catch (e) {
    return new Response("이미지 로드 실패", { status: 500 });
  }
}