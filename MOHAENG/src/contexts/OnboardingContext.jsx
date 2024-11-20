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

    return (
        <OnboardingContext.Provider
            value={{
                selectedTypes,
                setSelectedTypes,
                selectedRegion,
                setSelectedRegion,
                selectedDuration,
                setSelectedDuration, 
            }}
        >
            {children}
        </OnboardingContext.Provider>
    );
};

OnboardingProvider.propTypes = {
    children: PropTypes.node.isRequired,
};