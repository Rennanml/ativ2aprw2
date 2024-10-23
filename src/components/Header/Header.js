import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; 

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Minha Aplicação de Filmes</h1>
      <nav className={styles.nav}>
        <Link to="/">Início</Link>
        <Link to="/adicionar-filme">Cadastrar Filme</Link>
        <Link to="/alterar-filme">Alterar Filme</Link>
        <Link to="/apagar-filme">Apagar Filme</Link>
      </nav>
    </header>
  );
};

export default Header;