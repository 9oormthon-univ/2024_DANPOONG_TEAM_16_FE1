import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../contexts/OnboardingContext';
import { fetchRecommendedCourses } from '../../apis/onboarding/aiRecommendation';
import OnboardingHeader from '../../components/onboarding/OnboardingHeader/OnboardingHeader';
import TravelSelector from '../../components/onboarding/TravelSelector/TravelSelector';
import OnboardingNextBtn from '../../components/onboarding/OnboardingNextBtn/OnboardingNextBtn';
import * as S from './Step4.style';

const Step4 = () => {
    const {
        selectedTypes,
        selectedRegion,
        selectedDuration,
        selectedStyles,
    } = useOnboarding();
    const navigate = useNavigate();

    const handleNext = async () => {
        const formattedTripType = selectedStyles.map((style) =>
            typeof style === 'string' ? parseInt(style, 10) : style
        );

        const requestData = {
            disability: selectedTypes,
            tripType: formattedTripType,
            area: parseInt(selectedRegion, 10),
            period: parseInt(selectedDuration, 10),
        };

        console.log('최종 요청 데이터:', requestData);

        try {
            const courseNumber = await fetchRecommendedCourses(requestData);

            console.log('추천된 코스 번호:', courseNumber);

            // iOS로 코스 번호 전달
            if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.serverEvent) {
                window.webkit.messageHandlers.serverEvent.postMessage(courseNumber);
            } else {
                console.error('iOS WebKit 메시지 핸들러가 정의되지 않았습니다.');
            }
        } catch (error) {
            console.error('추천 코스를 가져오는 데 실패했습니다:', error);
        }
    };

    return (
        <S.Step4Container>
            <OnboardingHeader currentStep={4} totalSteps={4} onBack={() => navigate(-1)} />

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
