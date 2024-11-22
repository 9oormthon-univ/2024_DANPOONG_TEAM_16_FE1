import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../contexts/OnboardingContext';
import { fetchRecommendedCourses } from '../../apis/onboarding/aiRecommendation'
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
        // 여행 타입 데이터를 검증하고 변환
        const formattedTripType = selectedStyles.map((style) => {
            // `style` 값이 `101`, `102` 같은 값이 아닐 경우 변환 로직 추가
            if (typeof style === 'string') {
                return parseInt(style, 10); // 문자열이라면 숫자로 변환
            }
            return style; // 이미 숫자라면 그대로 사용
        });
    
        console.log('변환된 tripType 데이터:', formattedTripType);
    
        // API 요청 데이터
        const requestData = {
            disability: selectedTypes, // 장애 유형 (그대로 사용)
            tripType: formattedTripType, // 변환된 여행 스타일 ID
            area: parseInt(selectedRegion, 10), // 지역 ID를 정수로 변환
            period: parseInt(selectedDuration, 10), // 여행 기간을 정수로 변환
        };
    
        console.log('최종 요청 데이터:', requestData);
    
        try {
            const recommendedCourses = await fetchRecommendedCourses(requestData);
    
            console.log('추천 코스:', recommendedCourses);
    
            // iOS에 메시지 전달
            if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.serverEvent) {
                window.webkit.messageHandlers.serverEvent.postMessage({
                    name: 'accept', // iOS에서 요청한 키
                    body: recommendedCourses, // API 응답 데이터
                });
            } else {
                console.error('iOS WebKit 메세지 핸들러가 정의되지 않았습니다.');
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
