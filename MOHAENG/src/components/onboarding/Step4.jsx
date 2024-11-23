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

    // AI 코스 요청 함수
    const requestCourseNumber = async (requestData, retries = 3) => {
        for (let attempt = 1; attempt <= retries; attempt++) {
            try {
                console.log(`AI 코스 생성 시도 #${attempt}`);
                const courseNumber = await fetchRecommendedCourses(requestData);

                // 성공 시 결과 반환
                return courseNumber;
            } catch (error) {
                console.error(`AI 코스 생성 실패 (시도 #${attempt}):`, error);

                // 마지막 시도에서도 실패 시 에러를 다시 던짐
                if (attempt === retries) {
                    throw new Error('AI 코스 생성 실패: 모든 재시도 실패');
                }
            }
        }
    };

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
            // AI 코스 요청 및 재시도 처리
            const courseNumber = await requestCourseNumber(requestData);

            console.log('추천된 코스 번호:', courseNumber);

            // iOS로 코스 번호 전달
            if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.serverEvent) {
                window.webkit.messageHandlers.serverEvent.postMessage(courseNumber);
            } else {
                console.error('iOS WebKit 메시지 핸들러가 정의되지 않았습니다.');
            }
        } catch (error) {
            console.error('추천 코스를 가져오는 데 실패했습니다:', error);

            // 에러 메시지를 사용자에게 표시하거나 별도 처리
            alert('AI 코스 생성을 여러 번 시도했지만 실패했습니다. 잠시 후 다시 시도해주세요.');
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
