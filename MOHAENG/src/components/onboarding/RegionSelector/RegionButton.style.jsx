import styled from 'styled-components';

export const Button = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== 'isSelected',
})`
    width: 10.4rem;
    height: 4.8rem;
    border: 1.5px solid
        ${({ isSelected, theme }) => (isSelected ? theme.color.blue2 : theme.color.gray6)};
    background-color: ${({ isSelected, theme }) =>
        isSelected ? theme.color.blue1 : theme.color.white};
    color: ${({ isSelected, theme }) =>
        isSelected ? theme.color.black : theme.color.gray7};
    border-radius: 37px;
    cursor: pointer;
    font-size: 1.7rem;
    font-weight: ${({ isSelected }) => (isSelected ? 600 : 400)};

    &:hover {
        border-color: ${({ theme }) => theme.color.blue2};
    }
`;
