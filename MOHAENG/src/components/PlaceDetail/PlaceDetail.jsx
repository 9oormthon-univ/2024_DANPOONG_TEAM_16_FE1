import PlaceDetailHeader from './PlaceDetailHeader/PlaceDetailHeader';
import PlaceImage from './PlaceImage/PlaceImage';
import PlaceInfo from './PlaceInfo/PlaceInfo';
import ContactInfo from './ContactInfo/ContactInfo';
import FacilityIcons from './FacilityIcons/FacilityIcon';
import DetailedFacilityInfo from './DetailedFacilityInfo/DetailedFacilityInfo'; 
import * as S from './PlaceDetail.style';

const PlaceDetail = () => {
    const handleBackClick = () => {
        console.log('뒤로가기 클릭');
    };

    const handleHomeClick = () => {
        console.log('홈 클릭');
    };

    // 귀찮아서 더미 파일 분리 안 했음 ㅎㅎ
    const dummyData = {
        contentTitle: '설악산 국립공원',
        description:
            '1970년 우리나라에서 다섯 번째 국립공원으로 지정되었고, 1965년 천연기념물로 지정되었다. 국제적으로도 그 보존 가치가 인정되어 1982년 유네스코로부터 생물권보전지역으로 지정·관리되고 있는 지역이다. 설악산국립공원의 총면적은 398.237㎢에 이르며',
        address: '강원도 속초시 설악산로 1085',
        phone: '033-801-0900',
        facilities: {
            publicTransport: '출입구까지 턱이 없어 휠체어 접근 가능함',
            elevator: '엘리베이터 있음',
            restroom: '장애인 화장실 있음',
            helpDog: '',
            guideHuman: '안내요원 있음',
            braileBlock: '점자블록 있음(주요시설 앞)_시각장애인 편의시설',
            signGuide: '',
            videoGuide: '',
            hearingHandicapEtc: '',
            stroller: '여기에 뭐 임산부 내용 뜨겠지',
            lactationRoom: '이것도 임산부 관련 내용이었나',
            babySpareChair: '',
        },
    };

    const imageUrl = 'https://via.placeholder.com/600x400';

    return (
        <S.Container>
            <PlaceImage imageUrl={imageUrl} />
            <PlaceDetailHeader onBackClick={handleBackClick} onHomeClick={handleHomeClick} />
            <PlaceInfo title={dummyData.contentTitle} description={dummyData.description} />
            <S.Divider />
            <ContactInfo address={dummyData.address} phone={dummyData.phone} />
            <FacilityIcons {...dummyData.facilities} />
            <DetailedFacilityInfo facilities={dummyData.facilities} />
        </S.Container>
    );
};

export default PlaceDetail;
