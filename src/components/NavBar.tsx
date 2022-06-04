import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import logo from '../assets/imagiflix.png'
import placeholderUser from '../assets/user.jpg'
import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";



const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className="navbar absolute top-0 left-0 grid grid-cols-2 items-center w-full py-4 px-8">

            <div className="justify-self-start grid grid-cols-2 gap-4 items-center">
                <h1 className="hidden">Imagineflix</h1>
                <img src={logo} alt='Imagiflix' />

                <ul className="grid grid-flow-col gap-4">
                    <li className="font-bold">
                        <a href="#inicio">Início</a>
                    </li>
                    <li className="font-bold">
                        <a href="#filmes">Séries</a>
                    </li>
                    <li className="font-bold">
                        <a href="#series">Filmes</a>
                    </li>

                </ul>
            </div>




            <div className="justify-self-end flex justify-items-end items-center">
                <form className="relative">
                    <input className="w-64 w-100 bg-black border border-white rounded py-1 px-3 transition-all 
                duration-300 ease-in-out opacity-0 hover:opacity-100 focus:opacity-100" type='text'
                        placeholder="Títulos, gente e gêneros" />   {/*preventDefault preveni q o botao search carregue a pagina, e ao clicar so responda com a caixa de pesquisa */}
                    <button className="absolute right-2 py-1 px-2" onClick={(e: { preventDefault: () => any; }) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
                <div className="relative flex px-4">
                    <img src={placeholderUser} alt='Foto do usuário' onClick={handleClick} />
                    <button onClick={handleClick} className="ml-2">
                        <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                    <ul className={`text-justify absolute mt-10 right-0 w-32 bg-black border-rounded p-4 transition-all  
                    duration-500 ease-in-out ${!isMenuOpen && `opacity-0 visibility-hidden`} `}> {/* {!isMenuOpen && `hidden opacity-0`} aplica as propriedades de estilo juntamente com o use*/}
                        <li><a href="#account">
                        </a>Minha conta
                        </li>

                        <li><a href="#logout">
                        </a>Sair
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default NavBar;