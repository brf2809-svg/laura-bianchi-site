import Link from "next/link";

export default function ClosetIntelligencePage() {
  return (
    <main className="bg-white text-stone-800">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(214,233,223,0.35),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(244,225,229,0.20),_transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-8 lg:pb-28 lg:pt-32">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.28em] text-emerald-900">
              Closet Intelligence
            </span>

            <h1 className="mt-8 font-serif text-5xl leading-tight text-emerald-950 sm:text-6xl lg:text-7xl">
              Um guarda-roupa mais inteligente, refinado e coerente com a mulher
              que você se tornou.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
              Closet Intelligence é um processo de leitura estratégica do seu
              guarda-roupa para eliminar excessos, identificar lacunas e
              organizar escolhas com mais clareza, elegância e funcionalidade.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-emerald-100 bg-[#fafaf8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
              O serviço
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-emerald-950 sm:text-5xl">
              Mais do que organizar peças, trata-se de reorganizar a relação com
              a própria imagem.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-stone-600">
            <p>
              Muitas mulheres já possuem boas peças, mas ainda convivem com a
              sensação de não ter um guarda-roupa verdadeiramente funcional,
              coerente ou representativo.
            </p>
            <p>
              O problema nem sempre está na quantidade. Está na falta de
              direção, consistência e leitura estratégica. Closet Intelligence
              foi criado para transformar esse cenário com critério e
              sofisticação.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
              O que este atendimento entrega
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-emerald-950 sm:text-5xl">
              Clareza visual para vestir-se com menos esforço e mais intenção.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-[28px] border border-emerald-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)]">
              <h3 className="font-serif text-2xl text-emerald-950">
                Diagnóstico do acervo
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                Leitura precisa do que faz sentido permanecer, do que está
                desalinhado e do que não sustenta mais sua imagem atual.
              </p>
            </article>

            <article className="rounded-[28px] border border-emerald-100 bg-[#fafaf8] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)]">
              <h3 className="font-serif text-2xl text-emerald-950">
                Organização por intenção
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                O closet passa a responder melhor à rotina, aos contextos e aos
                códigos de imagem que você realmente precisa comunicar.
              </p>
            </article>

            <article className="rounded-[28px] border border-emerald-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)]">
              <h3 className="font-serif text-2xl text-emerald-950">
                Identificação de lacunas
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                Fica claro o que falta para que seu guarda-roupa seja mais
                completo, sofisticado e funcional, sem compras aleatórias.
              </p>
            </article>

            <article className="rounded-[28px] border border-emerald-100 bg-[#f7f2f3] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)]">
              <h3 className="font-serif text-2xl text-emerald-950">
                Mais praticidade diária
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                Escolher o que vestir se torna um processo mais simples, fluido
                e coerente com a sua presença e com o seu momento de vida.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-emerald-100 bg-[#fcfcfb]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="rounded-[32px] border border-emerald-100 bg-white p-8 sm:p-10">
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
              Indicado para
            </span>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-emerald-950 sm:text-4xl">
              Mulheres que sentem que já possuem um bom guarda-roupa, mas não
              conseguem extrair dele clareza, sofisticação e consistência.
            </h2>
            <p className="mt-6 text-base leading-8 text-stone-600">
              Este serviço é ideal para quem deseja parar de acumular peças sem
              direção e começar a construir um acervo mais alinhado à própria
              identidade, à rotina e ao posicionamento que quer sustentar.
            </p>
          </div>

          <div className="rounded-[32px] border border-emerald-100 bg-[#f7f2f3] p-8 sm:p-10">
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
              Resultado
            </span>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-emerald-950 sm:text-4xl">
              Um closet que trabalha a seu favor e uma imagem que ganha
              consistência.
            </h2>
            <p className="mt-6 text-base leading-8 text-stone-600">
              O resultado é mais clareza nas escolhas, mais refinamento no
              vestir e uma base visual muito mais inteligente para a vida
              pessoal e profissional.
            </p>
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
              Transforme seu guarda-roupa em uma extensão coerente da sua
              presença.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-emerald-50/85">
              Um processo estratégico para reduzir excessos, aumentar a clareza
              e construir uma base visual mais sofisticada e funcional.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="https://wa.me/5514996244361"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-emerald-950 transition hover:bg-emerald-50"
              >
                Solicitar atendimento
              </Link>

              <Link
                href="/servicos"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:border-white hover:bg-white/5"
              >
                Ver outros serviços
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}