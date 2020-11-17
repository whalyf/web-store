import React from 'react'

import './styles.css'

import Header from '../../../components/Header/Header'


export default function Vestuario(val){
    console.log('VALOR DA SELECAO:', val.location.state)
    const tamanho = val.location.state
    const pvalor = 22.5
    const mvalor = 25.5
    const gvalor = 28.5
    const ggvalor = 32.5
//-------------------------------------------------------------------------


//-------------------------------------------------------------------------   
    if(tamanho === 1){
        return(
            <div>
            <Header/>
            <div className="vitrine">
                <h1 className="title">TAMANHO P</h1>
                <ul>
                    <li>
                        <img src="/imagens/camisas-p/IMG_2934.jpg" alt="camisas"/>
                        <text>Nome: CAMISETA TAMANHO P</text>
                        <text>Valor: {pvalor}</text>
                    </li>
                    <li>
                        <img src="/imagens/camisas-p/IMG_2951.jpg" alt="camisas"/>
                        <text>Nome: CAMISETA TAMANHO P</text>
                        <text>Valor: {pvalor}</text>
                    </li>
                    <li>
                        <img src="/imagens/camisas-p/IMG_2952.jpg" alt="camisas"/>
                        <text>Nome: CAMISETA TAMANHO P</text>
                        <text>Valor: {pvalor}</text>
                    </li>
                    <li>
                        <img src="/imagens/camisas-p/IMG_2953.jpg" alt="camisas"/>
                        <text>Nome: CAMISETA TAMANHO P</text>
                        <text>Valor: {pvalor}</text>
                    </li>
                    <li>
                        <img src="/imagens/camisas-p/IMG_2955.jpg" alt="camisas"/>
                        <text>Nome: CAMISETA TAMANHO P</text>
                        <text>Valor: {pvalor}</text>
                    </li>
                    <li>
                        <img src="/imagens/camisas-p/IMG_2956.jpg" alt="camisas"/>
                        <text>Nome: CAMISETA TAMANHO P</text>
                        <text>Valor: {pvalor}</text>
                    </li>
                    <li>
                        <img src="/imagens/camisas-p/IMG_2957.jpg" alt="camisas"/>
                        <text>Nome: CAMISETA TAMANHO P</text>
                        <text>Valor: {pvalor}</text>
                    </li>
                    <li>
                        <img src="/imagens/camisas-p/IMG_2959.jpg" alt="camisas"/>
                        <text>Nome: CAMISETA TAMANHO P</text>
                        <text>Valor: {pvalor}</text>
                    </li>
                    <li>
                        <img src="/imagens/camisas-p/IMG_2960.jpg" alt="camisas"/>
                        <text>Nome: CAMISETA TAMANHO P</text>
                        <text>Valor: {pvalor}</text>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
    else
    if(tamanho === 2){
        return(
            <div>
                <Header/>
                <div className="vitrine">
                    <h1 className="title">TAMANHO M</h1>
                    <ul>
                        <li>
                            <img src="/imagens/camisas-m/IMG_2853.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO M</text>
                            <text>Valor: {mvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-m/IMG_2858.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO M</text>
                            <text>Valor: {mvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-m/IMG_2883.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO M</text>
                            <text>Valor: {mvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-m/IMG_2907.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO M</text>
                            <text>Valor: {mvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-m/IMG_2908.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO M</text>
                            <text>Valor: {mvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-m/IMG_2913.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO M</text>
                            <text>Valor: {mvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-m/IMG_2929.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO M</text>
                            <text>Valor: {mvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-m/IMG_2932.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO M</text>
                            <text>Valor: {mvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-m/IMG_2954.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO M</text>
                            <text>Valor: {mvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-m/IMG_2958.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO M</text>
                            <text>Valor: {mvalor}</text>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
    else
    if(tamanho === 3){
        return(
            <div>
                <Header/>
                <div className="vitrine">
                    <h1 className="title">TAMANHO G</h1>
                    <ul>
                        <li>
                            <img src="/imagens/camisas-g/IMG_2846.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO G</text>
                            <text>Valor: {gvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-g/IMG_2847.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO G</text>
                            <text>Valor: {gvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-g/IMG_2858.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO G</text>
                            <text>Valor: {gvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-g/IMG_2859.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO G</text>
                            <text>Valor: {gvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-g/IMG_2889.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO G</text>
                            <text>Valor: {gvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-g/IMG_2891.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO G</text>
                            <text>Valor: {gvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-g/IMG_2893.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO G</text>
                            <text>Valor: {gvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-g/IMG_2894.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO G</text>
                            <text>Valor: {gvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-g/IMG_2895.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO G</text>
                            <text>Valor: {gvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-g/IMG_2917.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO G</text>
                            <text>Valor: {gvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-g/IMG_2923.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO G</text>
                            <text>Valor: {gvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-g/IMG_2924.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO G</text>
                            <text>Valor: {gvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-g/IMG_2926.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO G</text>
                            <text>Valor: {gvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-g/IMG_2927.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO G</text>
                            <text>Valor: {gvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-g/IMG_2928.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO G</text>
                            <text>Valor: {gvalor}</text>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
    else
    if(tamanho===4){
        return(
            <div>
                <Header/>
                <div className="vitrine">
                    <h1 className="title">TAMANHO GG</h1>
                    <ul>
                        <li>
                            <img src="/imagens/camisas-gg/IMG_2859.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO GG</text>
                            <text>Valor: {ggvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-gg/IMG_2866.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO GG</text>
                            <text>Valor: {ggvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-gg/IMG_2870.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO GG</text>
                            <text>Valor: {ggvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-gg/IMG_2873.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO GG</text>
                            <text>Valor: {ggvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-gg/IMG_2878.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO GG</text>
                            <text>Valor: {ggvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-gg/IMG_2886.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO GG</text>
                            <text>Valor: {ggvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-gg/IMG_2887.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO GG</text>
                            <text>Valor: {ggvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-gg/IMG_2891.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO GG</text>
                            <text>Valor: {ggvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-gg/IMG_2892.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO GG</text>
                            <text>Valor: {ggvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-gg/IMG_2896.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO GG</text>
                            <text>Valor: {ggvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-gg/IMG_2897.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO GG</text>
                            <text>Valor: {ggvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-gg/IMG_2899.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO GG</text>
                            <text>Valor: {ggvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-gg/IMG_2919.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO GG</text>
                            <text>Valor: {ggvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-gg/IMG_2920.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO GG</text>
                            <text>Valor: {ggvalor}</text>
                        </li>
                        <li>
                            <img src="/imagens/camisas-gg/IMG_2921.jpg" alt="camisas"/>
                            <text>Nome: CAMISETA TAMANHO GG</text>
                            <text>Valor: {ggvalor}</text>
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