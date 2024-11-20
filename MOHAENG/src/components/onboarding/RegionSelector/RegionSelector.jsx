import PropTypes from 'prop-types';
import { useState } from 'react';
import RegionButton from './RegionButton';
import * as S from './RegionSelector.style';

const RegionSelector = ({ onSelectionChange }) => {
    const [selectedRegion, setSelectedRegion] = useState(null);

    const regions = [
        '서울', '인천', '경기', '강원', '세종', '충북',
        '충남', '대전', '전북', '전남', '광주', '경북',
        '경남', '대구', '부산', '울산', '제주',
    ];

    const handleRegionClick = (region) => {
        setSelectedRegion(region);
        onSelectionChange(region); 
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

RegionSelector.propTypes = {
    onSelectionChange: PropTypes.func.isRequired, 
};

export default RegionSelector;
