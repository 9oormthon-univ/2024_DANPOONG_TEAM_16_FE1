import { useOnboarding } from '../../../contexts/OnboardingContext';
import DurationButton from './DurationButton';
import * as S from './DurationSelector.style';

const DurationSelector = () => {
    const { selectedDuration, setSelectedDuration } = useOnboarding();

    const durations = ['당일치기', '1박 2일', '2박 3일'];

    return (
        <S.Wrapper>
            <S.Container>
                {durations.map((duration) => (
                    <DurationButton
                        key={duration}
                        label={duration}
                        isSelected={selectedDuration === duration}
                        onClick={() => setSelectedDuration(duration)}
                    />
                ))}
            </S.Container>
        </S.Wrapper>
    );
};

export default DurationSelector;
