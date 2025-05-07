import styles from './style.module.css'
import { ProjectCard } from '../project_card';

export function Projects() {

    return (
        <div className={styles.projects_main}>
            <div id={styles.projects_text}>
                <h1>Projetos</h1>
                <h2>Confira nossos principais projetos</h2>
            </div>

            <div id={styles.projects_content}>
                <ProjectCard 
                    card_title="Assistente Virtual Para Saúde Mental" 
                    src="01.svg" 
                    card_description="Um chatbot com IA treinado para oferecer apoio emocional, escutar o usuário."
                />
                <ProjectCard 
                    card_title="Assistente Virtual Para Saúde Mental" 
                    src="02.svg" 
                    card_description="Um chatbot com IA treinado para oferecer apoio emocional, escutar o usuário."
                />
                <ProjectCard 
                    card_title="Assistente Virtual Para Saúde Mental" 
                    src="03.svg" 
                    card_description="Um chatbot com IA treinado para oferecer apoio emocional, escutar o usuário."
                />
                <ProjectCard 
                    card_title="Assistente Virtual Para Saúde Mental" 
                    src="04.svg" 
                    card_description="Um chatbot com IA treinado para oferecer apoio emocional, escutar o usuário."
                />
            </div>
        </div>
    );
}