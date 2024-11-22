import PropTypes from 'prop-types';
import * as S from './DetailedFacilityInfo.style';

const disabilityTypes = [
    { type: '지체장애', keys: ['publicTransport', 'elevator', 'restroom'] },
    { type: '시각장애', keys: ['helpDog', 'guideHuman', 'braileBlock'] },
    { type: '청각장애', keys: ['signGuide', 'videoGuide', 'hearingHandicapEtc'] },
    { type: '임산부·유아동반자', keys: ['stroller', 'lactationRoom', 'babySpareChair'] },
];

const DetailedFacilityInfo = ({ facilities }) => {
    return (
        <S.Container>
            <S.Title>세부 시설물 정보</S.Title>
            {disabilityTypes.map(({ type, keys }) => {
                const details = keys
                    .map((key) => facilities[key])
                    .filter((detail) => detail);
                if (details.length === 0) return null; 
                return (
                    <S.FacilityCard key={type}>
                        <S.Type>
                            {type === '임산부·유아동반자' ? (
                                <>
                                    임산부·<br />
                                    유아동반자
                                </>
                            ) : (
                                type
                            )}
                        </S.Type>
                        <S.DetailList>
                            {details.map((detail, index) => (
                                <S.DetailItem key={index}>{detail}</S.DetailItem>
                            ))}
                        </S.DetailList>
                    </S.FacilityCard>
                );
            })}
        </S.Container>
    );
};

DetailedFacilityInfo.propTypes = {
    facilities: PropTypes.object.isRequired,
};

export default DetailedFacilityInfo;
