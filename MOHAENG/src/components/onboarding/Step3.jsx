import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../contexts/OnboardingContext'; 
import OnboardingHeader from '../../components/onboarding/OnboardingHeader/OnboardingHeader';
import DurationSelector from '../../components/onboarding/DurationSelector/DurationSelector';
import OnboardingNextBtn from '../../components/onboarding/OnboardingNextBtn/OnboardingNextBtn';
import * as S from './Step3.style';

const Step3 = () => {
    const { selectedDuration } = useOnboarding(); 
    const navigate = useNavigate();

    const currentStep = 3;
    const totalSteps = 4;

    const handleNext = () => {
        navigate('/onboarding-step4');
    };

    return (
        <S.Step3Container>
            <OnboardingHeader currentStep={currentStep} totalSteps={totalSteps} onBack={() => navigate(-1)} />

            <S.Title>얼마나 떠날까요?</S.Title>

            <DurationSelector />

            <S.ButtonWrapper>
                <OnboardingNextBtn
                    disabled={!selectedDuration}
                    onClick={handleNext}
                >
                    다음
                </OnboardingNextBtn>
            </S.ButtonWrapper>
        </S.Step3Container>
    );
};

export default Step3;
