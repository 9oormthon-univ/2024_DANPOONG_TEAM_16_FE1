import PropTypes from 'prop-types';
import * as S from './PlaceImage.style';

const PlaceImage = ({ imageUrl }) => {
    return (
        <S.ImageWrapper>
            <S.Image src={imageUrl} alt="Place Detail" />
        </S.ImageWrapper>
    );
};

PlaceImage.propTypes = {
    imageUrl: PropTypes.string.isRequired,
};

export default PlaceImage;
