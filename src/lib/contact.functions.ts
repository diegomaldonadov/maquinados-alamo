import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

const contactSchema = z.object({
  name: z.string().trim().min(2, { message: "El nombre debe tener al menos 2 caracteres" }).max(100),
  email: z.string().trim().email({ message: "Correo electrónico inválido" }).max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  service: z.string().trim().max(50).optional().or(z.literal("")),
  message: z.string().trim().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }).max(1000),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const SUPABASE_URL = process.env["SUPABASE_URL"];
    const SUPABASE_PUBLISHABLE_KEY = process.env["SUPABASE_PUBLISHABLE_KEY"];

    if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
      throw new Error("El backend no está configurado.");
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        storage: undefined,
      },
    });

    const { error } = await supabase.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      company: data.company || null,
      service: data.service || null,
      message: data.message,
    });

    if (error) {
      console.error("Error al guardar contacto:", error);
      throw new Error("No se pudo enviar el mensaje. Inténtalo de nuevo.");
    }

    return { success: true };
  });
