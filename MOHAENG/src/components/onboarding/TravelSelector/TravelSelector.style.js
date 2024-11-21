import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2.5rem;
`;

export const Container = styled.div`
    display: grid;
    width: 36rem; 
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem 0.7rem; 
`;