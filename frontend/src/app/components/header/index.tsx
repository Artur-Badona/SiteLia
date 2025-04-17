import { ArrowDown } from '@phosphor-icons/react/dist/ssr';
import styles from './style.module.css'
import { useState, useEffect } from "react";

export function Header() {
  {
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 100)
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <header id="header" className={styles.header}>
        <div id={styles.header_nav} className={`${scrolled ? styles.scrolled : ''}`}>
          <p className={`${styles.nav_text} ${scrolled ? styles.scrolled : ''}`}><a id={styles.nav_logo} href="#header">LIA²</a></p>
          <nav className={`${styles.nav_text} ${scrolled ? styles.scrolled : ''}`}>
            <a href="#about">Sobre</a>
            <a href="#projects">Projetos</a>
            <a href="#members">Membros</a>
            <a href="#contact">Contato</a>
          </nav>
        </div>

        <div id={styles.thumb}>
          <div id={styles.thumb_text}>
            <h1>Laboratório de Inteligência<br />Artificial Aplicada</h1>
            <p>Descubra o poder da Inteligência Artificial aplicada para otimizar processos e impulsionar
              decisões<br />estratégicas. Torne sua empresa mais ágil, inteligente e competitiva.
            </p>
            <a href="#contact">Entre em Contato!</a>
          </div>

          <div id={styles.thumb_more}>
            <a href="#about"><p>Ver mais</p></a>
            <a href="#about"><ArrowDown id={styles.thumb_arrow} size={48} color='#E1F3FD' weight='bold' /></a>
          </div>
        </div>
      </header>
    );
  }
}