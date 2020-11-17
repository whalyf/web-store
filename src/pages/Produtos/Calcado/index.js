import React from 'react'

import './styles.css'

import Header from '../../../components/Header/Header'



export default function Vestuario(val){
    console.log('VALOR DA SELECAO:', val.location.state)
    const tamanho = val.location.state
    const pvalor = 22.5
/*     const mvalor = 25.5
    const gvalor = 28.5
    const ggvalor = 32.5 */

    if(tamanho === 1){
        return(
            <div>
                <Header/>
                <div className="vitrine">
                    <h1 className="title">TAMANHO 35</h1>
                    <ul>
                        <li>
                            <img src="/imagens/tenis/IMG_3054.jpg" alt="tenis"/>
                            <text>Nome: TENIS TAMANHO 35</text>
                            <text>Valor: R$ {pvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/tenis/IMG_3055.jpg" alt="tenis"/>
                            <text>Nome: TENIS TAMANHO 35</text>
                            <text>Valor: R$ {pvalor}</text>
                        </li>
                    </ul>   
                </div>
            </div>    

        )
    }
    else{    
        return(
            <div className="vazio">
                <Header></Header>
                <h1 className="vitrine title">Não há produtos nessa categoria</h1>
            </div>
        )
    }
}