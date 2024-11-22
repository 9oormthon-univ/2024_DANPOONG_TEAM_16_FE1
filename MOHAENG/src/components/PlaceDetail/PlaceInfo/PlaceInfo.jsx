import PropTypes from 'prop-types';
import * as S from './PlaceInfo.style';
import ReadMoreReadLess from 'react-read-more-read-less';

const PlaceInfo = ({ title, description }) => {
    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.Description>
                <ReadMoreReadLess
                    charLimit={103}
                    readMoreText=" 더보기" 
                    readLessText=" 간략히" 
                >
                    {description}
                </ReadMoreReadLess>
            </S.Description>
        </S.Container>
    );
};

PlaceInfo.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default PlaceInfo;
