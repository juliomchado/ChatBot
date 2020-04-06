import React from 'react'
import { Animated } from 'react-animated-css'
import { Link } from 'react-router-dom'

import './ResetPassword.css'
import ResetPasswordImg from '../../imgs/ResetPasswordImg.svg'
export default ResetPassword => {
    return (
        <div className="container-reset">
            <img src={ResetPasswordImg} alt="Login" className="img-reset" />
            <div className="messege-container">
                <Animated className="animated" animationIn="bounceInLeft" isVisible={true} animationInDelay={1}>
                    <label htmlFor="cpf" className="label-reset">Digite seu cpf/cnpj cadastrado</label>
                </Animated>
                <Animated className="animated" animationIn="bounceInLeft" isVisible={true} animationInDelay={1}>
                    <input className="input-reset" type="text" placeholder="Digite seu cpf/cnpj cadastrado..." />
                </Animated>
                <Animated className="animated" animationIn="bounceInLeft" isVisible={true} animationInDelay={1}>
                    <h2 className="messege-email">Vamos mandar uma mensagem para o email cadastrado nesse cpf/cnpj</h2>
                </Animated>

                <Link to="/resetConfirm">
                    <Animated className="animated" animationIn="bounceInUp" isVisible={true} animationInDelay={1}>
                        <button className="confirm-button">Enviar</button>
                    </Animated>
                </Link>
                <Animated className="animated" animationIn="bounceInUp" isVisible={true} animationInDelay={1}>
                    <Link to="/" className="back">Voltar ao login</Link>
                </Animated>
            </div>
        </div>
    )
}