import axios from 'axios';
import config from '../config';

export const registerCourse = async (courseData) => {
    try {
        const response = await axios.post(`${config.BASE_URL}/api/v1/course`, courseData, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });
        return response.data; // API 응답 데이터 반환
    } catch (error) {
        console.error('Error registering course:', error);
        throw error;
    }
};
