import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useWindowSize } from '../../utils/useWindowSize';

// Define the animation outside the component
const moveOrb = (width, height) => keyframes`
    0% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(${width}px, ${height / 2}px);
    }
    100% {
        transform: translate(0, 0);
    }
`;

// Define the styled component outside the component
const OrbStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -37vh;
    margin-top: -37vh;
    background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
    filter: blur(400px);
    animation: ${(props) => moveOrb(props.width, props.height)} 15s alternate linear infinite;
`;

function Orb() {
    const { width, height } = useWindowSize();

    console.log(width, height);

    return <OrbStyled width={width} height={height}></OrbStyled>;
}

export default Orb;
