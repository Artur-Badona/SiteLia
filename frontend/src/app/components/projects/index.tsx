import styles from './style.module.css'
import { ProjectCard } from '../project_card';
import { useState, useEffect } from "react";

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
                    card_number="01" 
                    card_description="Um chatbot com IA treinado para oferecer apoio emocional, escutar o usuário."
                />
                <ProjectCard 
                    card_title="Assistente Virtual Para Saúde Mental" 
                    card_number="02" 
                    card_description="Um chatbot com IA treinado para oferecer apoio emocional, escutar o usuário."
                />
                <ProjectCard 
                    card_title="Assistente Virtual Para Saúde Mental" 
                    card_number="03" 
                    card_description="Um chatbot com IA treinado para oferecer apoio emocional, escutar o usuário."
                />
                <ProjectCard 
                    card_title="Assistente Virtual Para Saúde Mental" 
                    card_number="04" 
                    card_description="Um chatbot com IA treinado para oferecer apoio emocional, escutar o usuário."
                />
            </div>
        </div>
    );
}