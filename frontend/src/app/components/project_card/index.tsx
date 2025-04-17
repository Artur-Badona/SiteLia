import styles from './style.module.css';

type CardProps = {
    card_title: String;
    card_number: String;
    card_description: String;
}

export function ProjectCard({card_title, card_number, card_description}: CardProps) {

    return (
        <div className={styles.project_card}>
            <h1 className={styles.card_title}>{card_title}</h1>
            <h2 className={styles.card_number}>{card_number}</h2>
            <p className={styles.card_description}>{card_description}</p>
        </div>
    );
}