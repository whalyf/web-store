import React from 'react'
import {useHistory} from 'react-router-dom'

import Slider from '../../components/Slider/index'

import './styles.css'

import Header from '../../components/Header/Header'
import imgVest from '../../assets/vestuario.png'
import imgCalc from '../../assets/calcado.png'
import vestuario from '../Produtos/Vestuario/'
import calcado from '../Produtos/Calcado/'




export default function Home(){
    const history = useHistory()


    function handleSelectVestuario(id){
        console.log(id)
        history.push('Vestuario/',id)
    }
    
    function handleSelectCalcado(id){
        console.log(id)
        history.push('Calcado/',id)
    }



    return(
        <div className="page">
            <Header/>
            <Slider/>

            <section className="produtos">
                <div className="categorias">
                    <div className="vestuario">
                        <h2 className="titulos">VESTUÁRIO</h2> 
                        <img src={imgVest} alt="camisas"></img>
                        <ul>
                            <li><a className="button" href={vestuario} target="_blank" rel="noreferrer" onClick={()=>handleSelectVestuario(1)}>P</a></li>
                            <li><a className="button" href={vestuario} target="_blank" rel="noreferrer" onClick={()=>handleSelectVestuario(2)}>M</a></li>
                            <li><a className="button" href={vestuario} target="_blank" rel="noreferrer" onClick={()=>handleSelectVestuario(3)}>G</a></li>
                            <li><a className="button" href={vestuario} target="_blank" rel="noreferrer" onClick={()=>handleSelectVestuario(4)}>GG</a></li>
                        </ul>
                    </div>

                    <div className="calcado">
                        <h2 className="titulos">CALÇADOS</h2>
                        <img src={imgCalc} alt="tenis"></img>
                        <ul>
                            <li><a className="button" href={calcado} target="_blank" rel="noreferrer"onClick={()=>handleSelectCalcado(1)}>35</a></li>
                            <li><a className="button" href={calcado} target="_blank" rel="noreferrer"onClick={()=>handleSelectCalcado(2)}>37</a></li>
                            <li><a className="button" href={calcado} target="_blank" rel="noreferrer"onClick={()=>handleSelectCalcado(3)}>40</a></li>
                            <li><a className="button" href={calcado} target="_blank" rel="noreferrer"onClick={()=>handleSelectCalcado(4)}>41</a></li>
                        </ul>
                    </div>
                </div>

            </section>

        </div>
    )
}