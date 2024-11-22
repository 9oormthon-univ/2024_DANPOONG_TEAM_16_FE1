import PropTypes from 'prop-types';
import * as S from './PlaceDetailHeader.style';

import { IcPlacedetailHeaderBack, IcPlacedetailHeaderHome } from '../../../assets/svg';

const PlaceDetailHeader = ({ onBackClick, onHomeClick }) => {
    return (
        <S.HeaderContainer>
            <S.IconButton onClick={onBackClick}>
                <IcPlacedetailHeaderBack />
            </S.IconButton>
            <S.IconButton onClick={onHomeClick}>
                <IcPlacedetailHeaderHome />
            </S.IconButton>
        </S.HeaderContainer>
    );
};

PlaceDetailHeader.propTypes = {
    onBackClick: PropTypes.func.isRequired,
    onHomeClick: PropTypes.func.isRequired,
};

export default PlaceDetailHeader;
