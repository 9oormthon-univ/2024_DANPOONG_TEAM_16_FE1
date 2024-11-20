import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Button = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== 'isSelected',
})`
    width: 11.4rem;
    height: 4.8rem;
    border: 1.5px solid  ${({ isSelected }) => (isSelected ? theme.color.primary : theme.color.gray6)};
    background-color: ${({ isSelected }) => isSelected ? theme.color.blue1 : theme.color.white};
    border-radius: 37px;
     color: ${({ isSelected }) => isSelected ? theme.color.black : theme.color.gray7};
    font-size: 1.6rem;
    font-weight: ${({ isSelected }) => (isSelected ? '600' : '400')};
    cursor: pointer;
`;
