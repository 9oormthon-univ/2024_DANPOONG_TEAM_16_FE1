import PropTypes from 'prop-types';
import * as S from './OnboardingNextBtn.style';

const OnboardingNextBtn = ({ disabled, onClick, children }) => {
    return (
        <S.Button disabled={disabled} onClick={!disabled ? onClick : undefined}>
            {children}
        </S.Button>
    );
};

OnboardingNextBtn.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default OnboardingNextBtn;
