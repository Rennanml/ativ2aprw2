import React, { useState } from 'react';
import axios from 'axios';
import styles from './AdicionarFilme.module.css';
import { useNavigate } from 'react-router-dom';

const AdicionarFilme = () => {
  const [nome, setNome] = useState('');
  const [ano, setAno] = useState('');
  const [genero, setGenero] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoFilme = {
      nome,
      ano,
      genero
    };

    axios.post('https://671902fb7fc4c5ff8f4c185f.mockapi.io/filmes', novoFilme)
      .then(response => {
        console.log("Filme cadastrado:", response.data);
        setMensagem("Filme cadastrado com sucesso!");
        setNome('');
        setAno('');
        setGenero('');
      })
      .catch(error => {
        console.error("Erro ao cadastrar o filme: ", error);
        setMensagem("Erro ao cadastrar o filme. Tente novamente.");
      });
  };

  const handleClearForm = () => {
    setNome('');
    setAno('');
    setGenero('');
    setMensagem('');
  };

  const navigate = useNavigate();

  const handlePagInicial = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Cadastrar Novo Filme</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="nome">Título:</label>
          <input 
            type="text" 
            id="nome" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            required 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="ano">Ano:</label>
          <input 
            type="text" 
            id="ano" 
            value={ano} 
            onChange={(e) => setAno(e.target.value)} 
            required 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="genero">Gênero:</label>
          <input 
            type="text" 
            id="genero" 
            value={genero} 
            onChange={(e) => setGenero(e.target.value)} 
            required 
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <button type="submit" className={`${styles.button} ${styles.button}`}>Cadastrar Filme</button>
          <button type="button" onClick={handleClearForm} className={`${styles.button} ${styles.buttonClear}`}>Limpar Formulário</button>
          <button type="button" onClick={handlePagInicial} className={`${styles.button} ${styles.buttonVoltar}`}>Página Inicial</button>
        </div>
      </form>
      {mensagem && <p className={styles.mensagem}>{mensagem}</p>}
    </div>
  );
};

export default AdicionarFilme;
