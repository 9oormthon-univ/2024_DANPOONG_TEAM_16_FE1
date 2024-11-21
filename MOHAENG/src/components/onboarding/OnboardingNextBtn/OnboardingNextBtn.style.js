import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Button = styled.button`
    display: flex;
    width: 35.8rem;
    height: 5.5rem;
    padding: 1.3rem 0;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (props.disabled ? theme.color.gray5 : theme.color.primary2)};
    color: ${theme.color.white};
    border: none;
    border-radius: 14px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    transition: background-color 0.3s ease;

    font-size: 2rem;
    font-weight: 700;
    line-height: normal;
`;
