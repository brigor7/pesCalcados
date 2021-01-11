import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import './style.css';

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logomarca" />
          <h1>
            Cadastro <br /> Madrinha/Padrinho
          </h1>
          <p>
            Madrinha/Padrinho, informe seus dados ao lado para realizar o seu
            cadastro.
          </p>
          <Link to="/">
            <FiArrowLeft size="16" color="#C32512" />
            Retornar para página principal
          </Link>
        </section>
        <form>
          <input placeholder="Nome" />
          <input placeholder="Sobrenome" />
          <input placeholder="Sexo" />
          <label htmlFor="nascimento">Nascimento</label>
          <input type="date" placeholder="nascimento" id="nascimento" />
          <input type="email" placeholder="Email" />
          <input placeholder="wathsapp" />
          <label htmlFor="avatar">Avatar</label>
          <input type="file" name="avatar" id="avatar" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
