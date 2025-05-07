'use client';

import styles from './style.module.css'
import { useState, useEffect } from "react";
import { HandleNav } from './handleNav';

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
        <div id={styles.header_bar} className={`${scrolled ? styles.scrolled : ''}`}>
          <HandleNav to="header" className={`${styles.nav_logo_link} ${scrolled ? styles.scrolled : ''}`}>LIA²</HandleNav>
          <nav className={`${styles.navigation} ${scrolled ? styles.scrolled : ''}`}>
            <HandleNav to="about" className={`${scrolled ? styles.scrolled : ''} ${styles.nav_button}`}>Sobre</HandleNav>
            <HandleNav to="projects" className={`${scrolled ? styles.scrolled : ''} ${styles.nav_button}`}>Projetos</HandleNav>
            <HandleNav to="members" className={`${scrolled ? styles.scrolled : ''} ${styles.nav_button}`}>Membros</HandleNav>
            <HandleNav to="contact" className={`${scrolled ? styles.scrolled : ''} ${styles.nav_button}`}>Contato</HandleNav>
          </nav>
        </div>

        <div id={styles.thumb}>
          <div id={styles.thumb_text}>
            <h1>Laboratório de Inteligência Artificial Aplicada</h1>
            <p>Descubra o poder da Inteligência Artificial aplicada para otimizar processos e impulsionar
              decisões estratégicas. Torne sua empresa mais ágil, inteligente e competitiva.
            </p>
            <HandleNav to="contact" className="thumb_contact">Entre em Contato!</HandleNav>
          </div>

          <HandleNav to="about" className={styles.thumb_more}>
            <p>Ver mais</p>
            <img id={styles.thumb_arrow} src="arrow.svg" alt="arrow" />
          </HandleNav>
        </div>
      </header>
    );
  }
}