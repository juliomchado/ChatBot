import React from 'react'

import './ResetConfirm.css'
import { Animated } from 'react-animated-css'
import ResetPasswordImg from '../../imgs/ResetPasswordImg.svg'


export default ResetConfirm => {
    return (
        <div className="container-reset">
            <img src={ResetPasswordImg} alt="Login" className="img-confirm" />
            <div className="position-icon">
            </div>
            <div className="messege-container">
                <Animated className="animated" animationIn="bounceInLeft" isVisible={true} animationInDelay={1}>
                    <h1 className="email-messege">Email enviado para j***12**@**mail.com.br com sucesso!</h1>
                </Animated>
                <Animated className="animated" animationIn="bounceInLeft" isVisible={true} animationInDelay={1}>
                    <h2 className="verify-messege">Verifique a caixa de spam e a lixeira do seu email!</h2>
                </Animated>
            </div>
        </div>
    )
}