import React from 'react'
import { Link } from 'react-router-dom'


import './Login.css'
import ImgLogin from '../../imgs/ImageLogin.svg'
import { Animated } from "react-animated-css";


export default Login => {
    return (
        <div className="container">
            <img src={ImgLogin} alt="Login" className="img-login" />
            <div className="input-container">
                <Animated className="animated" animationIn="fadeIn" isVisible={true} animationInDelay={1}>
                    <h1 className="welcome">Bem Vindo!</h1>
                </Animated>

                {/* Animated label and input Email */}
                <Animated className="animated" animationIn="bounceInRight" isVisible={true} animationInDelay={1}>
                    <label htmlFor="Login">Email</label>
                </Animated>
                <Animated className="animated" animationIn="bounceInRight" isVisible={true} animationInDelay={1}>
                    <input type="email" className="input" placeholder="Digite seu email..." />
                </Animated>

                {/* Animated label and input Senha */}
                <Animated className="animated" animationIn="bounceInRight" isVisible={true} animationInDelay={1}>
                    <label htmlFor="Login">Senha</label>
                </Animated>
                <Animated className="animated" animationIn="bounceInRight" isVisible={true} animationInDelay={1}>
                    <input type="password" className="input" placeholder="Digite sua senha..." />
                </Animated>

                {/* Animated button */}
                <Animated className="animated" animationIn="bounceInRight" isVisible={true} animationInDelay={1}>
                    <button className="button">Faça Login</button>
                </Animated>
                <Animated className="animated" animationIn="bounceInRight" isVisible={true} animationInDelay={1}>
                    <div className="register-reset">
                        <Link className="reset-password" to="/reset">Esqueci a senha</Link>
                        <Link className="register" to="/register">Não tenho cadastro</Link>
                    </div>
                </Animated>
            </div>
        </div>
    )

}