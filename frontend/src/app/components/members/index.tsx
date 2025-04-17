import styles from './style.module.css';
import { MemberProfile } from '../member_profile';

export function Members() {
    return (
        <div id={styles.members_main}>
            <div id={styles.members_text}>
                <h1>Membros</h1>
                <h2>Professores</h2>
                <div className={styles.members_list}>
                    <MemberProfile
                        profile_name="Henrique Leal"
                        avatar_url='/henrique.png'
                        profile_link='http://linkedin.com/in/henrique-leal/?originalSubdomain=br'
                    />
                    <MemberProfile
                        profile_name="Henrique Leal"
                        avatar_url='/henrique.png'
                        profile_link='http://linkedin.com/in/henrique-leal/?originalSubdomain=br'
                    />
                    <MemberProfile
                        profile_name="Henrique Leal"
                        avatar_url='/henrique.png'
                        profile_link='http://linkedin.com/in/henrique-leal/?originalSubdomain=br'
                    />
                    <MemberProfile
                        profile_name="Henrique Leal"
                        avatar_url='/henrique.png'
                        profile_link='http://linkedin.com/in/henrique-leal/?originalSubdomain=br'
                    />
                </div>
                <h2>Alunos</h2>
                <div className={styles.members_list}>
                    <MemberProfile
                        profile_name="Henrique Leal"
                        avatar_url='/henrique.png'
                        profile_link='http://linkedin.com/in/henrique-leal/?originalSubdomain=br'
                        type='student'
                    />
                    <MemberProfile
                        profile_name="Henrique Leal"
                        avatar_url='/henrique.png'
                        profile_link='http://linkedin.com/in/henrique-leal/?originalSubdomain=br'
                        type='student'
                    />
                    <MemberProfile
                        profile_name="Henrique Leal"
                        avatar_url='/henrique.png'
                        profile_link='http://linkedin.com/in/henrique-leal/?originalSubdomain=br'
                        type='student'
                    />
                    <MemberProfile
                        profile_name="Henrique Leal"
                        avatar_url='/henrique.png'
                        profile_link='http://linkedin.com/in/henrique-leal/?originalSubdomain=br'
                        type='student'
                    />
                    <MemberProfile
                        profile_name="Henrique Leal"
                        avatar_url='/henrique.png'
                        profile_link='http://linkedin.com/in/henrique-leal/?originalSubdomain=br'
                        type='student'
                    />
                    <MemberProfile
                        profile_name="Henrique Leal"
                        avatar_url='/henrique.png'
                        profile_link='http://linkedin.com/in/henrique-leal/?originalSubdomain=br'
                        type='student'
                    />
                    <MemberProfile
                        profile_name="Henrique Leal"
                        avatar_url='/henrique.png'
                        profile_link='http://linkedin.com/in/henrique-leal/?originalSubdomain=br'
                        type='student'
                    />
                </div>
            </div>
        </div>
    );
}