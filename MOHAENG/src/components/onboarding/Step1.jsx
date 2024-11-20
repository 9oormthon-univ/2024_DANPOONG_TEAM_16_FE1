import { useState } from 'react';
import OnboardingHeader from '../../components/onboarding/OnboardingHeader/OnboardingHeader';
import DisabilityTypeSelector from '../../components/onboarding/DisabilityTypeSelector/DisabilityTypeSelector';
import * as S from './Step1.style';

const Step1 = () => {
    const [currentStep] = useState(1); 
    const totalSteps = 4;

    return (
        <S.Step1Container>
            <OnboardingHeader currentStep={currentStep} totalSteps={totalSteps} />
            
            <S.Title>해당하는 유형을 <br /> 선택해주세요</S.Title>
            <S.Description>중복 선택이 가능해요</S.Description>

            <DisabilityTypeSelector />
        </S.Step1Container>
    );
};

export default Step1;
