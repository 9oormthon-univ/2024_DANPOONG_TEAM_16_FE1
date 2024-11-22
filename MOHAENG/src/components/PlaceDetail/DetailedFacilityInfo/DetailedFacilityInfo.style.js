import styled from 'styled-components';
import theme from '../../../styles/theme'; 

export const Container = styled.div`
    width: 100%;
    margin-top: 2.85rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h2`
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.28px;
    margin-bottom: 1.5rem;
    color: ${theme.color.black};
    align-self: flex-start; 
    margin-left: 1.7rem; 
`;

export const FacilityCard = styled.div`
    background-color: ${theme.color.gray11};
    padding: 1.5rem;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    width: 92%;
    display: flex;
    justify-content: space-between; /
    align-items: flex-start;
`;


export const Type = styled.h3`
    color: ${theme.color.black};
    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.2px;
    flex: 0 0 30%;
    text-align: left; 
`;


export const DetailList = styled.ul`
    list-style: none;
    padding: 0;
    flex: 1; 
    display: flex;
    flex-direction: column;
`;

export const DetailItem = styled.li`
    color: ${theme.color.gray12};
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; 
    letter-spacing: -0.299px;
    margin-bottom: 1rem;

    &:last-child {
        margin-bottom: 0;
    }
`;
