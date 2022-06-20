import React from "react";
import Score from "./Score";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { Movie } from "../data/mock";
import './Poster.css';

const Poster = ({ cover, title, score }: Movie, index: number) => (  /*desestruturação cover e title. Tipos criados dentro do array de objetos em mock*/
    <article className="relative mt-0 transition-all duration-500 ease-in-out transform hover:scale-110 hover:z-10" key={index}> {/*index esta ai para numerar os covers, ou imagem dos filmes. Para nao ter erro no console log*/}
        <div className="cursor-pointer poster absolute inset-0 w-full h-full grid place-items-center bg-black bg-opacity-75 transition-all duration-500 ease-in-out opacity-0">
            <FontAwesomeIcon icon={faPlayCircle} size="5x" />
            <h2 className="text-2xl">{title}</h2>
            <Score value={score} />

        </div>
        <img src={cover} alt={title} />
    </article>

);

export default Poster;
