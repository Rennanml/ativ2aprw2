import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './VerFilme.module.css';
import { useNavigate } from 'react-router-dom';

const VerFilme = () => {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    axios.get(`https://671902fb7fc4c5ff8f4c185f.mockapi.io/filmes/${id}`)
      .then(response => {
        setFilme(response.data);
        setMensagem('');
      })
      .catch(error => {
        console.error("Erro ao buscar o filme: ", error);
        setMensagem('Erro ao carregar o filme.');
      });
  }, [id]);

  const navigate = useNavigate();

  const handlePagInicial = () => {
    navigate('/');
  }

  return (
    <div className={styles.container}>
      {filme ? (
        <>
          <h1 className={styles.heading}>{filme.nome}</h1>
          <p><strong>Ano:</strong> {filme.ano}</p>
          <p><strong>Gênero:</strong> {filme.genero}</p>
          <button onClick={handlePagInicial} className={styles.buttonVoltar}>Página Inicial</button>
        </>
      ) : (
        <p className={styles.mensagem}>{mensagem || 'Carregando...'}</p>
      )}
    </div>
  );
};

export default VerFilme;