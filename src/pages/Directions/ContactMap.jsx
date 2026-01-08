import React, { useEffect, useRef } from 'react';

const ContactMap = () => {
    // 지도가 로드되었는지 확인하는 변수
    const isLoaded = useRef(false);

    useEffect(() => {
        const { daum } = window;
        const container = document.getElementById('daumRoughmapContainer1767895249195');

        // 이미 로드되었다면 다시 실행하지 않음
        if (isLoaded.current) return;

        if (daum && daum.roughmap && container) {
            container.innerHTML = ""; // 내부 비우기

            new daum.roughmap.Lander({
                "timestamp": "1767895249195",
                "key": "faxr9izsrh2",
                "mapWidth": "100%", // 반응형을 위해 100% 추천
                "mapHeight": "360"
            }).render();

            isLoaded.current = true; // 로드 완료 표시
        }
    }, []);

    return (
        <div
            id="daumRoughmapContainer1767895249195"
            className="root_daum_roughmap root_daum_roughmap_landing"
            style={{ width: '100%' }} // 부모 너비에 맞게
        ></div>
    );
};

export default ContactMap;