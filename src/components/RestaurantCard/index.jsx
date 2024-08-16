import React from 'react';
import { Adress, Restaurant, RestaurantInfo, RestaurantPhoto, Title } from "./styles";
import ReactStars from 'react-rating-stars-component'
import restaurant from '../../assets/restaurante-fake.png'

export default function RestaurantCard(){
    return (
        <Restaurant>
            <RestaurantInfo>
                <Title>Nome do Restaurante</Title>
                <ReactStars count={5} value={4} isHalf activeColor="#e7711c" edit={false} />
                <Adress>Endereço do Restaurante</Adress>
            </RestaurantInfo>
            <RestaurantPhoto src={restaurant} alt={'Foto do restaurante'} />
        </Restaurant>
    )
}