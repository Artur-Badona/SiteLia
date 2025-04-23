import styles from './style.module.css';

type CardProps = {
    card_title: string;
    src: string;
    card_description: string;
}

export function ProjectCard({card_title, src, card_description}: CardProps) {

    return (
        <div className={styles.project_card}>
            <h1 className={styles.card_title}>{card_title}</h1>
            <img className={styles.card_number} src={src} alt="00" />
            <p className={styles.card_description}>{card_description}</p>
        </div>
    );
}