import styled from 'styled-components';

export const Step4Container = styled.div`
    background-color: ${(props) => props.theme.color.white};
    position: relative; 
    padding: 0 1.6rem;
    height: 100vh; 
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    margin-top: 2.3rem;
    font-size: 2.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.black};
    margin-top: 4.459rem;
    line-height: 130%;
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.color.gray2};
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    margin-top: 1.35rem;
    margin-left: 0.2rem;
`;

export const ButtonWrapper = styled.div`
    position: absolute;
    bottom: 4rem;
    left: 50%;
    transform: translateX(-50%); 
    width: 100%;
    display: flex;
    justify-content: center;
`;
