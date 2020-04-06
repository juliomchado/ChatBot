import React from 'react'
import { Link } from 'react-router-dom'

import './Register.css'
import { Animated } from 'react-animated-css'
import ImgRegister from '../../imgs/ImageRegister.svg'
import { MdKeyboardBackspace as BackIcon } from 'react-icons/md'


export default Register => {
    return (
        <div className="container">
            <div className="position-icon">
                <Link className="back" to="/">
                    <BackIcon className="back-icon"> Voltar</BackIcon>
                Voltar
                </Link>
                <img src={ImgRegister} alt="Login" className="img-login" />
            </div>
            <div className="register-container">
                <Animated className="animated" animationIn="fadeIn" isVisible={true} animationInDelay={1}>
                    <h1 className="welcome-register">Bem Vindo!</h1>
                </Animated>
                <Animated className="animated" animationIn="fadeIn" isVisible={true} animationInDelay={1}>
                    <h2 className="register-free">Cadastre-se grátis</h2>
                </Animated>

                {/* Animated label and input Email */}
                <Animated className="animated" animationIn="bounceInRight" isVisible={true} animationInDelay={1}>
                    <label htmlFor="Login">Email</label>
                </Animated>
                <Animated className="animated" animationIn="bounceInRight" isVisible={true} animationInDelay={1}>
                    <input type="email" className="input" placeholder="Digite um email válido..." />
                </Animated>

                {/* Animated label and input Senha */}
                <Animated className="animated" animationIn="bounceInRight" isVisible={true} animationInDelay={1}>
                    <label htmlFor="Login">Senha</label>
                </Animated>
                <Animated className="animated" animationIn="bounceInRight" isVisible={true} animationInDelay={1}>
                    <input type="password" className="input" placeholder="Digite sua futura senha..." />
                </Animated>

                <Animated className="animated" animationIn="bounceInRight" isVisible={true} animationInDelay={1}>
                    <label htmlFor="form">Nome do comércio</label>
                </Animated>
                <Animated className="animated" animationIn="bounceInRight" isVisible={true} animationInDelay={1}>
                    <input type="text" className="input" placeholder="Nome do comércio..." />
                </Animated>

                <Animated className="animated" animationIn="bounceInRight" isVisible={true} animationInDelay={1}>
                    <label htmlFor="Login">CNPJ ou CPF</label>
                </Animated>
                <Animated className="animated" animationIn="bounceInRight" isVisible={true} animationInDelay={1}>
                    <input type="text" className="input" placeholder="Digite seu cnpj/cpf..." />
                </Animated>

                <Animated className="animated" animationIn="bounceInRight" isVisible={true} animationInDelay={1}>
                    <label htmlFor="Login">Selecione um segmento</label>
                </Animated>
                <Animated className="animated" animationIn="bounceInRight" isVisible={true} animationInDelay={1}>
                    <select className="input" name="Segmento">
                        <option></option>
                        <option value="1">Restaurante</option>
                        <option value="2">Mercado</option>
                        <option value="3">Sorveteria</option>
                        <option value="4">Super Mercado</option>
                    </select>

                </Animated>
                <Animated className="animated" animationIn="bounceInRight" isVisible={true} animationInDelay={1}>
                    <label htmlFor="Login">Whatsapp</label>
                </Animated>
                <Animated className="animated" animationIn="bounceInRight" isVisible={true} animationInDelay={1}>
                    <input type="number" className="input" placeholder="Numero whatsapp..." />
                </Animated>

                <Animated className="animated" animationIn="bounceInRight" isVisible={true} animationInDelay={1}>
                    <label htmlFor="Login">Telefone de contato</label>
                </Animated>
                <Animated className="animated" animationIn="bounceInRight" isVisible={true} animationInDelay={1}>
                    <input type="number" className="input" placeholder="Digite um telefone..." />
                </Animated>

                {/* Animated button */}
                <Link to="/confirm">
                <Animated className="animated" animationIn="bounceInRight" isVisible={true} animationInDelay={1}>
                    <button className="button">Cadastre-se</button>
                </Animated>
                </Link>
            </div>
        </div>

    )
}