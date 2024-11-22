import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
    0%, 100% { opacity: 0; transform: translateY(20px); }
    10%, 90% { opacity: 1; transform: translateY(0); }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1.1rem;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 92%;
    height: auto;
    padding: 9px 14px;
    border-radius: 6px;
    background: ${({ theme }) => theme.color.gray10};
    gap: 8px;
    flex-shrink: 0;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const Label = styled.span`
    color: ${({ theme }) => theme.color.black};
    font-family: Pretendard, sans-serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.299px;
    margin-right: 10px; /* 간격 조절 */
`;

export const Value = styled.span`
    flex: 1;
    color: ${({ theme }) => theme.color.gray8};
    font-family: Pretendard, sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.299px;
    text-align: left;
    margin-right: 10px;
`;

export const CopyButton = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.color.primary3};
    font-family: Pretendard, sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
`;

export const ToastWrapper = styled.div`
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%); 
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; 
`;

export const Toast = styled.div`
    bottom: 2rem;
    background: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
    padding: 1rem 1.2rem;
    border-radius: 6px;
    font-size: 1.3rem;
    font-weight: 500;
    animation: ${fadeInOut} 3s ease-in-out;
`;
