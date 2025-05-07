'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailSchema, EmailFormData } from "./emailSchema";
import styles from "./style.module.css";

export function ContactForm() {
    const [status, setStatus] = useState<string>("");

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset // 🧹 get reset here directly
    } = useForm<EmailFormData>({
        resolver: zodResolver(emailSchema),
    });

    const onSubmit = async (data: EmailFormData) => {
        try {
            setStatus("Enviando...");

            const response = await fetch('/api/contact/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": getCookie("csrftoken") || "",
                },
                body: JSON.stringify(data),
                credentials: "same-origin",
            });

            const result = await response.json();

            if (response.ok) {
                setStatus("Mensagem enviada com sucesso!");
                reset(); // 🧹 Clear form inputs after success
            } else {
                setStatus(`Erro: ${result.error}`);
            }
        } catch (error) {
            setStatus("Erro ao enviar mensagem.");
            console.error(error);
        }
    };

    function getCookie(name: string) {
        if (typeof document === "undefined") return null;
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(";").shift();
        return null;
    }

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
                {status && <p className={styles.status_message}>{status}</p>}
            </form>
        </div>
    );
}
