import React, { useMemo, useState } from 'react';
import { TILE_WIDTH } from '../../settings';
import './hero.css';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useRef } from 'react';

const Hero = () => {

    const initialStatePositions = {
        x: 0,
        y: 1
    }

    const [positions, setPositions] = useState(initialStatePositions);

    useMemo(() => {

        const functionTest = (event) => {

            if (event.key === 'ArrowUp') {
                setPositions({ ...positions, y: positions.y - 1 });
            } else if (event.key === 'ArrowDown') {
                setPositions({ ...positions, y: positions.y + 1 });
            } else if (event.key === 'ArrowLeft') {
                setPositions({ ...positions, x: positions.x - 1 });
            } else if (event.key === 'ArrowRight') {
                setPositions({ ...positions, x: positions.x + 1 });
            }

        }

        window.addEventListener('keydown', functionTest);


    }, [positions]);



    return (
        <div
            style={{
                backgroundImage: "url(./assets/imgs/HERO.png)",
                backgroundRepeat: "no-repeat",
                height: TILE_WIDTH,
                width: TILE_WIDTH,
                animation: 'hero-animation 1s steps(4) infinite',
                border: "1px solid red",
                backgroundPositionY: -TILE_WIDTH,
                top: positions.y * TILE_WIDTH,
                left: positions.x * TILE_WIDTH
            }}
            className={'hero'}

        />

    );
}

export default Hero;