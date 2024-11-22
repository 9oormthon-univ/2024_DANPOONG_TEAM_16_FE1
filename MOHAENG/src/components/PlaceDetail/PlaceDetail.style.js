import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${(props) => props.theme.color.white};
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
    padding-bottom: 5rem;
`;

export const Divider = styled.div`
    width: 100%;
    height: 0.8rem;
    background-color: ${({ theme }) => theme.color.gray10};
`;