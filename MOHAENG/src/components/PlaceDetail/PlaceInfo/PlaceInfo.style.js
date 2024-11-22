import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Container = styled.div`
    padding: 1rem 1.6rem 1.4rem 1.6rem;
`;

export const Title = styled.h1`
    color: ${theme.color.black};
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.28px;
`;

export const Description = styled.p`
    font-size: 1.4rem;
    color: ${theme.color.gray9};
    font-style: normal;
    font-weight: 400;
    line-height: 150%; 
    letter-spacing: -0.28px;
    white-space: pre-line;
    margin-top: 1rem;
`;
