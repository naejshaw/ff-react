import styled from "styled-components";
import Slider from 'react-slick';

export const Wrapper = styled.div`
    display: flex;
`
export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width: 25%;
    height: 100vh;
    overflow-y: auto;
`
export const Search = styled.section`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
`
export const InputContainer = styled.div`
    background-color: #ffffff;
    color: ${(props) => props.theme.colors.text};
    padding: .25rem;
    margin-top: .25rem;
    display: flex;
    width: 100%;
    height: 16px;
    justify-content: space-between;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: .25rem;
`
export const Input = styled.input`
    border: none;
    width: 80%;
`
export const Button = styled.a`
    cursor: pointer;
    margin-bottom: .25rem;
`
export const Map = styled.div`
    background-color: ${(props) => props.theme.colors.primary};
    width: 75%;
`
export const Carousel = styled(Slider)`
    .slick-slide{
        margin: 0 2px;
    }
`
export const CarouselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 29px;
    margin: 1rem 0;
`

