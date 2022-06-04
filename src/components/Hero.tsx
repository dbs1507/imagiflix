import React from "react";
import placeholder from '../assets/hero.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'

const Hero = ({ title = 'Avengers Endgame', score = 10 }) => {

    const getBorderColor = () => {
        if (score >= 7) {
            return "border-green-400";
        } else if (score < 4 && score > 7) {
            return "border-yellow-400"
        } else {
            return "border-red-400"
        }
    }
    return (
        <header className="relative min-h-screen">
            <img
                className="object-cover object-center h-full w-full"
                src={placeholder}
                alt='FIlme em destaque'
            />
            <article className="absolute text-justify bottom-0 mb-80 px-32">
                <p className="text-3xl">Assita agora:</p>
                <h2 className="text-6xl font-bold ">{title}</h2>
                <p className="mt-4 text-base">Nota{''}
                    <span
                        className={`mx-2 py-2 px-3 inline-block border-2 bg-black bg-opacity-75 rounded-full 
                        ${getBorderColor()}`}
                    >
                        {score}
                    </span>
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