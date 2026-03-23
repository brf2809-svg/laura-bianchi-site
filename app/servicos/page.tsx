import Link from "next/link";

const services = [
  {
    title: "Consultoria de Imagem Estratégica",
    description:
      "Um processo completo para alinhar imagem, presença e identidade pessoal com sofisticação, clareza e autoridade.",
    href: "/consultoria-imagem-estrategica",
    highlight: "Serviço principal",
    cta: "Ver detalhes",
  },
  {
    title: "Closet Intelligence",
    description:
      "Análise estratégica do guarda-roupa para organizar escolhas, eliminar excessos e construir uma base funcional, refinada e coerente.",
    href: "/closet-intelligence",
    highlight: "Curadoria e organização",
    cta: "Conhecer serviço",
  },
  {
    title: "Personal Shopping",
    description:
      "Seleção orientada de peças com intenção, critério e direção estética, para que cada compra fortaleça sua imagem com consistência.",
    href: "/personal-shopping",
    highlight: "Compras com estratégia",
    cta: "Conhecer serviço",
  },
  {
    title: "Styling Executivo",
    description:
      "Construção de imagem para contextos profissionais de maior exposição, liderança e influência, com foco em presença e credibilidade.",
    href: "/styling-executivo",
    highlight: "Presença profissional",
    cta: "Conhecer serviço",
  },
];

export default function ServicosPage() {
  return (
    <main className="bg-white text-stone-800">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(214,233,223,0.32),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(244,225,229,0.22),_transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-8 lg:pb-28 lg:pt-32">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.28em] text-emerald-900">
              Serviços
            </span>

            <h1 className="mt-8 max-w-5xl font-serif text-5xl leading-tight text-emerald-950 sm:text-6xl lg:text-7xl">
              Serviços desenhados para alinhar presença, sofisticação e
              identidade em cada etapa da sua trajetória.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
              Cada atendimento responde a um momento específico, com o mesmo
              compromisso: construir uma imagem mais coerente, refinada e
              estrategicamente posicionada.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-emerald-100 bg-[#fafaf8]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
              Estrutura dos atendimentos
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-emerald-950 sm:text-5xl">
              Soluções para mulheres que desejam mais clareza, autoridade e
              sofisticação na forma de se apresentar.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`rounded-[30px] border border-emerald-100 p-8 sm:p-10 ${
                  index % 2 === 0 ? "bg-white" : "bg-[#fcfcfb]"
                } shadow-[0_20px_60px_rgba(15,23,42,0.04)]`}
              >
                <span className="inline-flex rounded-full border border-stone-200 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.25em] text-stone-500">
                  {service.highlight}
                </span>

                <h3 className="mt-6 font-serif text-3xl leading-tight text-emerald-950 sm:text-4xl">
                  {service.title}
                </h3>

                <p className="mt-5 max-w-xl text-base leading-8 text-stone-600">
                  {service.description}
                </p>

                <div className="mt-8">
                  <Link
                    href={service.href}
                    className="inline-flex items-center rounded-full border border-emerald-900 bg-emerald-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-800"
                  >
                    {service.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-3 lg:px-8 lg:py-24">
          <div className="rounded-[28px] border border-emerald-100 bg-white p-8">
            <h3 className="font-serif text-2xl text-emerald-950">
              Clareza estética
            </h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              Cada serviço tem como objetivo tornar sua imagem mais clara,
              intencional e coerente com quem você é e com o lugar que ocupa.
            </p>
          </div>

          <div className="rounded-[28px] border border-emerald-100 bg-[#fafaf8] p-8">
            <h3 className="font-serif text-2xl text-emerald-950">
              Sofisticação funcional
            </h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              A proposta não é acumular peças ou tendências, mas construir uma
              estética refinada que funcione com praticidade no cotidiano.
            </p>
          </div>

          <div className="rounded-[28px] border border-emerald-100 bg-[#f7f2f3] p-8">
            <h3 className="font-serif text-2xl text-emerald-950">
              Presença com identidade
            </h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              O trabalho respeita individualidade, contexto e ambição para que a
              imagem final seja autêntica, elegante e consistente.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-emerald-100 bg-[#fcfcfb]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
                Serviço principal
              </span>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-emerald-950 sm:text-5xl">
                A Consultoria de Imagem Estratégica é o ponto de partida para
                uma transformação mais profunda.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-stone-600">
              <p>
                Para mulheres que desejam um processo mais completo, a
                Consultoria de Imagem Estratégica reúne análise, direção,
                refinamento e construção de presença visual com método e
                personalização.
              </p>
              <p>
                É a escolha ideal para quem deseja alinhar identidade,
                repertório estético, guarda-roupa e posicionamento com mais
                consistência e elegância.
              </p>
              <div className="pt-2">
                <Link
                  href="/consultoria-imagem-estrategica"
                  className="inline-flex items-center rounded-full border border-emerald-900 bg-emerald-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-800"
                >
                  Conhecer a consultoria principal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-emerald-200">
              Atendimento
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
              Escolha o serviço mais alinhado ao seu momento ou solicite uma
              orientação inicial.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-emerald-50/85">
              Cada etapa do processo é conduzida com leitura estratégica,
              atenção aos detalhes e sofisticação contemporânea.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="https://wa.me/5514996244361"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-emerald-950 transition hover:bg-emerald-50"
              >
                Falar no WhatsApp
              </Link>

              <Link
                href="mailto:24hcloset@gmail.com"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:border-white hover:bg-white/5"
              >
                Enviar e-mail
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}