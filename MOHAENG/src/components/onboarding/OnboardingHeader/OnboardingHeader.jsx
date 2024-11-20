import PropTypes from 'prop-types';
import * as S from './OnboardingHeader.style'; 

import BackIcon from '../../../assets/svg/ic_onboarding_header_back.svg'; 

const OnboardingHeader = ({ currentStep, totalSteps }) => {
    // 프로그레스바 퍼센트 계산
    const progressPercentage = (currentStep / totalSteps) * 100;

    return (
        <S.HeaderContainer>
            <S.BackButton src={BackIcon} alt="뒤로가기">
                <img src={BackIcon} alt="뒤로가기" />
            </S.BackButton>

            <S.ProgressBarContainer>
                <S.ProgressBar progress={progressPercentage} />
            </S.ProgressBarContainer>
            
            <S.StepInfo>
                <S.CurrentStep>{currentStep}</S.CurrentStep>/{totalSteps}
            </S.StepInfo>
        </S.HeaderContainer>
    );
};

OnboardingHeader.propTypes = {
    currentStep: PropTypes.number.isRequired,
    totalSteps: PropTypes.number.isRequired,
};

export default OnboardingHeader;
