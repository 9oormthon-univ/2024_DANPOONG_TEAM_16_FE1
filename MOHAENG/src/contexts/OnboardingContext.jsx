import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const OnboardingContext = createContext();

export const useOnboarding = () => {
    return useContext(OnboardingContext);
};

export const OnboardingProvider = ({ children }) => {
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [selectedDuration, setSelectedDuration] = useState(null); 
    const [selectedStyles, setSelectedStyles] = useState([]); // 이름 수정

    return (
        <OnboardingContext.Provider
            value={{
                selectedTypes,
                setSelectedTypes,
                selectedRegion,
                setSelectedRegion,
                selectedDuration,
                setSelectedDuration,
                selectedStyles, // 이름 수정
                setSelectedStyles,
            }}
        >
            {children}
        </OnboardingContext.Provider>
    );
};

OnboardingProvider.propTypes = {
    children: PropTypes.node.isRequired,
};