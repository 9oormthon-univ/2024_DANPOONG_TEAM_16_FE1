import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    margin-top: 2.65rem;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 1.2rem;
    justify-items: center;
`;
