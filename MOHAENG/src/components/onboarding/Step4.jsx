import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../contexts/OnboardingContext';
import OnboardingHeader from '../../components/onboarding/OnboardingHeader/OnboardingHeader';
import TravelSelector from '../../components/onboarding/TravelSelector/TravelSelector';
import OnboardingNextBtn from '../../components/onboarding/OnboardingNextBtn/OnboardingNextBtn';
import * as S from './Step4.style';

const Step4 = () => {
    const { selectedStyles } = useOnboarding();
    const currentStep = 4;
    const totalSteps = 4;
    const navigate = useNavigate();

    const handleNext = () => {
        console.log('선택된 여행 스타일:', selectedStyles);
        console.log('코스 생성 완료!');
    };

    return (
        <S.Step4Container>
            <OnboardingHeader currentStep={currentStep} totalSteps={totalSteps} onBack={() => navigate(-1)} />

            <S.Title>원하는 여행 스타일을 <br /> 선택해주세요</S.Title>
            <S.Description>중복 선택이 가능해요</S.Description>

            <TravelSelector />

            <S.ButtonWrapper>
                <OnboardingNextBtn
                    disabled={selectedStyles.length === 0}
                    onClick={handleNext}
                >
                    코스 생성하기
                </OnboardingNextBtn>
            </S.ButtonWrapper>
        </S.Step4Container>
    );
};

export default Step4;
