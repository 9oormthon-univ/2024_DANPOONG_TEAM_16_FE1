import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
    padding-bottom: 5rem;
`;

export const Divider = styled.div`
    width: 100%;
    height: 0.8rem;
    background-color: ${theme.color.gray10};
`;