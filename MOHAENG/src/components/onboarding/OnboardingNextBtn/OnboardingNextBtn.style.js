import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    width: 35.8rem;
    height: 5.5rem;
    padding: 1.3rem 0;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (props.disabled ? props.theme.color.gray5 : props.theme.color.primary2)};
    color: ${(props) => props.theme.color.white};
    border: none;
    border-radius: 14px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    transition: background-color 0.3s ease;

    font-size: 2rem;
    font-weight: 700;
    line-height: normal;
`;
