import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import childrenImg from '../../assets/carambola.jpg';
import './style.css';

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logomarca" />
          <h1>Criança</h1>
          <p>Dados informados no cadastro</p>
          <Link to="/">
            <FiArrowLeft size="16" color="#C32512" />
            Retornar para página principal
          </Link>
        </section>
        <form>
          <div className="children-avatar">
            <img src={childrenImg} alt="Imagem criança" />
          </div>
          <label id="nome">Nome: Maria Carambola</label>
          <label id="sobrenome">Sobrenome: Carambola</label>
          <label id="sexo">Sexo: Feminino</label>
          <label id="nascimento">Nascimento: 15/02/2002</label>
          <label id="responsavel">
            Responsavel: Ana Maria Carambola e Jose Carambola
          </label>

          <button className="button" type="submit">
            Alterar
          </button>
        </form>
      </div>
    </div>
  );
}
