import PropTypes from 'prop-types';
import * as S from './RegionButton.style';

const RegionButton = ({ label, isSelected, onClick }) => {
    return (
        <S.Button isSelected={isSelected} onClick={onClick}>
            {label}
        </S.Button>
    );
};

RegionButton.propTypes = {
    label: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};


export default RegionButton;
