import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./Login.css";
import ImgLogin from "../../imgs/ImageLogin.svg";
import { Animated } from "react-animated-css";

import api from "../../service/api";

export default (Login) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  

  async function handleSubmit(event) {
    event.preventDefault();

    try {
     
      const response = await api.post("/session", { email, password });

      if(response.status !== 200 || !response.data) throw new Error();

      localStorage.setItem('token', response.data.token);
      history.push('/main');
      
    } catch (error) {
        console.log(error);
        alert('login invalido, tente novamente');
    }

    
  }
  return (
    <div className="container">
      <img src={ImgLogin} alt="Login" className="img-login" />
      <form onSubmit={handleSubmit} className="input-container">
        <Animated
          className="animated"
          animationIn="fadeIn"
          isVisible={true}
          animationInDelay={1}
        >
          <h1 className="welcome">Bem Vindo!</h1>
        </Animated>

        {/* Animated label and input Email */}
        <Animated
          className="animated"
          animationIn="bounceInRight"
          isVisible={true}
          animationInDelay={1}
        >
          <label htmlFor="Login">Email</label>
        </Animated>
        <Animated
          className="animated"
          animationIn="bounceInRight"
          isVisible={true}
          animationInDelay={1}
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="input"
            placeholder="Digite seu email..."
          />
        </Animated>

        {/* Animated label and input Senha */}
        <Animated
          className="animated"
          animationIn="bounceInRight"
          isVisible={true}
          animationInDelay={1}
        >
          <label htmlFor="Login">Senha</label>
        </Animated>
        <Animated
          className="animated"
          animationIn="bounceInRight"
          isVisible={true}
          animationInDelay={1}
        >
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="input"
            placeholder="Digite sua senha..."
          />
        </Animated>

        {/* Animated button */}
        <Animated
          className="animated"
          animationIn="bounceInRight"
          isVisible={true}
          animationInDelay={1}
        >
          <button className="button">Faça Login</button>
        </Animated>
        <Animated
          className="animated"
          animationIn="bounceInRight"
          isVisible={true}
          animationInDelay={1}
        >
          <div className="register-reset">
            <Link className="reset-password" to="/reset">
              Esqueci a senha
            </Link>
            <Link className="register" to="/register">
              Não tenho cadastro
            </Link>
          </div>
        </Animated>
      </form>
    </div>
  );
};
