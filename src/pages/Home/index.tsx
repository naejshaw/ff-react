import React, { useState } from 'react'

import logo from '../../assets/logo.svg'
import restaurant from '../../assets/restaurante-fake.png'
import { Card, Modal, RestaurantCard } from '../../components'
import {Button, Carousel, CarouselTitle, Container, Input, InputContainer, Map, Search, Wrapper} from './styles'
import MapContainer from '../../components/Map/MapContainer'

export default function Home(){
    const [inputValue, setinputValue] = useState('')
    const [modalOpened, setModalOpened] = useState(false)

    const settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,  
        adaptiveHeight: true,
    }

    return (
        <Wrapper>
            <Container>
                <Search>
                    <img src={logo} alt="logo"/>
                    <InputContainer>
                        <Input placeholder={'Pesquisar'} value={inputValue} onChange={(e) => setinputValue(e.target.value)} />
                        <Button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20}><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                        </Button>
                    </InputContainer>
                    <CarouselTitle>Na sua Área</CarouselTitle>
                    <Carousel {...settings}>
                        <Card photo={restaurant} title={"Restaurante 1"}/>
                        <Card photo={restaurant} title={"Restaurante 2"}/>
                        <Card photo={restaurant} title={"Restaurante 3"}/>
                        <Card photo={restaurant} title={"Restaurante 4"}/>
                    </Carousel>
                </Search>
                <RestaurantCard />
            </Container>
            <Map>
                <MapContainer />
            </Map>
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}/>
        </Wrapper>
    )
}