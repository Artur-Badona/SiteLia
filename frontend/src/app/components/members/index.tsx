import styles from './style.module.css';
import { MemberProfile } from '../member_profile';
import { useEffect, useState } from 'react';

type Professor = {
    id: number;
    nome: string;
    avatar: string;
    link: string;
};

type Aluno = {
    id: number;
    nome: string;
    avatar: string;
    link: string;
}

export function Members() {
    const [professores, setProfessores] = useState<Professor[]>([]);
    const [alunos, setAlunos] = useState<Aluno[]>([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/professores/')
            .then(res => res.json())
            .then(data => setProfessores(data))
            .catch(err => console.error('Erro ao buscar professores:', err));
        fetch('http://localhost:8000/api/alunos/')
            .then(res => res.json())
            .then(data => setAlunos(data))
            .catch(err => console.error('Erro ao buscar alunos:', err));
    }, []);

    return (
        <div id={styles.members_main}>
            <div id={styles.members_text}>
                <h1>Membros</h1>
                <h2>Professores</h2>
                <div className={styles.members_list}>
                    {professores.map((prof) => (
                        <MemberProfile
                            key={prof.id}
                            profile_name={prof.nome}
                            avatar_url={`${prof.avatar}`}
                            profile_link={prof.link}
                            type="professor"
                        />
                    ))}
                </div>
                <h2>Alunos</h2>
                <div className={styles.members_list}>
                    {alunos.map((aluno) => (
                        <MemberProfile
                            key={aluno.id}
                            profile_name={aluno.nome}
                            avatar_url={`${aluno.avatar}`}
                            profile_link={aluno.link}
                            type="student"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}