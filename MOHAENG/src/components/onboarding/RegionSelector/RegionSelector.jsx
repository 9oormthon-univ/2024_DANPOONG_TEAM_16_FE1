import RegionButton from './RegionButton';
import { useOnboarding } from '../../../contexts/OnboardingContext'; 
import * as S from './RegionSelector.style';

const RegionSelector = () => {
    const { selectedRegion, setSelectedRegion } = useOnboarding(); 

    // 지역명과 ID 매핑
    const regions = [
        { name: '서울', id: 1 },
        { name: '인천', id: 2 },
        { name: '경기', id: 3 },
        { name: '강원', id: 4 },
        { name: '세종', id: 5 },
        { name: '충북', id: 6 },
        { name: '충남', id: 7 },
        { name: '대전', id: 8 },
        { name: '전북', id: 9 },
        { name: '전남', id: 10 },
        { name: '광주', id: 11 },
        { name: '경북', id: 12 },
        { name: '경남', id: 13 },
        { name: '대구', id: 14 },
        { name: '부산', id: 15 },
        { name: '울산', id: 16 },
        { name: '제주', id: 17 },
    ];

    // 지역 선택 시 ID를 저장
    const handleRegionClick = (regionId) => {
        setSelectedRegion(regionId); 
    };

    return (
        <S.Wrapper>
            <S.Container>
                {regions.map((region) => (
                    <RegionButton
                        key={region.id}
                        label={region.name}
                        isSelected={selectedRegion === region.id} 
                        onClick={() => handleRegionClick(region.id)}
                    />
                ))}
            </S.Container>
        </S.Wrapper>
    );
};

export default RegionSelector;
