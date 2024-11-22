import { useOnboarding } from '../../../contexts/OnboardingContext';
import TravelButton from './TravelButton';
import * as S from './TravelSelector.style';

import {
    IcOnboardingActicity,
    IcOnboardingBeach,
    IcOnboardingForest,
    IcOnboardingHistory,
} from '../../../assets/svg';

const TravelSelector = () => {
    const { selectedStyles, setSelectedStyles } = useOnboarding();

    const styles = [
        {
            id: 101,
            icon: <IcOnboardingForest />,
            title: '숲 속 휴양 및 치유',
            description: '울창한, 자연, 치유, 웰빙,\n숲속, 산림욕장, 휴양림',
        },
        {
            id: 102,
            icon: <IcOnboardingBeach />,
            title: '해양 및 수변활동',
            description: '해수욕장, 백사장, 물놀이,\n댐, 호수',
        },
        {
            id: 103,
            icon: <IcOnboardingHistory />,
            title: '역사와 문화유산',
            description: '박물관, 미술관, 유적, 역사,\n문화, 사찰, 조계종',
        },
        {
            id: 104,
            icon: <IcOnboardingActicity />,
            title: '함께하는 야외활동',
            description: '가족, 어린이, 동반, 공원,\n레저, 테마파크',
        },
    ];    

    const toggleSelect = (id) => {
        setSelectedStyles((prev) =>
            prev.includes(id)
                ? prev.filter((styleId) => styleId !== id) 
                : [...prev, id] 
        );
    };

    return (
        <S.Wrapper>
            <S.Container>
                {styles.map((style) => (
                    <TravelButton
                        key={style.id}
                        icon={style.icon}
                        title={style.title}
                        description={style.description}
                        isSelected={selectedStyles.includes(style.id)}
                        onClick={() => toggleSelect(style.id)}
                    />
                ))}
            </S.Container>
        </S.Wrapper>
    );
};

export default TravelSelector;
