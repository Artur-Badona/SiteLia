'use client';

import { z } from "zod";

export const emailSchema = z.object({
    email: z.string().email("Email inválido"),
    message: z.string().min(1, "A mensagem não pode ser vazia"),
});

export type EmailFormData = z.infer<typeof emailSchema>;