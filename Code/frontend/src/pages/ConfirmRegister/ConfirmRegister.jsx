import React from 'react'
import { Link } from 'react-router-dom'
import { Animated } from 'react-animated-css'

import ImgConfirm from '../../imgs/Confirm.svg'
import './ConfirmRegister.css'

export default ConfirmRegister => {
    return (
        <div className="container-confirm">
            <img src={ImgConfirm} alt="Login" className="img-confirm" />
        <div className="position-icon">
        </div>
        <div className="messege-container">
            <Animated className="animated" animationIn="fadeIn" isVisible={true} animationInDelay={1}>
                <h1>Cadastro enviado com sucesso!</h1>
            </Animated>
            <Animated className="animated" animationIn="bounceInLeft" isVisible={true} animationInDelay={1}>
                <h2>Vamos enviar um email para seuemail@hotmail.com quando seu cadastro for confirmado</h2>
            </Animated>
            <Animated className="animated" animationIn="bounceInLeft" isVisible={true} animationInDelay={1}>
                <h3>Verifique a caixa de spam e a lixeira do seu email!</h3>
            </Animated>
            <Link to="/">
            <Animated className="animated" animationIn="bounceInUp" isVisible={true} animationInDelay={1}>
                <button className="confirm-button">Ok</button>
            </Animated>
            </Link>
        </div>
    </div>
    )
}