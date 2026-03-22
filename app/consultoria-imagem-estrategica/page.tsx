export default function ConsultoriaImagemEstrategicaPage() {
  const includes = [
    "Diagnóstico detalhado da sua imagem atual",
    "Definição do seu estilo pessoal refinado",
    "Direcionamento de cores, tecidos e modelagens",
    "Ajustes de imagem para ambientes profissionais e sociais",
    "Orientação prática para construção de looks",
    "Guia estratégico de estilo personalizado",
  ];

  const results = [
    "Clareza absoluta sobre o que funciona em você",
    "Um estilo coerente com sua identidade e trajetória",
    "Segurança ao se vestir em qualquer situação",
    "Redução do tempo gasto com decisões",
    "Uma presença mais elegante, consistente e respeitada",
  ];

  const objections = [
    {
      title: "“Eu já tenho muitas roupas”",
      text: "Você não precisa de mais peças. Precisa de direção, intenção e coerência nas escolhas.",
    },
    {
      title: "“Não tenho tempo”",
      text: "A consultoria foi pensada para otimizar suas decisões futuras e trazer mais praticidade ao dia a dia.",
    },
    {
      title: "“Tenho medo de perder minha identidade”",
      text: "O processo não impõe um padrão. Ele revela, organiza e refina aquilo que já faz sentido para você.",
    },
    {
      title: "“Não sei se isso funciona para mim”",
      text: "Tudo é construído de forma personalizada, respeitando sua rotina, sua personalidade e seus objetivos.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Diagnóstico",
      text: "Análise profunda da sua imagem atual, rotina, contexto profissional e objetivos de posicionamento.",
    },
    {
      number: "02",
      title: "Direcionamento estratégico",
      text: "Clareza sobre o que valoriza sua presença, com definições práticas e personalizadas.",
    },
    {
      number: "03",
      title: "Aplicação prática",
      text: "Transformação da sua imagem com escolhas seguras, consistentes e alinhadas à mulher que você se tornou.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-neutral-800">
      <section className="relative overflow-hidden border-b border-neutral-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(190,230,215,0.45),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(234,208,212,0.22),_transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-16">
          <div className="flex items-center justify-between">
            <a href="/" className="group">
              <p className="font-serif text-2xl tracking-wide text-[#547b6a]">
                Laura Bianchi
              </p>
              <p className="mt-1 text-sm uppercase tracking-[0.2em] text-neutral-500">
                Consultoria de Imagem
              </p>
            </a>

            <nav className="hidden gap-8 text-sm text-neutral-600 md:flex">
              <a href="/" className="transition hover:text-[#547b6a]">
                Home
              </a>
              <a href="#como-funciona" className="transition hover:text-[#547b6a]">
                Como funciona
              </a>
              <a href="#inclui" className="transition hover:text-[#547b6a]">
                O que inclui
              </a>
              <a href="#contato" className="transition hover:text-[#547b6a]">
                Agendar
              </a>
            </nav>
          </div>

          <div className="grid gap-14 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
            <div className="flex flex-col justify-center">
              <span className="mb-6 inline-block w-fit rounded-full border border-[#d8e8df] bg-[#f6fbf8] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-[#547b6a]">
                Serviço principal
              </span>

              <h1 className="max-w-3xl font-serif text-5xl leading-tight text-neutral-900 md:text-6xl">
                Consultoria de Imagem Estratégica
              </h1>

              <p className="mt-6 max-w-2xl text-xl leading-9 text-neutral-600">
                Alinhe sua imagem à mulher que você se tornou — com elegância,
                autoridade e autenticidade.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
                Um processo completo para mulheres que não querem apenas se
                vestir melhor, mas desejam comunicar presença, sofisticação e
                clareza em todos os ambientes.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contato"
                  className="rounded-full bg-[#547b6a] px-7 py-4 text-center text-sm font-medium tracking-wide text-white transition hover:opacity-90"
                >
                  Agendar Consultoria
                </a>
                <a
                  href="#como-funciona"
                  className="rounded-full border border-[#547b6a] px-7 py-4 text-center text-sm font-medium tracking-wide text-[#547b6a] transition hover:bg-[#f6fbf8]"
                >
                  Entender o processo
                </a>
              </div>
            </div>

            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-[#e8efeb] bg-[#f6fbf8] shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(84,123,106,0.08)_100%)]" />
              <div className="absolute left-8 top-8 rounded-full bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.18em] text-neutral-500 backdrop-blur">
                Presença. Elegância. Posicionamento.
              </div>
              <div className="absolute inset-x-8 bottom-8 rounded-[1.75rem] bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
                <p className="font-serif text-3xl leading-snug text-neutral-900">
                  Sua imagem não precisa chamar atenção.
                </p>
                <p className="mt-3 font-serif text-3xl leading-snug text-neutral-900">
                  Precisa sustentar sua presença.
                </p>
                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  A forma como você se veste comunica antes da sua fala. Quando
                  há coerência, sua imagem deixa de ser ruído e passa a ser
                  extensão da sua trajetória.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 text-center md:px-10 lg:px-16">
        <p className="text-sm uppercase tracking-[0.22em] text-[#547b6a]">
          Identificação
        </p>
        <h2 className="mt-4 font-serif text-4xl text-neutral-900 md:text-5xl">
          Você construiu uma trajetória — mas sua imagem ainda não acompanha
          isso com precisão.
        </h2>
        <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-neutral-600">
          Você ocupa espaços de responsabilidade, toma decisões importantes e
          atua em ambientes que exigem presença, clareza e segurança. Ainda
          assim, ao se vestir no dia a dia, sente falta de direção, consistência
          e confiança em algumas escolhas.
        </p>
      </section>

      <section className="bg-[#eef7f1] px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-serif text-4xl leading-tight text-neutral-900 md:text-5xl">
            Imagem não é sobre estética.
            <br />
            É sobre posicionamento.
          </p>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
            Antes mesmo de você falar, sua imagem já comunica autoridade ou
            fragilidade, sofisticação ou descuido, clareza ou ruído. A imagem
            certa não chama atenção. Ela sustenta sua presença.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 lg:grid-cols-2 lg:px-16">
        <div className="rounded-[2rem] bg-[linear-gradient(180deg,#f7faf8_0%,#ffffff_100%)] p-10 shadow-[0_15px_50px_rgba(0,0,0,0.05)]">
          <p className="text-sm uppercase tracking-[0.22em] text-[#547b6a]">
            A solução
          </p>
          <h2 className="mt-4 font-serif text-4xl text-neutral-900 md:text-5xl">
            Uma consultoria para mulheres que desejam se posicionar melhor.
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            A Consultoria de Imagem Estratégica é um processo completo de
            alinhamento entre quem você é, o que você comunica e como você se
            apresenta ao mundo.
          </p>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Sem fórmulas prontas. Sem imposições. Sem descaracterização. Tudo é
            construído a partir da sua realidade, rotina, identidade e objetivos.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#ead0d4] bg-[#fff8f9] p-10">
          <p className="text-sm uppercase tracking-[0.22em] text-[#547b6a]">
            Para quem é
          </p>
          <ul className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
            <li>• Mulheres em posição de liderança ou alta responsabilidade</li>
            <li>• Quem deseja transmitir mais autoridade com naturalidade</li>
            <li>• Quem quer se vestir com elegância, sem esforço excessivo</li>
            <li>• Quem não tem tempo para errar nas escolhas</li>
            <li>• Quem busca coerência entre imagem, identidade e trajetória</li>
          </ul>
        </div>
      </section>

      <section
        id="inclui"
        className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16"
      >
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.22em] text-[#547b6a]">
            O que está incluído
          </p>
          <h2 className="mt-4 font-serif text-4xl text-neutral-900 md:text-5xl">
            Um processo completo, estruturado e personalizado
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {includes.map((item) => (
            <div
              key={item}
              className="rounded-[1.75rem] border border-neutral-200 bg-white p-7 shadow-sm"
            >
              <p className="text-lg leading-8 text-neutral-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="como-funciona"
        className="bg-[#fafafa] px-6 py-24 md:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.22em] text-[#547b6a]">
              Como funciona
            </p>
            <h2 className="mt-4 font-serif text-4xl text-neutral-900 md:text-5xl">
              Um processo direto, sofisticado e eficiente
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
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[#547b6a]">
              Resultado esperado
            </p>
            <h2 className="mt-4 font-serif text-4xl text-neutral-900 md:text-5xl">
              O que você pode esperar
            </h2>
          </div>

          <div className="space-y-5">
            {results.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-[1.5rem] bg-[#f7faf8] p-6"
              >
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#547b6a]" />
                <p className="text-lg leading-8 text-neutral-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef7f1] px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.22em] text-[#547b6a]">
              Objeções comuns
            </p>
            <h2 className="mt-4 font-serif text-4xl text-neutral-900 md:text-5xl">
              Refinar sua imagem não é excesso. É estratégia.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {objections.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/70 bg-white p-8 shadow-sm"
              >
                <h3 className="font-serif text-2xl text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-lg leading-8 text-neutral-600">
                  {item.text}
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
            Sua imagem pode sustentar sua presença — ou enfraquecê-la.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/85">
            A diferença está na intenção. Agende sua consultoria e descubra como
            alinhar presença, sofisticação e identidade com clareza.
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
    </main>
  );
}