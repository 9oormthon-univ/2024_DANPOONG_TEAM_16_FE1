import { useState } from 'react';
import OnboardingHeader from '../../components/onboarding/OnboardingHeader/OnboardingHeader';
import DisabilityTypeSelector from '../../components/onboarding/DisabilityTypeSelector/DisabilityTypeSelector';
import OnboardingNextBtn from '../../components/onboarding/OnboardingNextBtn/OnboardingNextBtn';
import * as S from './Step1.style';

const Step1 = () => {
    const [currentStep] = useState(1);
    const totalSteps = 4;

    // 선택된 유형 관리
    const [selectedTypes, setSelectedTypes] = useState([]);

    const handleNext = () => {
        console.log('다음 스텝으로 이동');
    };

    return (
        <S.Step1Container>
            <OnboardingHeader currentStep={currentStep} totalSteps={totalSteps} />

            <S.Title>해당하는 유형을 <br /> 선택해주세요</S.Title>
            <S.Description>중복 선택이 가능해요</S.Description>

            {/* 선택된 유형 전달 */}
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
