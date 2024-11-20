import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../contexts/OnboardingContext'; 
import OnboardingHeader from '../../components/onboarding/OnboardingHeader/OnboardingHeader';
import RegionSelector from '../../components/onboarding/RegionSelector/RegionSelector';
import OnboardingNextBtn from '../../components/onboarding/OnboardingNextBtn/OnboardingNextBtn';
import * as S from './Step2.style';

const Step2 = () => {
    const { selectedRegion, setSelectedRegion } = useOnboarding();
    const navigate = useNavigate();

    const currentStep = 2;
    const totalSteps = 4;

    const handleNext = () => {
        navigate('/onboarding-step3'); 
    };

    return (
        <S.Step2Container>
            <OnboardingHeader currentStep={currentStep} totalSteps={totalSteps} onBack={() => navigate(-1)} />

            <S.Title>어디로 떠날까요?</S.Title>
            <S.Description>지역 한 곳을 선택해주세요</S.Description>

            <RegionSelector onSelectionChange={setSelectedRegion} />

            <S.ButtonWrapper>
                <OnboardingNextBtn
                    disabled={!selectedRegion}
                    onClick={handleNext}
                >
                    다음
                </OnboardingNextBtn>
            </S.ButtonWrapper>
        </S.Step2Container>
    );
};

export default Step2;
