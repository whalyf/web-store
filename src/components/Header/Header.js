import React from "react"

import './styles.css'

import logo from '../assets/logo.png'
import insta from '../assets/insta.svg'

const wpp = "https://api.whatsapp.com/send?1=pt_BR&phone=5577998091124"
const instagram = "https://www.instagram.com/oxe_toca_raul/"


export default function Header(){
    return(
        <div>
            <div className="container header">
                <a href="/"><img className="logo-loja" src={logo} alt="logoOxeTocaRaul"/></a>
                <div className="header-content">
                    <h1 className="title">Oxe, Toca Raul</h1>
                    <h3 className="subtitle">Vestuário Unissex</h3>
                    <a 
                        target="_blank" 
                        rel="noreferrer" 
                        className="insta" 
                        href={instagram}>
                        <img
                            src={insta} 
                            alt="instagram">
                        </img>
                    </a>

                </div>
                <div className="contato">
                    <a target="_blank" rel="noreferrer" className="button" href={wpp}>Comprar</a>
                </div>
            </div>



{/*             <div className="banner-area">
                <img src={banner} alt="banner"/>
            </div> */}

        </div>
    )
}
