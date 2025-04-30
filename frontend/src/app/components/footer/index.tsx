import { ContactForm } from '../contact_form';
import styles from './style.module.css';

export function Footer() {

    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.contact_sec}>
                <div id={styles.contact_text}>
                    <h1>Entrar em contato</h1>
                    <p>Caso precise de mais informações ou tenha alguma dúvida, não hesite em entrar em contato. Estamos à disposição para ajudar no que for necessário!</p>
                    <div id={styles.icon_quote}>
                        <img id={styles.quotes} src="icon_quote.svg" alt="quote" />
                        <img id={styles.quotes} src="icon_quote.svg" alt="quote" />
                    </div>
                    <h2>A cada linha de código e avanço em inteligência artificial, construímos hoje as soluções que vão transformar o amanhã.</h2>
                </div>
                <img id={styles.icon_background} src="icon_background.svg" alt="" />
                <div id={styles.form_card}>
                    <ContactForm />
                </div>
            </div>

            <hr id={styles.divider} />

            <div id={styles.footer_links}>
                <div className={styles.links_sec}>
                    <img id={styles.unimar_logo} src="unimar_logo.svg" alt="unimar_logo" />
                    <h2>Av. Higino Muzi Filho, 1001</h2>
                    <p>+55 (14) 99849-2952</p>
                    <p>falecom@unimar.br</p>
                    <div id={styles.links_icons}>
                        <a href="https://www.youtube.com/user/UnimarTV"><img className={styles.icons} src="youtube.svg" alt="" /></a>
                        <a href="https://www.facebook.com/universidadedemarilia/"><img className={styles.icons} src="facebook.svg" alt="" /></a>
                        <a href="https://api.whatsapp.com/send?phone=5514998492952"><img className={styles.icons} src="whatsapp.svg" alt="" /></a>
                    </div>
                </div>
                <div className={styles.links_sec}>
                    <h3>Unimar</h3>
                    <a href="https://oficial.unimar.br/universidade/">Institucional</a>
                    <a href="https://oficial.unimar.br/universo-unimar/">Universo Unimar</a>
                    <a href="https://blog.unimar.br/?_gl=1*13nxmw*_gcl_au*MTI0MzU1MDA4LjE3NDU0MzIyMDA.">Blog</a>
                </div>
                <div className={styles.links_sec}>
                    <h3>Ajuda</h3>
                    <a href="https://oficial.unimar.br/consulta-de-diplomas/">Consultas e Diplomas</a>
                    <a href="https://oficial.unimar.br/contato/">Contato</a>
                    <a href="https://oficial.unimar.br/identidade-visual/">Identidade Visual</a>
                    <a href="https://portal.unimar.br/ouvidoria/?_gl=1*13is9gq*_gcl_au*MTI0MzU1MDA4LjE3NDU0MzIyMDA.">Ouvidoria</a>
                </div>
            </div>
            <p id={styles.copyright}>Copyright © Unimar 2025</p>
        </footer>
    );
}