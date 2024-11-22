import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const OnboardingContext = createContext();

export const useOnboarding = () => {
    return useContext(OnboardingContext);
};

export const OnboardingProvider = ({ children }) => {
    // 스텝별 상태 관리
    const [selectedTypes, setSelectedTypes] = useState([]); // 장애 유형
    const [selectedRegion, setSelectedRegion] = useState(null); // 여행 지역
    const [selectedDuration, setSelectedDuration] = useState(null); // 여행 기간
    const [selectedStyles, setSelectedStyles] = useState([]); // 여행 스타일

    // 최종 코스 데이터를 통합 관리
    const [courseData, setCourseData] = useState({
        disability: [], // 장애 유형
        tripType: [], // 여행 스타일
        area: null, // 지역
        period: null, // 기간
        startDate: '', // 시작 날짜
        dayPlans: {}, // 일별 코스
    });

    // 스텝 데이터를 업데이트하며 최종 데이터를 구성하는 함수
    const updateCourseData = () => {
        setCourseData((prevData) => ({
            ...prevData,
            disability: selectedTypes,
            tripType: selectedStyles,
            area: selectedRegion,
            period: selectedDuration,
        }));
    };

    return (
        <OnboardingContext.Provider
            value={{
                selectedTypes,
                setSelectedTypes,
                selectedRegion,
                setSelectedRegion,
                selectedDuration,
                setSelectedDuration,
                selectedStyles,
                setSelectedStyles,
                courseData,
                setCourseData,
                updateCourseData, // 최종 데이터 업데이트 함수
            }}
        >
            {children}
        </OnboardingContext.Provider>
    );
};

OnboardingProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

