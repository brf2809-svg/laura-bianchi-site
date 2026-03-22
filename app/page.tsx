import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Consultoria de Imagem Estratégica",
      description:
        "Alinhamento completo entre imagem, estilo e trajetória para mulheres que desejam presença, elegância e autoridade.",
      href: "/consultoria-imagem-estrategica",
    },
    {
      title: "Closet Intelligence",
      description:
        "Um guarda-roupa funcional, coerente e sofisticado, com mais clareza e menos excessos.",
      href: "#",
    },
    {
      title: "Personal Shopping Estratégico",
      description:
        "Compras mais inteligentes, com curadoria precisa e foco em imagem, não em tendência.",
      href: "#",
    },
    {
      title: "Styling Executivo",
      description:
        "Presença elegante e respeitada para ambientes de alta exigência e responsabilidade.",
      href: "#",
    },
  ];

  const results = [
    "Clareza sobre o que funciona em você",
    "Um guarda-roupa mais funcional e sofisticado",
    "Segurança ao se vestir em qualquer ocasião",
    "Menos tempo perdido com decisões",
    "Uma presença mais forte, coerente e elegante",
  ];

  const audience = [
    "Médicas",
    "Executivas",
    "Magistradas e promotoras",
    "Mulheres em posição de liderança",
  ];

  const steps = [
    {
      number: "01",
      title: "Diagnóstico",
      description:
        "Entendimento profundo da sua imagem atual, rotina e objetivos.",
    },
    {
      number: "02",
      title: "Direcionamento estratégico",
      description:
        "Definição clara do que funciona para você, sem generalizações.",
    },
    {
      number: "03",
      title: "Aplicação prática",
      description:
        "Transformação da sua imagem com decisões seguras e consistentes.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-neutral-800">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(190,230,215,0.5),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(234,208,212,0.25),_transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-8 md:px-10 lg:grid-cols-2 lg:px-16 lg:py-10">
          <header className="flex items-center justify-between lg:col-span-2">
            <div>
              <p className="font-serif text-2xl tracking-wide text-[#547b6a]">
                Laura Bianchi
              </p>
              <p className="mt-1 text-sm uppercase tracking-[0.2em] text-neutral-500">
                Consultoria de Imagem
              </p>
            </div>

            <nav className="hidden gap-8 text-sm text-neutral-600 md:flex">
              <a href="#sobre" className="transition hover:text-[#547b6a]">
                Sobre
              </a>
              <a href="#servicos" className="transition hover:text-[#547b6a]">
                Serviços
              </a>
              <a
                href="#como-funciona"
                className="transition hover:text-[#547b6a]"
              >
                Experiência
              </a>
              <Link
                href="/consultoria-imagem-estrategica"
                className="transition hover:text-[#547b6a]"
              >
                Consultoria
              </Link>
              <a href="#contato" className="transition hover:text-[#547b6a]">
                Contato
              </a>
            </nav>
          </header>

          <div className="flex flex-col justify-center py-8 lg:py-16">
            <span className="mb-6 inline-block w-fit rounded-full border border-[#d8e8df] bg-[#f6fbf8] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-[#547b6a]">
              Imagem estratégica para mulheres
            </span>

            <h1 className="max-w-2xl font-serif text-5xl leading-tight text-neutral-900 md:text-6xl">
              Sua imagem precisa acompanhar o nível da sua trajetória.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              Consultoria de imagem estratégica para mulheres que desejam
              expressar elegância, autoridade e autenticidade.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/consultoria-imagem-estrategica"
                className="rounded-full bg-[#547b6a] px-7 py-4 text-center text-sm font-medium tracking-wide text-white transition hover:opacity-90"
              >
                Agendar Consultoria
              </Link>

              <a
                href="#servicos"
                className="rounded-full border border-[#547b6a] px-7 py-4 text-center text-sm font-medium tracking-wide text-[#547b6a] transition hover:bg-[#f6fbf8]"
              >
                Ver serviços
              </a>
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-[#e8efeb] bg-[#f6fbf8] shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(84,123,106,0.08)_100%)]" />

            <div className="absolute left-8 top-8 rounded-full bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.18em] text-neutral-500 backdrop-blur">
              Elegância. Presença. Clareza.
            </div>

            <div className="absolute inset-x-8 bottom-8 rounded-[1.75rem] bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              <p className="font-serif text-3xl leading-snug text-neutral-900">
                Imagem e estilo para mulheres que desejam alinhar presença,
                sofisticação e identidade.
              </p>

              <p className="mt-4 text-sm leading-7 text-neutral-600">
                Uma presença refinada, construída com intenção — sem excessos,
                sem fórmulas prontas e sem perder a autenticidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.22em] text-[#547b6a]">
            Para quem é
          </p>

          <h2 className="mt-4 font-serif text-4xl text-neutral-900 md:text-5xl">
            Para mulheres que ocupam espaços de responsabilidade
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Você construiu uma trajetória sólida, assume decisões importantes e
            atua em ambientes que exigem presença, clareza e segurança. Este
            trabalho é para mulheres que desejam que a imagem acompanhe esse
            nível com precisão.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {audience.map((item) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-neutral-200 bg-white p-6 text-center shadow-sm"
            >
              <p className="font-serif text-2xl text-neutral-900">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#eef7f1] px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-serif text-4xl leading-tight text-neutral-900 md:text-5xl">
            Você não precisa de mais roupas.
            <br />
            Precisa de direção.
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
            Quando sua imagem não está alinhada, você perde força na comunicação
            — mesmo sendo extremamente competente. A forma como você se veste
            fala antes de você. Imagem não é vaidade. É linguagem.
          </p>
        </div>
      </section>

      <section
        id="sobre"
        className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 lg:grid-cols-2 lg:px-16"
      >
        <div className="rounded-[2rem] bg-[linear-gradient(180deg,#f7faf8_0%,#ffffff_100%)] p-10 shadow-[0_15px_50px_rgba(0,0,0,0.05)]">
          <p className="text-sm uppercase tracking-[0.22em] text-[#547b6a]">
            Imagem como estratégia
          </p>

          <h2 className="mt-4 font-serif text-4xl text-neutral-900 md:text-5xl">
            Elegância não está no excesso, mas na coerência.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            A consultoria Laura Bianchi foi criada para mulheres que entendem
            que imagem é linguagem, posicionamento e presença. Cada escolha —
            do corte ao tecido, da cor ao caimento — é pensada para refletir
            quem você é hoje, com sofisticação, clareza e autenticidade.
          </p>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            A proposta não é transformar você em outra pessoa. É alinhar sua
            imagem à mulher que você se tornou.
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-[2rem] border border-[#ead0d4] bg-[#fff8f9] p-10">
          <p className="text-sm uppercase tracking-[0.22em] text-[#547b6a]">
            Laura Bianchi
          </p>

          <h3 className="mt-4 font-serif text-4xl text-neutral-900">
            Consultoria com precisão e sensibilidade
          </h3>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Especializada em mulheres que ocupam posições de responsabilidade e
            desejam alinhar presença, sofisticação e identidade, Laura conduz
            cada processo com olhar estratégico e atenção aos detalhes.
          </p>

          <a
            href="#contato"
            className="mt-8 w-fit rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 transition hover:border-[#547b6a] hover:text-[#547b6a]"
          >
            Conheça mais
          </a>
        </div>
      </section>

      <section
        id="servicos"
        className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.22em] text-[#547b6a]">
              Serviços
            </p>

            <h2 className="mt-4 font-serif text-4xl text-neutral-900 md:text-5xl">
              Uma abordagem personalizada para diferentes momentos e
              necessidades
            </h2>
          </div>

          <a
            href="#contato"
            className="text-sm font-medium text-[#547b6a] underline-offset-4 hover:underline"
          >
            Ver todos os serviços
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.06)]"
            >
              <h3 className="font-serif text-3xl text-neutral-900">
                {service.title}
              </h3>

              <p className="mt-4 text-lg leading-8 text-neutral-600">
                {service.description}
              </p>

              {service.href.startsWith("/") ? (
                <Link
                  href={service.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#547b6a]"
                >
                  <span>Saiba mais</span>
                  <span className="transition group-hover:translate-x-1">→</span>
                </Link>
              ) : (
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#547b6a]/60">
                  <span>Em breve</span>
                </span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#fafafa] px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[#547b6a]">
              Resultados
            </p>

            <h2 className="mt-4 font-serif text-4xl text-neutral-900 md:text-5xl">
              O que muda
            </h2>
          </div>

          <div className="mt-10 space-y-5 lg:mt-0">
            {results.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-[1.5rem] bg-white p-6 shadow-sm"
              >
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#547b6a]" />
                <p className="text-lg leading-8 text-neutral-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.22em] text-[#547b6a]">
              Acompanhe
            </p>

            <h2 className="mt-4 font-serif text-4xl text-neutral-900 md:text-5xl">
              Instagram e TikTok integrados ao site
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Conteúdos sobre imagem, elegância e presença aplicados à vida
              real, atualizados diretamente das redes sociais.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="aspect-[4/5] rounded-[2rem] border border-dashed border-neutral-300 bg-[#f7faf8] p-6"
            >
              <div className="flex h-full items-center justify-center rounded-[1.5rem] border border-neutral-200 bg-white text-center text-sm leading-7 text-neutral-500">
                Espaço reservado para feed integrado
                <br />
                Instagram / TikTok
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="como-funciona"
        className="bg-[#eef7f1] px-6 py-24 md:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.22em] text-[#547b6a]">
              Como funciona
            </p>

            <h2 className="mt-4 font-serif text-4xl text-neutral-900 md:text-5xl">
              Um processo estruturado, direto e personalizado
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[2rem] bg-white p-8 shadow-sm"
              >
                <p className="text-sm tracking-[0.25em] text-[#547b6a]">
                  {step.number}
                </p>

                <h3 className="mt-4 font-serif text-3xl text-neutral-900">
                  {step.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-neutral-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-[#547b6a] px-8 py-16 text-center text-white md:px-16">
          <p className="text-sm uppercase tracking-[0.22em] text-white/80">
            Agendamento
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            Sua imagem pode ser uma extensão da sua trajetória — ou um ruído.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/85">
            Refinar sua imagem não é excesso. É estratégia. Agende sua
            consultoria e descubra como alinhar presença, sofisticação e
            identidade com clareza.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/5500000000000"
              className="rounded-full bg-white px-7 py-4 text-sm font-medium text-[#547b6a] transition hover:opacity-90"
            >
              Falar no WhatsApp
            </a>

            <a
              href="mailto:contato@laurabianchi.com"
              className="rounded-full border border-white/40 px-7 py-4 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Enviar e-mail
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 px-6 py-10 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-2xl text-[#547b6a]">
              Laura Bianchi
            </p>
            <p className="mt-1 text-sm text-neutral-500">
              Consultoria de Imagem
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-neutral-600">
            <Link href="/" className="hover:text-[#547b6a]">
              Home
            </Link>
            <Link
              href="/consultoria-imagem-estrategica"
              className="hover:text-[#547b6a]"
            >
              Consultoria
            </Link>
            <a href="#sobre" className="hover:text-[#547b6a]">
              Sobre
            </a>
            <a href="#contato" className="hover:text-[#547b6a]">
              Contato
            </a>
            <a href="#" className="hover:text-[#547b6a]">
              Instagram
            </a>
            <a href="#" className="hover:text-[#547b6a]">
              TikTok
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}