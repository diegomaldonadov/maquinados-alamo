import { createFileRoute } from "@tanstack/react-router";
import { Cog, Flame, Settings, Wrench, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import work01 from "@/assets/gallery/work-01.png.asset.json";
import work02 from "@/assets/gallery/work-02.png.asset.json";
import work03 from "@/assets/gallery/work-03.png.asset.json";
import work04 from "@/assets/gallery/work-04.png.asset.json";
import work05 from "@/assets/gallery/work-05.png.asset.json";
import work06 from "@/assets/gallery/work-06.png.asset.json";
import work10 from "@/assets/gallery/work-10.png.asset.json";
import work11 from "@/assets/gallery/work-11.png.asset.json";
import work12 from "@/assets/gallery/work-12.png.asset.json";

const gallery = [work01, work02, work03, work04, work05, work06, work10, work11, work12].map(
  (a) => a.url,
);


export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Servicios — Servicios y Maquinados Alamo" },
      { name: "description", content: "Maquinado CNC, fresadora industrial, torno CNC y soldadura MIG/TIG con precisión industrial." },
      { property: "og:title", content: "Servicios — Servicios y Maquinados Alamo" },
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
    },
    {
      id: "milling",
      icon: <Wrench className="h-8 w-8" />,
      title: "Fresadora Industrial",
    },
    {
      id: "lathe",
      icon: <Settings className="h-8 w-8" />,
      title: "Torno",
    },
    {
      id: "welding",
      icon: <Flame className="h-8 w-8" />,
      title: "Soldadura",
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
              className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-12 text-center transition-colors hover:border-primary/50"
            >
              <div className="inline-flex rounded-xl bg-primary/10 p-4 text-primary">
                {service.icon}
              </div>
              <h2 className="mt-6 text-2xl font-bold text-card-foreground">{service.title}</h2>
            </div>
          ))}
        </div>

        <section className="mt-20 scroll-mt-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nuestro trabajo
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
            {gallery.map((src, i) => (
              <div
                key={src}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <img
                  src={src}
                  alt={`Pieza maquinada ${i + 1} por Servicios y Maquinados Alamo`}
                  loading="eager"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>




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
