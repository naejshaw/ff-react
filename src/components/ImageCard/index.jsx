import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
    width: 90px;
    height: 90px;
    border-radius: 6px;
    background-image: url(${(props) => props.photo});
    background-size: cover;
    cursor: pointer;
`

const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: #ffffff;
    font-size: 16px;
`

export default function ImageCard({photo, title}){
    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(() => {
        const imageLoader = new Image();
        imageLoader.src = photo;
        imageLoader.onload = () => setImageLoaded(true);
    }, [photo]);

    return (
        <>
        {imageLoaded && (
            <Card photo={photo}>
                <Title>{title}</Title>
            </Card>
        ) }
        </>
    )
}