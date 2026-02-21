import React, { useEffect, useRef } from 'react';

const ContactMap = () => {
    // 렌더링 중복 방지를 위한 참조 변수
    const isLoaded = useRef(false);

    useEffect(() => {
        // 카카오 약도 스크립트가 로드되었는지 확인
        const { daum } = window;
        const timestamp = "1771675105947";
        const key = "i6zxdpnitw8";

        const container = document.getElementById(`daumRoughmapContainer${timestamp}`);

        // 스크립트가 있고, 컨테이너가 존재하며, 아직 로드되지 않았을 때 실행
        if (daum && daum.roughmap && container && !isLoaded.current) {
            container.innerHTML = ""; // 혹시 남아있을지 모를 잔상 제거

            new daum.roughmap.Lander({
                "timestamp": timestamp,
                "key": key,
                "mapWidth": "100%", // 부모 너비에 맞게 자동 조절
                "mapHeight": "400"  // 높이는 원하시는 대로 조절 가능 (360~400 추천)
            }).render();

            isLoaded.current = true; // 로드 완료 표시
        }
    }, []);

    return (
        <div className="map-wrapper shadow-sm border rounded-4 overflow-hidden bg-white">
            {/* 카카오 약도 컨테이너 */}
            <div
                id="daumRoughmapContainer1771675105947"
                className="root_daum_roughmap root_daum_roughmap_landing"
                style={{ width: '100%', height: '300px', border: 'none' }}
            ></div>

            {/* 하단 지도 크게보기 안내 바 */}
            <div className="px-3 py-2 bg-light border-top d-flex justify-content-between align-items-center">
                <img
                    src="//t1.kakaocdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
                    width="72"
                    height="16"
                    alt="카카오맵"
                />
                <a
                    href="https://map.kakao.com/?urlX=427137&urlY=1095283&urlLevel=3&map_type=TYPE_MAP&map_hybrid=false"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark fw-bold"
                    style={{ fontSize: '12px', textDecoration: 'none' }}
                >
                    지도 크게 보기 <i className="bi bi-box-arrow-up-right ms-1"></i>
                </a>
            </div>
        </div>
    );
};

export default ContactMap;