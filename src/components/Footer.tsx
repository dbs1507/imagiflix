import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import './Footer.css'


const Footer = () => {

    const today = new Date;

    return (
        <footer className="text-footer bg-neutral-900">
            <div className="text-justify px-24 pt-36">
                <a className="hover:text-white" href="https://www.facebook.com/" target='blank'><FontAwesomeIcon className="mx-2" icon={faFacebook} size='3x' color="" /></a>
                <a className="hover:text-white" href="https://www.twitter.com/" target='blank'><FontAwesomeIcon className="mx-2" icon={faTwitter} size='3x' /></a>
                <a className="hover:text-white" href="https://www.instagram.com/" target='blank'><FontAwesomeIcon className="mx-2" icon={faInstagram} size='3x' /></a>
                <a className="hover:text-white" href="https://www.youtube.com/" target='blank'><FontAwesomeIcon className="mx-2" icon={faYoutube} size='3x' /></a>
            </div>

            <div className="grid grid-cols-4 mt-10 text-justify px-28 leading-9 text-center">
                <a className="hover:text-white" href="#" > Idiomas e legendas</a>
                <a className="hover:text-white" href="#" > Audiodescrisão</a>
                <a className="hover:text-white" href="#" > Centro de ajudas</a>
                <a className="hover:text-white" href="#" > Cartão pré-pago</a>
                <a className="hover:text-white" href="#" > Imprensa</a>
                <a className="hover:text-white" href="#" > relação com investidores</a>
                <a className="hover:text-white" href="#" > Carreiras </a>
                <a className="hover:text-white" href="#" > Termos de uso </a>
                <a className="hover:text-white" href="#" > Privacidade </a>
                <a className="hover:text-white" href="#" > Avisos legais </a>
                <a className="hover:text-white" href="#" > Preferências de cookies </a>
                <a className="hover:text-white" href="#" > Informações corporativas</a>
                <a className="hover:text-white" href="#" > Entre em contato </a>
            </div >
            <p className="text-justify px-28 mt-10 text-sm pb-5">© 1997 - {today.getFullYear()} Imagiflix, Inc.</p>
        </footer >

    )
}

export default Footer;