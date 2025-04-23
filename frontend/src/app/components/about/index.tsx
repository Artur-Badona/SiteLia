import styles from './style.module.css'
import Image from 'next/image';

export function About() {
    return (
        <div className={styles.about_main}>
            <div id={styles.image_wrapper}>
                <div id={styles.about_image}></div>
            </div>
            <div className={styles.about_text}>
                <div className={` ${styles.about_title}`}>
                    <h1>Sobre nós</h1>
                    <h2>LIA²</h2>
                </div>
                <div className={` ${styles.about_content}`}>
                    <p>No Laboratório de Inteligência Artificial Aplicada, acreditamos no poder da tecnologia para
                        transformar negócios e solucionar desafios complexos. Nosso time de <span>especialistas em
                        IA</span> e ciência de dados trabalha com uma abordagem prática e personalizada, ajudando
                        empresas a explorar o potencial da <span>Inteligência Artificial</span> para inovar, otimizar
                        processos e alcançar resultados excepcionais.</p>
                </div>
            </div>
        </div>
    );
}