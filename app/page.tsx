import type { Metadata } from "next";
import Image from "next/image";
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
      href: "/closet-intelligence",
    },
    {
      title: "Personal Shopping Estratégico",
      description:
        "Compras mais inteligentes, com curadoria precisa e foco em imagem, não em tendência.",
      href: "/personal-shopping",
    },
    {
      title: "Styling Executivo",
      description:
        "Presença elegante e respeitada para ambientes de alta exigência e responsabilidade.",
      href: "/styling-executivo",
    },
  ];

  const results = [
    "Clareza sobre o que funciona em você",
    "Um guarda-roupa mais funcional e sofisticado",
    "Segurança ao se vestir em qualquer ocasião",
    "Compras mais inteligentes conscientes = Menos tempo perdido.",
    "Uma presença mais forte, coerente e elegante",
  ];

  const audience = [
    "SE VESTIR COM MAIS CLAREZA E INTENÇÃO",
    "CONSTRUIR UMA IMAGEM SOFISTICADA SEM EXCESSOS",
    "SENTIR-SE ELEGANTE NO DIA-A-DIA",
    "UM GUARDA-ROUPA COERENTE E FUNCIONAL",
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

        <div className="relative mx-auto grid max-w-6xl gap-16 px-6 py-10 md:px-10 lg:grid-cols-2 lg:px-16 lg:py-16">
          <div className="flex flex-col justify-center py-8 lg:py-16">
            <span className="mb-6 inline-block w-fit rounded-full border border-[#d8e8df] bg-[#f6fbf8] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-[#547b6a]">
              Imagem estratégica para mulheres
            </span>

            <h1 className="font-serif text-5xl leading-[0.95] tracking-[-0.03em]  text-neutral-950 sm:text-6xl lg:text-7x1">
              A forma como você se apresenta muda a forma como o mundo te vê.
            </h1>
            <br />
            <p className="mt-7 max-w-xl text-base leading-8 text-neutral-600">
              Consultoria de imagem estratégica, construída com intenção: para
              mulheres que desejam alinhar presença, sofisticação e
              autenticidade.
            </p>
            <br />
            <div className="mt-9 flex flex-col gap-10 sm:flex-row">
              <Link
                href="https://wa.me/5514996244361"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-[#547b6a] px-7 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#476a5a]"
              >
                Agendar Consultoria
              </Link>

              <Link
                href="/servicos"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white/50 px-7 py-4 text-sm font-medium text-neutral-800 transition duration-300 hover:-translate-y-0.5 hover:border-[#547b6a] hover:text-[#547b6a]"
              >
                Ver serviços
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="max-w-[520px] overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(0,0,0,0.10)]">
              <Image
                src="/images/FotoLAura.jpeg"
                alt="Laura Bianchi em ambiente elegante de consultoria"
                width={900}
                height={1100}
                priority
                className="h-[480px] w-full object-cover"
              />
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
            Para mulheres que desejam transmitir elegância com autenticidade
          </h2>

        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {audience.map((item) => (
            <div
              key={item}
              className="
                h-[140px]
                rounded-[32px]
                border
                border-[#d8e8df]
                bg-[#f6fbf8]
                px-8
                py-6
                flex
                items-center
                justify-center
                text-center">
              <p className="text-[18px] leading-[1.55] uppercase text-[#547b6a]">{item}</p>
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
            Muitas mulheres possuem um guarda-roupa cheio,
            mas ainda sentem que nada as realmente representa.
            Quando sua imagem não comunica quem você é, vestir-se torna-se
            confuso, cansativo e distante da mulher que deseja transmitir.
            Elegância não está no excesso. Está na clareza, na intenção e na coerência.
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
            Cada detalhe comunica.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            O corte, o tecido,  caimento, as proporções, e as escolhas que compõem a sua imagem influenciam diretamente a forma como sua presença é percebida.
           </p>
           <p className="mt-6 text-lg leading-8 text-neutral-600">
           A consultoria com Laura Bianchi foi criada para ajudar mulheres a se vestirem de maneira sofisticada, construindo uma imagem alinhada à própria identidade, trajetória e estilo de vida, e não sobre seguir tendências.
          </p>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            O objetivo é não é transformar você em outra pessoa, mas revelar com clareza e refinamento a mulher que você quer comunicar.
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
            Com 10 anos de experiência na Itália e atuação junto a grandes maisons de luxo como Chanel, Saint Laurent e Fendi, Laura Bianchi desenvolveu um olhar refinado e sensível sobre imagem, elegância e estilo pessoal.
          </p>
          <p className="mt-6 text-lg leading-8 text-neutral-600">  
            Com atendimento próximo e personalizado, cada consultoria é conduzida de forma cuidadosa e exclusiva, focando no estilo de vida e objetivos de cada cliente.
          </p>

          <Link
            href="/sobre"
            className="mt-8 w-fit rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 transition hover:border-[#547b6a] hover:text-[#547b6a]"
          >
            Conheça mais
          </Link>
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

          <Link
            href="/servicos"
            className="text-sm font-medium text-[#547b6a] underline-offset-4 hover:underline"
          >
            Ver todos os serviços
          </Link>
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

              <Link
                href={service.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#547b6a]"
              >
                <span>Saiba mais</span>
                <span className="transition group-hover:translate-x-1">→</span>
              </Link>
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
              O que muda quando a sua imagem se alinha à sua presença
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
            <Link
              href="https://wa.me/5514996244361"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-7 py-4 text-sm font-medium text-[#547b6a] transition hover:opacity-90"
            >
              Falar no WhatsApp
            </Link>

            <Link
              href="mailto:24hcloset@gmail.com"
              className="rounded-full border border-white/40 px-7 py-4 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Enviar e-mail
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}