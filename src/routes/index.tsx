import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Cog, Flame, Settings, Wrench } from "lucide-react";
import heroImage from "../assets/hero-cnc.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Servicios y Maquinados Alamo — Maquinado CNC, Fresado, Torno y Soldadura" },
      { name: "description", content: "Servicios industriales de maquinado CNC, fresadora, torno y soldadura con precisión milimétrica. Cotiza tu proyecto en Monterrey." },
      { property: "og:title", content: "Servicios y Maquinados Alamo — Maquinado CNC, Fresado, Torno y Soldadura" },
      { property: "og:description", content: "Servicios industriales de maquinado CNC, fresadora, torno y soldadura con precisión milimétrica." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Taller de maquinado CNC industrial"
            className="h-full w-full object-cover"
            width={1920}
            height={1024}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <Settings className="mr-2 h-4 w-4" />
              Precisión industrial desde 2019
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Maquinado CNC con{" "}
              <span className="text-primary">precisión milimétrica</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Soluciones integrales de maquinado CNC, fresadora industrial, torno y soldadura.
              Transformamos tus especificaciones en piezas de alta calidad para cualquier sector.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Solicitar cotización
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-accent"
              >
                Ver servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Nuestros servicios
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Equipamiento de última generación y operadores certificados para cada proceso de manufactura.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              icon={<Cog className="h-8 w-8" />}
              title="Maquinado CNC"
              description="Centros de mecanizado CNC de 3 y 5 ejes para piezas complejas con tolerancias ajustadas."
            />
            <ServiceCard
              icon={<Wrench className="h-8 w-8" />}
              title="Fresadora Industrial"
              description="Fresado de alta precisión para moldes, matrices y componentes de gran formato."
            />
            <ServiceCard
              icon={<Settings className="h-8 w-8" />}
              title="Torno"
              description="Torno CNC y convencional para piezas cilíndricas, roscas y ejes de alta resistencia."
            />
            <ServiceCard
              icon={<Flame className="h-8 w-8" />}
              title="Soldadura"
              description="Soldadura MIG, TIG y arco para ensambles, reparaciones y estructuras metálicas."
            />
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="border-y border-border bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                ¿Por qué elegirnos?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Más de 15 años fabricando piezas para sectores automotriz, aeroespacial, energético y construcción.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Tolerancias de ±0.01 mm en acabados críticos",
                  "Materiales: acero, aluminio, bronce, titanio y plásticos de ingeniería",
                  "Entregas just-in-time y lotes flexibles",
                  "Inspección dimensional con equipos de metrología",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <StatCard value="15+" label="Años de experiencia" />
              <StatCard value="500+" label="Clientes atendidos" />
              <StatCard value="50+" label="Máquinas CNC" />
              <StatCard value="24h" label="Respuesta de cotización" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-primary px-6 py-16 text-center sm:px-12">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
              Cuéntanos tus especificaciones y recibe una cotización detallada en menos de 24 horas.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-background px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-background/90"
              >
                Contactar ahora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
      <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary">{icon}</div>
      <h3 className="mt-4 text-xl font-semibold text-card-foreground">{title}</h3>
      <p className="mt-2 text-sm text-card-foreground/70">{description}</p>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 text-center">
      <div className="text-3xl font-extrabold text-primary">{value}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
