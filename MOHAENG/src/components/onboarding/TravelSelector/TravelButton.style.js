import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Button = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== 'isSelected',
})`
    width: 17.5rem;
    height: 12rem;
    position: relative; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${(props) => (props.isSelected ? theme.color.blue1 : theme.color.white)};
    color: ${theme.color.black};
    border: 1.5px solid ${(props) => (props.isSelected ? theme.color.blue2 : theme.color.gray3)};
    border-radius: 17.912px;
    cursor: pointer;
    box-shadow: 0px 4px 12.1px 0px rgba(0, 0, 0, 0.06);
    padding: 1.2rem;
`;

export const IconWrapper = styled.div`
    position: absolute;
    bottom: 0.4rem;
    right: 0.6rem;
    width: 7rem;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Title = styled.span.withConfig({
    shouldForwardProp: (prop) => prop !== 'isSelected',
})`
    color: ${theme.color.black};
    font-size: 1.5rem;
    font-weight: ${(props) => (props.isSelected ? 600 : 400)};
    letter-spacing: -0.198px;
    margin-bottom: 0.5rem; /* Title과 Description 사이 간격 */
`;

export const Description = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: ${theme.color.gray8};
    line-height: 1.6;
    text-align: left;
    white-space: pre-wrap; 
`;
