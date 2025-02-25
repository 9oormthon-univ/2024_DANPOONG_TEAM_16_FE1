import styled from 'styled-components';

export const Button = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== 'isSelected',
})`
    width: 17.5rem;
    padding: 0;
    height: 10.2rem;
    position: relative; 
    display: flex;
    justify-content: flex-start;
    background-color: ${(props) => (props.isSelected ? props.theme.color.blue1 : props.theme.color.white)};
    color: ${(props) => props.theme.color.black};
    border: 1.5px solid ${(props) => (props.isSelected ? props.theme.color.blue2 : props.theme.color.gray3)};
    border-radius: 13px;
    cursor: pointer;
    box-shadow: 0px 4px 12.1px 0px rgba(0, 0, 0, 0.06);
`;

export const Label = styled.span.withConfig({
    shouldForwardProp: (prop) => prop !== 'isSelected',
})`
    position: absolute;
    top: 1.9rem; 
    left: 1.3rem; 
    color: ${(props) => (props.isSelected ? props.theme.color.black : props.theme.color.gray4)};
    font-size: 1.8rem;
    font-style: normal;
    font-weight: ${(props) => (props.isSelected ? 600 : 500)};
    letter-spacing: -0.198px;
    white-space: pre-wrap;
    text-align: left; 
`;

export const Icon = styled.div`
    margin-left: auto;
    svg {
        &.elderly-icon {
            width: 3.3rem;
            height: 6.5rem;
            margin-top: 2.4rem;
            margin-right: 1.2rem; 
        }

        &.wheelchair-icon {
            width: 5.3rem;
            height: 6.5rem;
            margin-top: 2.6rem;
            margin-right: 1.3rem; 
        }

        &.blind-icon {
            width: 5.2rem;
            height: 6.2rem;
            margin-top: 2.6rem;
            margin-right: 2.2rem; 
            transform: scaleX(-1);
        }

        &.infant-icon {
            width: 3rem;
            height: 6.6rem;
            margin-top: 2rem;
            margin-right: 1.5rem; 
        }

        &.deaf-icon {
            width: 3.9rem;
            height: 4.6rem;
            margin-top: 2.5rem;
            margin-right: 2rem;
        }
    }
`;
