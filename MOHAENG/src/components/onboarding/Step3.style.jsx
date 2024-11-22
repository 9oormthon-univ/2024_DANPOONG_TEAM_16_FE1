import styled from 'styled-components';

export const Step3Container = styled.div`
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
    font-weight: 500;
    color: ${({ theme }) => theme.color.black};
    margin-top: 4.459rem;
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
