import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    z-index: 10;
    gap: 1.5rem;
    position: absolute;
    top: 3.81rem;
    left: 0;
    width: 100%;
    padding: 1.2rem;
`;

export const IconButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
    
    & > svg {
        width: 3.5rem;
        height: 3.5rem;
    }
`;
