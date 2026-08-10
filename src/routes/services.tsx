import { createFileRoute } from "@tanstack/react-router";
import { Cog, Flame, Settings, Wrench, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Servicios — MetalMecánica Industrial" },
      { name: "description", content: "Maquinado CNC, fresadora industrial, torno CNC y soldadura MIG/TIG con precisión industrial." },
      { property: "og:title", content: "Servicios — MetalMecánica Industrial" },
      { property: "og:description", content: "Maquinado CNC, fresadora industrial, torno CNC y soldadura MIG/TIG con precisión industrial." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const services = [
    {
      id: "cnc",
      icon: <Cog className="h-8 w-8" />,
      title: "Maquinado CNC",
      shortDescription:
        "Centros de mecanizado CNC de 3 y 5 ejes para piezas complejas, prototipos y producción en serie.",
      features: [
        "Mecanizado de 3, 4 y 5 ejes",
        "Tolerancias de ±0.01 mm",
        "Acabados superficiales Ra 0.8",
        "Materiales: acero, aluminio, titanio, plásticos",
        "Prototipos y lotes de producción",
      ],
    },
    {
      id: "milling",
      icon: <Wrench className="h-8 w-8" />,
      title: "Fresadora Industrial",
      shortDescription:
        "Fresado de alta precisión para moldes, matrices, piezas de gran formato y superficies complejas.",
      features: [
        "Fresadoras verticales y horizontales",
        "Mesa de trabajo hasta 2,000 mm",
        "Moldes y matrices de inyección",
        "Ranurado, contorneado y taladrado",
        "Reparación de componentes industriales",
      ],
    },
    {
      id: "lathe",
      icon: <Settings className="h-8 w-8" />,
      title: "Torno",
      shortDescription:
        "Torno CNC y convencional para piezas cilíndricas, ejes, roscas, bujes y componentes de transmisión.",
      features: [
        "Torno CNC de alta velocidad",
        "Diámetros hasta 500 mm",
        "Ejes, bujes, roscas y engranes",
        "Acabados de precisión",
        "Producción de repuestos industriales",
      ],
    },
    {
      id: "welding",
      icon: <Flame className="h-8 w-8" />,
      title: "Soldadura",
      shortDescription:
        "Soldadura MIG, TIG y arco para ensambles, reparaciones, estructuras y trabajos especiales.",
      features: [
        "Soldadura MIG/MAG y TIG",
        "Soldadura por arco eléctrico",
        "Acero inoxidable, aluminio y acero al carbono",
        "Reparación y reconstrucción de piezas",
        "Pruebas de hermeticidad y penetrantes",
      ],
    },
  ];

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Servicios industriales
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Cubrimos todo el ciclo de manufactura: desde el mecanizado hasta el ensamble final.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/50"
            >
              <div className="inline-flex rounded-xl bg-primary/10 p-4 text-primary">
                {service.icon}
              </div>
              <h2 className="mt-6 text-2xl font-bold text-card-foreground">{service.title}</h2>
              <p className="mt-3 text-muted-foreground">{service.shortDescription}</p>
              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-secondary p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            ¿Necesitas una combinación de servicios?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Podemos fabricar tu pieza completa: mecanizado, soldadura y acabado en un solo flujo de trabajo.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Solicitar cotización combinada
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
