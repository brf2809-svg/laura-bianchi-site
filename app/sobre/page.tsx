import Link from "next/link";

export default function SobrePage() {
  return (
    <main className="bg-white text-stone-800">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(214,233,223,0.35),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(244,225,229,0.22),_transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-8 lg:pb-28 lg:pt-32">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.28em] text-emerald-900">
              Sobre Laura Bianchi
            </span>

            <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-tight text-emerald-950 sm:text-6xl lg:text-7xl">
              Imagem estratégica para mulheres cuja presença precisa refletir a
              dimensão da própria trajetória.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
              Laura Bianchi conduz processos de consultoria de imagem com foco
              em elegância, autoridade e autenticidade. O objetivo não é apenas
              refinar a estética, mas alinhar a expressão visual à identidade, à
              posição e ao momento profissional de cada cliente.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-emerald-100 bg-[#fafaf8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
              Posicionamento
            </span>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-emerald-950 sm:text-5xl">
              Uma consultoria pensada para mulheres que ocupam espaços de
              responsabilidade, influência e decisão.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-stone-600">
            <p>
              O trabalho é direcionado a mulheres que não desejam apenas “se
              vestir melhor”, mas construir uma imagem coerente com a sua
              autoridade, seu repertório e a forma como querem ser percebidas.
            </p>
            <p>
              Médicas, juízas, promotoras, executivas, políticas e líderes em
              diferentes áreas encontram aqui um processo sofisticado,
              personalizado e estratégico — sem excessos, sem caricaturas e sem
              fórmulas genéricas.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
              Diferenciação
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-emerald-950 sm:text-5xl">
              O diferencial está na leitura precisa entre identidade, contexto e
              presença.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-[28px] border border-emerald-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)]">
              <h3 className="font-serif text-2xl text-emerald-950">
                Estratégia antes da estética
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                A imagem é trabalhada como instrumento de posicionamento e não
                como ornamentação. Cada escolha visual precisa fazer sentido.
              </p>
            </article>

            <article className="rounded-[28px] border border-emerald-100 bg-[#fafaf8] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)]">
              <h3 className="font-serif text-2xl text-emerald-950">
                Sofisticação sem excesso
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                O foco está em construir elegância contemporânea, presença
                refinada e consistência, sem depender de exageros para comunicar
                valor.
              </p>
            </article>

            <article className="rounded-[28px] border border-emerald-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)]">
              <h3 className="font-serif text-2xl text-emerald-950">
                Processo personalizado
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                Cada atendimento considera rotina, ambição, repertório,
                objetivos profissionais, códigos de imagem e estilo de vida da
                cliente.
              </p>
            </article>

            <article className="rounded-[28px] border border-emerald-100 bg-[#f7f2f3] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)]">
              <h3 className="font-serif text-2xl text-emerald-950">
                Autoridade com autenticidade
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                A proposta não é criar uma personagem, mas revelar uma presença
                visual mais alinhada, sofisticada e fiel à identidade da
                cliente.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-emerald-100 bg-[#fcfcfb]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="rounded-[32px] border border-emerald-100 bg-white p-8 sm:p-10">
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
              Visão
            </span>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-emerald-950 sm:text-4xl">
              Vestir-se bem não deve ser um esforço constante, mas uma extensão
              natural de quem você é e do lugar que ocupa.
            </h2>
            <p className="mt-6 text-base leading-8 text-stone-600">
              Quando a imagem está desalinhada, a rotina se torna mais cansativa
              e a presença perde força. Quando ela está clara, coerente e
              refinada, a comunicação se torna mais precisa, a escolha diária se
              simplifica e a confiança se torna mais estável.
            </p>
          </div>

          <div className="rounded-[32px] border border-emerald-100 bg-[#f7f2f3] p-8 sm:p-10">
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
              Resultado
            </span>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-emerald-950 sm:text-4xl">
              Uma imagem que sustenta sua presença com elegância, clareza e
              credibilidade.
            </h2>
            <p className="mt-6 text-base leading-8 text-stone-600">
              O resultado é um guarda-roupa mais inteligente, uma estética mais
              coerente e uma presença visual capaz de traduzir sofisticação,
              autoridade e identidade em diferentes contextos da vida pessoal e
              profissional.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-emerald-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-emerald-200">
              Convite
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
              Sua imagem precisa acompanhar o nível da sua trajetória.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-emerald-50/85">
              Se você deseja alinhar presença, sofisticação e identidade pessoal
              com mais clareza e intenção, este é o momento de iniciar esse
              processo.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="https://wa.me/5514996244361"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-emerald-950 transition hover:bg-emerald-50"
              >
                Agendar atendimento
              </Link>

              <Link
                href="/servicos"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:border-white hover:bg-white/5"
              >
                Conhecer serviços
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}