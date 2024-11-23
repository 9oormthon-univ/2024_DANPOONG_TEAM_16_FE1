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
    const [contentId, setContentId] = useState(null);
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
        if (!contentId) return;

        const fetchDetails = async () => {
            try {
                setLoading(true);
                const data = await fetchPlaceDetails(contentId);

                // API 응답 검증 및 기본값 설정
                const validatedData = {
                    contentTitle: data.contentTitle || '제목 없음',
                    description: data.description || '설명이 없습니다.',
                    addr: data.addr || '주소 정보 없음',
                    thumbnailImage: data.thumbnailImage || null,
                    publicTransport: data.publicTransport || false,
                    elevator: data.elevator || false,
                    restroom: data.restroom || false,
                    helpDog: data.helpDog || false,
                    guideHuman: data.guideHuman || false,
                    braileBlock: data.braileBlock || false,
                    signGuide: data.signGuide || false,
                    videoGuide: data.videoGuide || false,
                    hearingHandicapEtc: data.hearingHandicapEtc || false,
                    stroller: data.stroller || false,
                    lactationRoom: data.lactationRoom || false,
                    babySpareChair: data.babySpareChair || false,
                };

                setPlaceDetails(validatedData);
            } catch (err) {
                setError(err.message || '데이터를 가져오는 데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchDetails();
    }, [contentId]);

    // 조건부 렌더링: 데이터가 없으면 에러 처리
    if (!contentId) return <div>로딩 중...</div>;
    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>에러: {error}</div>;
    if (!placeDetails) return <div>데이터가 없습니다.</div>;

    // 구조 분해 할당
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
