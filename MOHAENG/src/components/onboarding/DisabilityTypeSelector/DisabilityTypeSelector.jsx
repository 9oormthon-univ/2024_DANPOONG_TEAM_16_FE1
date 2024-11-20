import { useState } from 'react';
import DisabilityTypeButton from './DisabilityTypeButton';
import * as S from './DisabilityTypeSelector.style';

import { IcBlind, IcDeaf, IcElderly, IcInfant, IcWheelchair } from '../../../assets/svg';

const DisabilityTypeSelector = () => {
    const [selectedTypes, setSelectedTypes] = useState([]);

    const types = [
        { id: 1, icon: <IcElderly className="elderly-icon" />, label: '고령자' },
        { id: 2, icon: <IcWheelchair className="wheelchair-icon" />, label: '지체장애인' },
        { id: 3, icon: <IcBlind className="blind-icon" />, label: '시각장애인' },
        { id: 4, icon: <IcInfant className="infant-icon" />, label: '임산부·\n유아동반자' },
        { id: 5, icon: <IcDeaf className="deaf-icon" />, label: '청각장애인' },
        { id: 6, icon: null, label: '해당사항 없음' }, 
    ];

    const toggleSelect = (id) => {
        setSelectedTypes((prev) =>
            prev.includes(id) ? prev.filter((typeId) => typeId !== id) : [...prev, id]
        );
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
