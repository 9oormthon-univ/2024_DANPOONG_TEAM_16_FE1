import styled from 'styled-components';
import theme from '../../../styles/theme';

// 헤더 전체 컨테이너
export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    background-color: ${theme.color.white};
    padding-top: 1.6rem;
`;

// 뒤로 가기 버튼
export const BackButton = styled.button`
    align-self: flex-start;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;

     img {
        display: block; 
    }
`;

// 프로그레스바 컨테이너
export const ProgressBarContainer = styled.div`
    width: 100%;
    height: 0.4rem;
    background-color: ${theme.color.gray1};
    border-radius: 4px;
    overflow: hidden;
    margin-top: 1.6rem;
`;

// 프로그레스바
export const ProgressBar = styled.div`
    width: ${({ progress }) => `${progress}%`};
    height: 100%;
    background-color: ${theme.color.primary};
    transition: width 0.3s ease-in-out;
`;

// 단계 표시 (1/4, 2/4 등)
export const StepInfo = styled.div`
    align-self: flex-start;
    font-size: 1.8rem;
    font-weight: 600;
    margin-top: 1.625rem;
    color: ${theme.color.black}; /* 기본 텍스트 색상 */
`;

export const CurrentStep = styled.span`
    color: ${theme.color.primary}; /* currentStep 색상 */
`;
