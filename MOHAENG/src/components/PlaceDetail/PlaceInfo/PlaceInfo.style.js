import styled from 'styled-components';

export const Container = styled.div`
    padding: 1rem 1.6rem 1.4rem 1.6rem;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.black};
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.28px;
`;

export const Description = styled.div`
    font-size: 1.4rem;
    color: ${({ theme }) => theme.color.gray9};
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.28px;
    white-space: pre-line;
    margin-top: 1rem;
`;

export const MoreButton = styled.span`
    color: ${({ theme }) => theme.color.gray13};
    cursor: pointer;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    margin-left: 0.5rem; 
`;
