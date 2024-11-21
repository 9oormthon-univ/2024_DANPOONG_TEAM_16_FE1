import PropTypes from 'prop-types';
import * as S from './TravelButton.style';

const TravelButton = ({ icon, title, description, isSelected, onClick }) => {
    return (
        <S.Button isSelected={isSelected} onClick={onClick}>
            <S.TextWrapper>
                <S.Title isSelected={isSelected}>{title}</S.Title>
                <S.Description>{description}</S.Description>
            </S.TextWrapper>
            <S.IconWrapper>{icon}</S.IconWrapper>
        </S.Button>
    );
};

TravelButton.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};

export default TravelButton;
