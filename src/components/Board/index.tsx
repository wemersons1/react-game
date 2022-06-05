import React from 'react';
import { GAME_SIZE } from '../../settings';
import './board.css';
import Hero from '../Hero';

const Board = () => {

    return (
        <div style={{
            display: "flex",
            justifyContent: "center"
        }}>

            <div
                style={{
                    width: GAME_SIZE,
                    height: GAME_SIZE,
                }}
                className={'board'}
            >

                <Hero />

                <img width={GAME_SIZE} height={GAME_SIZE} alt={'imagem do quadro'} src={"./assets/imgs/tileset.gif"} />


            </div>

        </div>


    );
}

export default Board;