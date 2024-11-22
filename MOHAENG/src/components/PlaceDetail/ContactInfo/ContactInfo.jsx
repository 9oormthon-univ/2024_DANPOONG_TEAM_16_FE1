import PropTypes from 'prop-types';
import { useState } from 'react';
import * as S from './ContactInfo.style';

const copyToClipboard = (text, setToastMessage) => {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(
            () => {
                setToastMessage(`${text}이(가) 복사되었습니다.`);
            },
            (err) => {
                console.error('복사 실패:', err);
                setToastMessage('복사에 실패했어요 😢');
            }
        );
    } else {
        setToastMessage('복사가 지원되지 않는 환경이에요 😢');
    }
};

const ContactInfo = ({ address, phone }) => {
    const [toastMessage, setToastMessage] = useState('');
    const [showToast, setShowToast] = useState(false);

    const handleCopy = (text) => {
        copyToClipboard(text, setToastMessage);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000); 
    };

    return (
        <>
            <S.Wrapper>
                <S.Container>
                    <S.Row>
                        <S.Label>주소</S.Label>
                        <S.Value>{address}</S.Value>
                        <S.CopyButton onClick={() => handleCopy(address)}>복사</S.CopyButton>
                    </S.Row>
                    <S.Row>
                        <S.Label>전화</S.Label>
                        <S.Value>{phone}</S.Value>
                        <S.CopyButton onClick={() => handleCopy(phone)}>복사</S.CopyButton>
                    </S.Row>
                </S.Container>
            </S.Wrapper>

            {showToast && (
                <S.ToastWrapper>
                    <S.Toast>{toastMessage}</S.Toast>
                </S.ToastWrapper>
            )}
        </>
    );
};

ContactInfo.propTypes = {
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};

export default ContactInfo;
