import PropTypes from 'prop-types';
import * as S from './FacilityIcon.style';
import {
    IcWheelchair,
    IcBlind,
    IcDeaf,
    IcElderly,
    IcInfant,
} from '../../../assets/svg';
import { useTheme } from '../../../contexts/ThemeContext'; 
import themes from '../../../styles/theme'; 

const FacilityIcons = ({
    publicTransport,
    elevator,
    restroom,
    helpDog,
    guideHuman,
    braileBlock,
    signGuide,
    videoGuide,
    hearingHandicapEtc,
    stroller,
    lactationRoom,
    babySpareChair,
}) => {
    const { currentTheme } = useTheme(); 

    const theme = themes[currentTheme] || themes.default;

    const activeColor = theme.color.black; 
    const inactiveColor = theme.color.gray6; 

    const icons = [
        {
            icon: <IcWheelchair fill={publicTransport || elevator || restroom ? activeColor : inactiveColor} />,
            label: '휠체어 사용자',
            active: publicTransport || elevator || restroom,
        },
        {
            icon: <IcElderly fill={publicTransport || elevator ? activeColor : inactiveColor} />,
            label: '노약자',
            active: publicTransport || elevator,
        },
        {
            icon: <IcBlind fill={helpDog || guideHuman || braileBlock ? activeColor : inactiveColor} />,
            label: '시각 장애',
            active: helpDog || guideHuman || braileBlock,
        },
        {
            icon: <IcInfant fill={stroller || lactationRoom || babySpareChair ? activeColor : inactiveColor} />,
            label: '영유아',
            active: stroller || lactationRoom || babySpareChair,
        },
        {
            icon: <IcDeaf stroke={signGuide || videoGuide || hearingHandicapEtc ? activeColor : inactiveColor} />,
            label: '청각 장애',
            active: signGuide || videoGuide || hearingHandicapEtc,
        },
    ];

    return (
        <S.Wrapper>
            <S.Title>시설물 정보</S.Title>
            <S.Container>
                {icons.map((item, index) => (
                    <S.IconWrapper key={index} title={item.label}>
                        {item.icon}
                    </S.IconWrapper>
                ))}
            </S.Container>
        </S.Wrapper>
    );
};

FacilityIcons.propTypes = {
    publicTransport: PropTypes.string,
    elevator: PropTypes.string,
    restroom: PropTypes.string,
    helpDog: PropTypes.string,
    guideHuman: PropTypes.string,
    braileBlock: PropTypes.string,
    signGuide: PropTypes.string,
    videoGuide: PropTypes.string,
    hearingHandicapEtc: PropTypes.string,
    stroller: PropTypes.string,
    lactationRoom: PropTypes.string,
    babySpareChair: PropTypes.string,
};

export default FacilityIcons;
