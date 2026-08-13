import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Shield, Users, Clock } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Nosotros — MetalMecánica Industrial" },
      { name: "description", content: "Conoce a MetalMecánica Industrial: más de 15 años de experiencia en maquinado CNC, fresado, torno y soldadura." },
      { property: "og:title", content: "Nosotros — MetalMecánica Industrial" },
      { property: "og:description", content: "Conoce a MetalMecánica Industrial: más de 15 años de experiencia en maquinado CNC, fresado, torno y soldadura." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Sobre nosotros
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Somos una empresa de manufactura metalmecánica comprometida con la precisión, la calidad
            y la entrega puntual.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="text-2xl font-bold text-card-foreground">Nuestra historia</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Desde 2008, MetalMecánica Industrial ha crecido de un pequeño taller de reparación a
                un centro de manufactura con más de 50 máquinas CNC y un equipo de operadores certificados.
              </p>
              <p>
                Atendemos a clientes de los sectores automotriz, aeroespacial, energético, agrícola
                y construcción, fabricando piezas que cumplen con especificaciones técnicas exigentes.
              </p>
              <p>
                Nuestra filosofía es simple: cada pieza debe salir del taller con la calidad correcta
                a la primera, entregada en el tiempo prometido.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <ValueCard
              icon={<Shield className="h-6 w-6" />}
              title="Calidad certificada"
              description="Procesos bajo control dimensional y trazabilidad de materiales."
            />
            <ValueCard
              icon={<Users className="h-6 w-6" />}
              title="Equipo experto"
              description="Operadores y programadores con certificación en mecanizado CNC."
            />
            <ValueCard
              icon={<Clock className="h-6 w-6" />}
              title="Entrega puntual"
              description="Planificación de producción enfocada en tus fechas críticas."
            />
            <ValueCard
              icon={<Award className="h-6 w-6" />}
              title="Atención personalizada"
              description="Asesoría técnica desde el diseño hasta la entrega final."
            />
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-sm rounded-xl border border-border bg-secondary p-8 text-center">
            <div className="text-4xl font-extrabold text-primary">7+</div>
            <div className="mt-1 text-sm text-muted-foreground">Años de experiencia</div>
          </div>
        </div>


        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Trabaja con nosotros
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="inline-flex rounded-lg bg-primary/10 p-2 text-primary">{icon}</div>
      <h3 className="mt-4 text-lg font-semibold text-card-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
