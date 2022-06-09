import React from "react";
import Slick from 'react-slick';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import mockdata, { Movie } from "../data/mock"; /*Movie é uma interface criada em mock usada para tipagem. La tem o tipo de cover, title e score */

interface CarouselData { /*interface criada para tipagem do title do carrosel e de data, que recebe a tipagem do array de objetos Movie[] criado em mock como const mockdata*/
    title?: string;
    data?: Movie[];
}

const Poster = ({ cover, title }: Movie, index: number) => (  /*desestruturação cover e title. Tipos criados dentro do array de objetos em mock*/
    <article key={index}> {/*index esta ai para numerar os covers, ou imagem dos filmes. Para nao ter erro no console log*/}
        <img src={cover} alt={title} />
    </article>

);

const Carousel = ({ title = 'Filmes em destaque', data = mockdata }: CarouselData) => { /*data recebe mockdata, que é variavel criada dentro do arquivo mock, que contem o array de objetos com o a imagem do filme, e seu nome title esta ligado ao <h2> da pagina, que nada mais é q o título acima do carrosel */

    enum Direction {
        left,
        right,
    }

    {/*funcao traz novos icones para o carrosel do fontawesome, nele temos direction, que recebe o enum Direction, que é responsavel pormudar a direçao. Nele temos duas propriedades de direção, que sao relacionadas aos icones por meio de direction ? 'right-0' : 'left-0', que pega as propriedades do enum e passa para o direction, e em direction ? faChevronRight : faChevronLeft onde é relacionado os icones com a funcionalidade em direction que vem do enum Direction*/ }
    const SlickArrow = ({ direction, onClick }: { direction: Direction, onClick?: any }) => (
        <button type="button" className={`absolute w-16 h-full z-10 bg-black bg-opacity-50 top-0 ${direction ? 'right-0' : 'left-0'}`} onClick={onClick}>
            <FontAwesomeIcon icon={direction ? faChevronRight : faChevronLeft} size='3x' />
        </button>
    )

    const options = { /*propriedades do carrosel */
        Infinity: true,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: <SlickArrow direction={Direction.left} />, /*é passado para as propriedades do carrosel a funcao criada com o diretion apontando para o enum novamente */
        nextArrow: <SlickArrow direction={Direction.right} />,

    };

    return (  /*retorno da função. Retorna no h2 o title criado dentro de const Carousel; Slick recebe as propriedades do carrosel {...options}; data.map usa o array de obejetos criados em mock (ja que data = mockdata), usa o cover que foi criado e para cada cover retorna um index pra imagem, e o => faz com que tudo isso receba a variavel Poster criada la em cima, que contem o <img> com as imagens dentro, juntamente com o alt que recebe o title. Tudo é possivel graças ao array de objetos criado em mock. A partir dele, o map pode ser feito */
        <section>
            <h2 className="text-left relative z-10 text-xl font-bold pl-32 mb-4">{title}</h2>
            <Slick className="relative mb-8" {...options}>
                {data.map((cover, index) => Poster(cover, index))}
            </Slick>
        </section>

    );
}
export default Carousel;