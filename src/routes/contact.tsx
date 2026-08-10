import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

import { submitContact } from "../lib/contact.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contacto — MetalMecánica Industrial" },
      { name: "description", content: "Solicita cotización de maquinado CNC, fresado, torno o soldadura. Te respondemos en menos de 24 horas." },
      { property: "og:title", content: "Contacto — MetalMecánica Industrial" },
      { property: "og:description", content: "Solicita cotización de maquinado CNC, fresado, torno o soldadura. Te respondemos en menos de 24 horas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const contactFormSchema = z.object({
  name: z.string().trim().min(2, { message: "El nombre debe tener al menos 2 caracteres" }).max(100),
  email: z.string().trim().email({ message: "Correo electrónico inválido" }).max(255),
  phone: z.string().trim().max(20).optional(),
  company: z.string().trim().max(100).optional(),
  service: z.string().trim().max(50).optional(),
  message: z.string().trim().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }).max(1000),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

function ContactPage() {
  const submit = useServerFn(submitContact);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setError(null);
    try {
      await submit({ data });
      setSubmitted(true);
      reset();
    } catch (err) {
      console.error("Error enviando formulario:", err);
      setError(err instanceof Error ? err.message : "Ocurrió un error al enviar el mensaje.");
    }
  };

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Contacto
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Cuéntanos sobre tu proyecto y recibe una cotización personalizada.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-xl font-semibold text-card-foreground">Información de contacto</h2>
              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-4">
                  <Phone className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-card-foreground">Teléfono</div>
                    <div className="text-sm text-muted-foreground">+52 81 1234 5678</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-card-foreground">Email</div>
                    <div className="text-sm text-muted-foreground">ventas@metalmecanica.ind</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-card-foreground">Dirección</div>
                    <div className="text-sm text-muted-foreground">
                      Av. Industrial 1500, Parque Industrial Norte<br />
                      Monterrey, Nuevo León, México
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-card-foreground">Horario</div>
                    <div className="text-sm text-muted-foreground">
                      Lunes a Viernes: 7:00 – 18:00<br />
                      Sábado: 8:00 – 13:00
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <CheckCircle2 className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-card-foreground">¡Mensaje enviado!</h2>
                  <p className="mt-2 max-w-md text-muted-foreground">
                    Gracias por contactarnos. Un asesor revisará tu solicitud y te responderá en menos de 24 horas.
                  </p>
                  <Button
                    className="mt-6"
                    onClick={() => {
                      setSubmitted(false);
                      setError(null);
                    }}
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        placeholder="Tu nombre"
                        {...register("name")}
                        aria-invalid={errors.name ? "true" : "false"}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        {...register("email")}
                        aria-invalid={errors.email ? "true" : "false"}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+52 81 1234 5678"
                        {...register("phone")}
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive">{errors.phone.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        placeholder="Nombre de tu empresa"
                        {...register("company")}
                      />
                      {errors.company && (
                        <p className="text-sm text-destructive">{errors.company.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Servicio de interés</Label>
                    <select
                      id="service"
                      {...register("service")}
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="cnc">Maquinado CNC</option>
                      <option value="milling">Fresadora industrial</option>
                      <option value="lathe">Torno</option>
                      <option value="welding">Soldadura</option>
                      <option value="other">Otro / combinado</option>
                    </select>
                    {errors.service && (
                      <p className="text-sm text-destructive">{errors.service.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Describe tu proyecto, materiales, cantidades y fechas de entrega..."
                      {...register("message")}
                      aria-invalid={errors.message ? "true" : "false"}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message.message}</p>
                    )}
                  </div>

                  {error && (
                    <div className="rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                    size="lg"
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar mensaje
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
