import React, { useState } from 'react';
import axios from 'axios';
import styles from './AlterarFilme.module.css';

const AlterarFilme = () => {
  const [id, setId] = useState('');
  const [filme, setFilme] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const buscarFilme = () => {
    axios.get(`https://671902fb7fc4c5ff8f4c185f.mockapi.io/filmes/${id}`)
      .then(response => {
        setFilme(response.data);
        setMensagem('');
      })
      .catch(error => {
        console.error("Erro ao buscar o filme: ", error);
        setMensagem('Filme não encontrado!');
        setFilme(null);
      });
  };

  const handleAlterar = (e) => {
    e.preventDefault();
    axios.put(`https://671902fb7fc4c5ff8f4c185f.mockapi.io/filmes/${id}`, filme)
      .then(response => {
        setMensagem('Filme alterado com sucesso!');
      })
      .catch(error => {
        console.error("Erro ao alterar o filme: ", error);
        setMensagem('Erro ao alterar o filme.');
      });
  };

  const handleInputChange = (e) => {
    setFilme({ ...filme, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Alterar Filme</h1>
      <div className={styles.formGroup}>
        <label htmlFor="id">ID do Filme:</label>
        <input 
          type="text" 
          id="id" 
          value={id} 
          onChange={(e) => setId(e.target.value)} 
          required 
        />
        <button onClick={buscarFilme} className={styles.button}>Buscar Filme</button>
      </div>

      {filme && (
        <form onSubmit={handleAlterar} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="titulo">Título:</label>
            <input 
              type="text" 
              name="titulo" 
              value={filme.nome} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="ano">Ano:</label>
            <input 
              type="text" 
              name="ano" 
              value={filme.ano} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="genero">Gênero:</label>
            <input 
              type="text" 
              name="genero" 
              value={filme.genero} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <button type="submit" className={styles.button}>Alterar Filme</button>
        </form>
      )}

      {mensagem && <p className={styles.mensagem}>{mensagem}</p>}
    </div>
  );
};

export default AlterarFilme;