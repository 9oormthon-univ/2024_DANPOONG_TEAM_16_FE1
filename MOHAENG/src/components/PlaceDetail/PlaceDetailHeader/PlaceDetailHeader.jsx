import PropTypes from 'prop-types';
import * as S from './PlaceDetailHeader.style';

import { IcPlacedetailHeaderBack, IcPlacedetailHeaderHome } from '../../../assets/svg';

const PlaceDetailHeader = () => {

    const handleBackClick = () => {
        if (window.webkit?.messageHandlers?.serverEvent) {
            window.webkit.messageHandlers.serverEvent.postMessage({
                name: 'back', 
                body: 'back', 
            });
        } else {
            console.warn('iOS 브릿지 설정 안 됨');
        }
    };
    
    const handleHomeClick = () => {
        if (window.webkit?.messageHandlers?.serverEvent) {
            window.webkit.messageHandlers.serverEvent.postMessage({
                name: 'home', 
                body: 'home', 
            });
        } else {
            console.warn('iOS 브릿지가 설정 안 됨');
        }
    };

    return (
        <S.HeaderContainer>
            <S.IconButton onClick={handleBackClick}>
                <IcPlacedetailHeaderBack />
            </S.IconButton>
            <S.IconButton onClick={handleHomeClick}>
                <IcPlacedetailHeaderHome />
            </S.IconButton>
        </S.HeaderContainer>
    );
};

PlaceDetailHeader.propTypes = {
    onBackClick: PropTypes.func,
    onHomeClick: PropTypes.func,
};

export default PlaceDetailHeader;
