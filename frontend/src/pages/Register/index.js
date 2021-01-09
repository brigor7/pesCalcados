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
          <h1>Cadastro</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            ullam perspiciatis cum amet natus dignissimos nulla laboriosam autem
            tempore! Odio ratione perferendis pariatur necessitatibus incidunt!
            Atque facere iusto, quae excepturi optio necessitatibus dicta dolor
            sit porro perspiciatis dignissimos possimus quod!
          </p>
          <Link to="/">
            <FiArrowLeft size="16" color="#C32512" />
            Retornar para página principal
          </Link>
        </section>
        <form>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="Email" />
          <input placeholder="wathsapp" />

          <div className="input-group">
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
