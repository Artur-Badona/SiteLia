import styles from './style.module.css';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailSchema, EmailFormData } from "./emailSchema";
import { Span } from 'next/dist/trace';

export function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<EmailFormData>({
        resolver: zodResolver(emailSchema),
    });

    const onSubmit = async (data: EmailFormData) => {
        console.log("Enviando email...", data);
    };

    return (
        <div className={styles.form_card}>
            <div className={styles.form_title}>
                <img src="mail.svg" alt="mail" />
                <h1>Envie uma mensagem!</h1>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.form_sec}>
                    <h3>E-mail</h3>
                    <input className={`${styles.form_input} ${styles.email}`} type="email" placeholder="Insira seu e-mail" {...register("email")} />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div className={styles.form_sec}>
                    <h3>Mensagem</h3>
                    <textarea className={`${styles.form_input} ${styles.message}`} placeholder="Escreva sua mensagem!" {...register("message")} />
                    {errors.message && <span>{errors.message.message}</span>}
                </div>
                <button type="submit" disabled={isSubmitting}>
                    Entre em contato!
                </button>
            </form>
        </div>
    );
}