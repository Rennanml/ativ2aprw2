import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Inicio.module.css';
import { Link } from 'react-router-dom';

const Inicio = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    axios.get('https://671902fb7fc4c5ff8f4c185f.mockapi.io/filmes')
      .then(response => {
        setFilmes(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar os filmes: ", error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Filmes Cadastrados</h1>

      {filmes.length > 0 ? (
        <ul className={styles.filmeList}>
          {filmes.map(filme => (
            <li key={filme.id} className={styles.filmeItem}>
              <h2>{filme.nome}</h2>
              <p><strong>id:</strong> {filme.id}</p>
              <p><strong>Ano de Lançamento:</strong> {filme.ano}</p>
              <p><strong>Gênero:</strong> {filme.genero}</p>
              <Link to={`/ver-filme/${filme.id}`}>Ver Detalhes</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.paragraph}>Nenhum filme cadastrado.</p>
      )}
    </div>
  );
};

export default Inicio;
