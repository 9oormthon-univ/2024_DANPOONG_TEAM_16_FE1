import axios from 'axios';
import config from '../config';

export const fetchRecommendedCourses = async ({ disability, tripType, area, period }) => {
    try {
        // URLSearchParams를 사용해 파라미터를 정리
        const params = new URLSearchParams();

        // 배열 값을 각각 분리해 파라미터로 추가
        disability.forEach((type) => params.append('disability', type));
        tripType.forEach((type) => params.append('tripType', type));

        // 단일 값도 정수로 추가
        params.append('area', Number(area)); // 정수 변환
        params.append('period', Number(period)); // 정수 변환

        // 요청 실행
        const response = await axios.get(`${config.BASE_URL}/api/v1/course/ai-rec`, {
            params, // URLSearchParams 전달
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });

        return response.data; // 응답 데이터 반환
    } catch (error) {
        console.error('Error fetching AI recommended courses:', error);
        throw error;
    }
};
