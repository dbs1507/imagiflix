import React from "react";
import placeholder from '../assets/hero.jpg';
import Score from "./Score";
import CONST from '../data/constants';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'

const Hero = ({ backdrop_path = null, title = 'Avengers Endgame', vote_average = 10 }) => {

    const { IMAGEURL } = CONST
    return (
        <header className="box-border relative min-h-screen -mb-64 pb-64">
            <img
                className="object-cover object-center h-auto w-full"
                src={backdrop_path ? `${IMAGEURL}/original/${backdrop_path}` : placeholder}
                alt='FIlme em destaque'
            />
            <div className="absolute left-0 bottom-64 w-full h-full bg-gradient-to-b from-transparent to-black"></div> {/*propriedades para aplicar gradiente preto na imagem na parte de baixo.bg-gradient-to-b, indica que o gradiente é no botton */}
            <article className="absolute text-justify bottom-0 mb-80 px-32">
                <p className="text-3xl">Assita agora:</p>
                <h2 className="text-6xl font-bold ">{title}</h2>
                <p className="mt-4 text-base">
                    Nota{''}
                    <Score value={vote_average} />
                </p>

                <div className="">
                    <button className="text-base mt-8 mr-2 py-2 px-8 rounded bg-black bg-opacity-50
                    hover:bg-black hover:text-red-600 transition-all 
                    duration-300 ease-in-out">
                        <FontAwesomeIcon icon={faPlay} />
                        Assistir
                    </button>

                    <button className="text-base py-2 px-8 rounded bg-black bg-opacity-50
                    hover:bg-black hover:text-red-600 transition-all 
                    duration-300 ease-in-out">
                        <FontAwesomeIcon icon={faPlus} />
                        Minha lista
                    </button>
                </div>
            </article>
        </header>
    )
}
export default Hero;