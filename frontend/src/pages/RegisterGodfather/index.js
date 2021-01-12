import React, { useState } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import './style.css';

export default function Register() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [sexo, setSexo] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telefone, setTelefone] = useState('');
  const [avatar, setAvatar] = useState('');

  const history = useHistory();

  async function handleRegisterGodfhater(e) {
    e.preventDefault();
    const data = {
      nome,
      sobrenome,
      sexo,
      email,
      telefone,
      password,
      nascimento,
      avatar,
    };

    try {
      await api.post('godfathers', data);
      alert('Padrinho criado com sucesso');
      history.push('/');
    } catch (error) {
      console.error('Erro ao criar Padrinho: ', error);
    }
  }

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
        <form onSubmit={handleRegisterGodfhater}>
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
          />
          <input
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            placeholder="Sobrenome"
          />
          <input
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
            placeholder="Sexo"
          />
          <label htmlFor="nascimento">Nascimento</label>
          <input
            type="date"
            value={nascimento}
            onChange={(e) => setNascimento(e.target.value)}
            placeholder="nascimento"
            id="nascimento"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="telefone"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
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
