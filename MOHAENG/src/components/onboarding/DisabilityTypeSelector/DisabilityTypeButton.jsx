import PropTypes from 'prop-types';
import * as S from './DisabilityTypeButton.style'; 

const DisabilityTypeButton = ({ icon, label, isSelected, onClick }) => {
    return (
        <S.Button isSelected={isSelected} onClick={onClick}>
            <S.Icon>{icon}</S.Icon>
            <S.Label isSelected={isSelected}>{label}</S.Label>
        </S.Button>
    );
};

DisabilityTypeButton.propTypes = {
    icon: PropTypes.node, 
    label: PropTypes.string.isRequired, 
    isSelected: PropTypes.bool, 
    onClick: PropTypes.func.isRequired,
};

export default DisabilityTypeButton;
