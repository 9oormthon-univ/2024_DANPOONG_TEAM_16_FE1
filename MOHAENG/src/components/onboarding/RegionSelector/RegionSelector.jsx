import RegionButton from './RegionButton';
import { useOnboarding } from '../../../contexts/OnboardingContext'; 
import * as S from './RegionSelector.style';

const RegionSelector = () => {
    const { selectedRegion, setSelectedRegion } = useOnboarding(); 

    const regions = [
        '서울', '인천', '경기', '강원', '세종', '충북',
        '충남', '대전', '전북', '전남', '광주', '경북',
        '경남', '대구', '부산', '울산', '제주',
    ];

    const handleRegionClick = (region) => {
        setSelectedRegion(region); 
    };

    return (
        <S.Wrapper>
            <S.Container>
                {regions.map((region) => (
                    <RegionButton
                        key={region}
                        label={region}
                        isSelected={selectedRegion === region} 
                        onClick={() => handleRegionClick(region)}
                    />
                ))}
            </S.Container>
        </S.Wrapper>
    );
};

export default RegionSelector;
