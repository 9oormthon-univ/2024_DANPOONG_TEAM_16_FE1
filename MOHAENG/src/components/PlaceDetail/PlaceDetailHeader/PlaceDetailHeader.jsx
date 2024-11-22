import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as S from './PlaceDetailHeader.style';

import { IcPlacedetailHeaderBack, IcPlacedetailHeaderHome } from '../../../assets/svg';

const PlaceDetailHeader = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); 
    };

    const handleHomeClick = () => {
        navigate('/'); // 홈으로 이동
        console.log('iOS 홈 화면과 연동 필요'); // 추후 iOS와 연동 시 수정
    };

    return (
        <S.HeaderContainer>
            <S.IconButton onClick={handleBackClick}>
                <IcPlacedetailHeaderBack />
            </S.IconButton>
            <S.IconButton onClick={handleHomeClick}>
                <IcPlacedetailHeaderHome />
            </S.IconButton>
        </S.HeaderContainer>
    );
};

PlaceDetailHeader.propTypes = {
    onBackClick: PropTypes.func,
    onHomeClick: PropTypes.func,
};

export default PlaceDetailHeader;
