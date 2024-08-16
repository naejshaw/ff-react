import styled from "styled-components";

export const Restaurant = styled.div`
    display: flex;
    justify-content- space-between;
    cursor: pointer;
    margin-top: 5px;
    padding: 16px;
    background-color: #f7f7f7;
    border-left: 5px solid transparent;
    &:hover{
        background-color: ${(props) => props.theme.colors.background};
        border-left-color: ${(props) => props.theme.colors.primary};
    }
`
export const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: column;
`
export const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 10px;
`
export const Adress = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.theme.colors.text};
    margin: 10px 0;
`
export const RestaurantPhoto = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 6px;
`