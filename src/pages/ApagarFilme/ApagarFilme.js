import React, { useState } from 'react';
import axios from 'axios';
import styles from './ApagarFilme.module.css';
import { useNavigate } from 'react-router-dom';


const ApagarFilme = () => {
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

  const handleExcluir = () => {
    axios.delete(`https://671902fb7fc4c5ff8f4c185f.mockapi.io/filmes/${id}`)
      .then(response => {
        setMensagem('Filme excluído com sucesso!');
        setFilme(null);
      })
      .catch(error => {
        console.error("Erro ao excluir o filme: ", error);
        setMensagem('Erro ao excluir o filme.');
      });
  };


    const navigate = useNavigate();
  
    const handlePagInicial = () => {
      navigate('/');
    }

    const handleVoltar = () => {
      setId('');
      setFilme(null);
      setMensagem('');
      navigate('/apagar-filme');
    };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Excluir Filme</h1>
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
        <button onClick={handlePagInicial} className={styles.buttonVoltar}>Página Inicial</button>
      </div>

      {filme && (
        <div className={styles.filmeInfo}>
          <h2>{filme.nome}</h2>
          <p>Ano: {filme.ano}</p>
          <p>Gênero: {filme.genero}</p>
          <button onClick={handleExcluir} className={styles.buttonExcluir}>Excluir Filme</button>
          <p><button onClick={handleVoltar} className={styles.buttonVoltar}>Voltar</button></p>
        </div>
      )}

      {mensagem && <p className={styles.mensagem}>{mensagem}</p>}
    </div>
  );
};

export default ApagarFilme;