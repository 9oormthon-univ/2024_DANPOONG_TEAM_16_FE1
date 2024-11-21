import DisabilityTypeButton from './DisabilityTypeButton';
import { useOnboarding } from '../../../contexts/OnboardingContext'; 
import * as S from './DisabilityTypeSelector.style';

import { IcBlind, IcDeaf, IcElderly, IcInfant, IcWheelchair } from '../../../assets/svg';

const DisabilityTypeSelector = () => {
    const { selectedTypes, setSelectedTypes } = useOnboarding(); 

    const types = [
        { id: 1, icon: <IcElderly className="elderly-icon" />, label: '고령자' },
        { id: 2, icon: <IcWheelchair className="wheelchair-icon" />, label: '지체장애인' },
        { id: 3, icon: <IcBlind className="blind-icon" />, label: '시각장애인' },
        { id: 4, icon: <IcInfant className="infant-icon" />, label: '임산부·\n유아동반자' },
        { id: 5, icon: <IcDeaf className="deaf-icon" />, label: '청각장애인' },
        { id: 6, icon: null, label: '해당사항 없음' },
    ];

    const toggleSelect = (id) => {
        let updatedTypes;

        if (id === 6) {
            // 해당사항 없음 선택 시 처리
            updatedTypes = selectedTypes.includes(id) ? [] : [id];
        } else {
            // 다른 버튼 선택 시 처리
            updatedTypes = selectedTypes.includes(6)
                ? [id] 
                : selectedTypes.includes(id)
                ? selectedTypes.filter((typeId) => typeId !== id) 
                : [...selectedTypes, id];
        }

        setSelectedTypes(updatedTypes); 
    };

    return (
        <S.Wrapper>
            <S.Container>
                {types.map((type) => (
                    <DisabilityTypeButton
                        key={type.id}
                        icon={type.icon}
                        label={type.label}
                        isSelected={selectedTypes.includes(type.id)} 
                        onClick={() => toggleSelect(type.id)}
                    />
                ))}
            </S.Container>
        </S.Wrapper>
    );
};

export default DisabilityTypeSelector;
