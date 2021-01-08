import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import './style.css';
import logoImg from '../../assets/logo.svg';
import bgLogonImg from '../../assets/bgLogon.jpg';
import logoRenascerImg from '../../assets/logoRenascer.png';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="bgLogon">
        <img src={bgLogonImg} alt="background" />
      </section>
      <section className="logon">
        <div className="content">
          <div className="logoImg">
            <img src={logoImg} alt="logo pes calcados" />
          </div>
          <form>
            <h1>Faça o logon</h1>
            <input placeholder="Informe seu id" />
            <button class="button">Entrar</button>
            <a href="#">
              <FiLogIn size="16" color="#C32512" />
              Não tenho cadastro
            </a>
          </form>
        </div>
        <div className="footer">
          <img src={logoRenascerImg} alt="logo renascer" />
        </div>
      </section>
    </div>
  );
}
