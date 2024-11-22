import { useState, useEffect } from 'react';
import { fetchPlaceDetails } from '../../apis/detail/placeApi';
import PlaceDetailHeader from './PlaceDetailHeader/PlaceDetailHeader';
import PlaceImage from './PlaceImage/PlaceImage';
import PlaceInfo from './PlaceInfo/PlaceInfo';
import ContactInfo from './ContactInfo/ContactInfo';
import FacilityIcons from './FacilityIcons/FacilityIcon';
import DetailedFacilityInfo from './DetailedFacilityInfo/DetailedFacilityInfo'; 
import * as S from './PlaceDetail.style';

const PlaceDetail = () => {
    const [placeDetails, setPlaceDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const contentId = 125266; // 임시 ID

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                setLoading(true);
                const data = await fetchPlaceDetails(contentId);
                setPlaceDetails(data);
            } catch (err) {
                setError(err.message || '데이터를 가져오는 데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchDetails();
    }, [contentId]);

    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>에러: {error}</div>;

    const {
        contentTitle,
        description,
        addr: address,
        thumbnailImage: imageUrl,
        publicTransport,
        elevator,
        restroom,
        helpDog,
        guideHuman,
        braileBlock,
        signGuide,
        videoGuide,
        hearingHandicapEtc,
        stroller,
        lactationRoom,
        babySpareChair,
    } = placeDetails;

    const facilities = {
        publicTransport,
        elevator,
        restroom,
        helpDog,
        guideHuman,
        braileBlock,
        signGuide,
        videoGuide,
        hearingHandicapEtc,
        stroller,
        lactationRoom,
        babySpareChair,
    };

    return (
        <S.Container>
            <PlaceImage imageUrl={imageUrl} />
            <PlaceDetailHeader onBackClick={() => console.log('뒤로가기 클릭')} onHomeClick={() => console.log('홈 클릭')} />
            <PlaceInfo title={contentTitle} description={description} />
            <S.Divider />
            <ContactInfo address={address} phone="정보 없음" />
            <FacilityIcons {...facilities} />
            <DetailedFacilityInfo facilities={facilities} />
        </S.Container>
    );
};

export default PlaceDetail;
