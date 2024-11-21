import PropTypes from 'prop-types';
import * as S from './DurationButton.style';

const DurationButton = ({ label, isSelected, onClick }) => {
    return (
        <S.Button isSelected={isSelected} onClick={onClick}>
            {label}
        </S.Button>
    );
};

DurationButton.propTypes = {
    label: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default DurationButton;
