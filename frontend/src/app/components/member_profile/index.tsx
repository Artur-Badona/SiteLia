import styles from './style.module.css';

type ProfileProps = {
    profile_name: string;
    avatar_url: string;
    profile_link: string;
    type?: 'professor' | 'student';
}

export function MemberProfile({profile_name, avatar_url, profile_link, type = 'professor'}: ProfileProps) {

    return (
        <div className={`${styles.profile} ${styles[type]}`}>
            <a href={profile_link} className={`${styles.profile_image} ${styles[type]}`} style={{ backgroundImage: `url(${avatar_url})` }} target="_blank" rel="noopener noreferrer"></a>
            <h3 className={`${styles.profile_name} ${styles[type]}`} >{profile_name}</h3>
        </div>
    );
}