import styled from 'styled-components';
import theme from '../../styles/theme';

export const Step1Container = styled.div`
    position: relative; 
    padding: 0 1.6rem;
    height: 100vh; 
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    color: ${theme.color.black};
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    margin-top: 2.309rem;
`;

export const Description = styled.p`
    color: ${theme.color.gray2};
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    margin-top: 1.3rem;
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