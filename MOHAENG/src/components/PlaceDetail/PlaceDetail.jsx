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
    const [contentId, setContentId] = useState(null); // 초기에는 contentId가 없음
    const [placeDetails, setPlaceDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // iOS에서 contentId 전달받기
    useEffect(() => {
        // iOS가 호출하는 함수 설정
        window.sendContentID = (id) => {
            setContentId(id);
        };
    }, []);

    useEffect(() => {
        if (!contentId) return; // contentId가 없으면 API 호출 안 함

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

    if (!contentId) return <div>로딩 중...</div>; // contentId를 받기 전까지 로딩 표시
    if (loading) return <div>로딩 중...</div>; // API 호출 중일 때 로딩 표시
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
