import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import godfhaterImg from '../../assets/chuchu.jpg';
import './style.css';

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logomarca" />
          <h1>Madrinha/Padrinho</h1>
          <p>Dados informados no cadastro</p>
          <Link to="/">
            <FiArrowLeft size="16" color="#C32512" />
            Retornar para página principal
          </Link>
        </section>
        <form>
          <div className="children-avatar">
            <img src={godfhaterImg} alt="Imagem criança" />
          </div>
          <label id="nome">Nome: Vitoria Chuchu</label>
          <label id="sobrenome">Sobrenome: Chuchu</label>
          <label id="sexo">Sexo: Feminino</label>
          <label id="nascimento">Nascimento: 18/02/1980</label>
          <label id="e-mail">E-mail: chuchu.vitoria@email.com</label>
          <label id="wathsapp">Wathsapp: (61) 91234-56</label>

          <button className="button" type="submit">
            Alterar
          </button>
        </form>
      </div>
    </div>
  );
}
