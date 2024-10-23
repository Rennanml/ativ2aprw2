import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Aplicação de filmes por Rennan Marcile Lazarini em homenagem às lendas Carlão e Azdrubal.</p>
    </footer>
  );
};

export default Footer;