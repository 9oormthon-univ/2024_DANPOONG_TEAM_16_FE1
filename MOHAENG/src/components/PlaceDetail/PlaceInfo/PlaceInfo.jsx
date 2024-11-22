import PropTypes from 'prop-types';
import * as S from './PlaceInfo.style';

const PlaceInfo = ({ title, description }) => {
    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
        </S.Container>
    );
};

PlaceInfo.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default PlaceInfo;
