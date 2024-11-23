import axios from 'axios';
import config from '../config';

export const fetchRecommendedCourses = async (data) => {
    try {
        const response = await axios.post(`${config.BASE_URL}/api/v1/course/ai-rec`, data, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });
        return response.data; // API 응답 데이터 반환 (코스 번호)
    } catch (error) {
        console.error('Error fetching AI recommended course number:', error);
        throw error;
    }
};
