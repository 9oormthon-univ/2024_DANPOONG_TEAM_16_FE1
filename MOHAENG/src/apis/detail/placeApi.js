import axios from 'axios';
import config from '../config';

export const fetchPlaceDetails = async (contentId) => {
    try {
        const response = await axios.get(`${config.BASE_URL}/api/v1/location/${contentId}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching place details:', error);
        throw error;
    }
};
