import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../contexts/OnboardingContext'; 
import OnboardingHeader from '../../components/onboarding/OnboardingHeader/OnboardingHeader';
import DisabilityTypeSelector from '../../components/onboarding/DisabilityTypeSelector/DisabilityTypeSelector';
import OnboardingNextBtn from '../../components/onboarding/OnboardingNextBtn/OnboardingNextBtn';
import * as S from './Step1.style';

const Step1 = () => {
    const { selectedTypes, setSelectedTypes } = useOnboarding(); 
    const navigate = useNavigate();

    const currentStep = 1;
    const totalSteps = 4;

    const handleBack = () => {
        // iOS에 cancel 메시지 전달
        if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.serverEvent) {
            window.webkit.messageHandlers.serverEvent.postMessage({
                name: 'cancel',
                body: 'cancel',
            });
        } else {
            console.error('iOS WebKit 메세지 핸들러가 정의되지 않았습니다.');
        }

        // 뒤로가기 동작
        navigate(-1);
    };

    const handleNext = () => {
        navigate('/onboarding-step2');
    };

    return (
        <S.Step1Container>
            <OnboardingHeader currentStep={currentStep} totalSteps={totalSteps} onBack={handleBack} />

            <S.Title>해당하는 유형을 <br /> 선택해주세요</S.Title>
            <S.Description>중복 선택이 가능해요</S.Description>

            <DisabilityTypeSelector onSelectionChange={setSelectedTypes} />

            <S.ButtonWrapper>
                <OnboardingNextBtn
                    disabled={selectedTypes.length === 0}
                    onClick={handleNext}
                >
                    다음
                </OnboardingNextBtn>
            </S.ButtonWrapper>
        </S.Step1Container>
    );
};

export default Step1;
