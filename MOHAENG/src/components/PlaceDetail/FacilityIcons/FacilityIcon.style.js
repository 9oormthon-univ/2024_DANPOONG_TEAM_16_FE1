import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    margin-top: 2.4rem;
`;

export const Title = styled.h2`
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; 
    letter-spacing: -0.28px;
    margin-left: 1.7rem;
    color: ${({ theme }) => theme.color.black};
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 3.5rem;
    margin-top: 1.1rem;
`;
 
export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.1rem;
    height: 3.8rem;

    svg {
        width: 100%;
        height: 100%;
    }
`;
