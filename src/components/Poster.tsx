import React from "react";
import CONST from "../data/constants";
import Score from "./Score";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { Movie } from "../data/mock";
import './Poster.css';

const Poster = ({ cover, poster_path, title, name, vote_average }: Movie, index: number) => {
    const { IMAGEURL } = CONST

    return (  /*desestruturação poster_path e title. Tipos criados dentro do array de objetos em mock*/
        <article className="relative mt-0 transition-all duration-500 ease-in-out transform hover:scale-110 hover:z-10" key={index}>
            <img src={poster_path ? `${IMAGEURL}/w200/${poster_path}` : cover} alt={title} /> {/*index esta ai para numerar os poster_paths, ou imagem dos filmes. Para nao ter erro no console log*/}
            <div className="cursor-pointer poster absolute inset-0 w-full h-full grid place-items-center text-center bg-black bg-opacity-75 transition-all duration-500 ease-in-out opacity-0">
                <FontAwesomeIcon icon={faPlayCircle} size="5x" />
                <h2 className="text-2xl">{title ? title : name}</h2>
                <Score value={vote_average} />

            </div>

        </article>

    )
};

export default Poster;
