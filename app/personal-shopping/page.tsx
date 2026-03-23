import Link from "next/link";

export default function PersonalShoppingPage() {
  return (
    <main className="bg-white text-stone-800">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(214,233,223,0.32),_transparent_38%),radial-gradient(circle_at_bottom_left,_rgba(244,225,229,0.22),_transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-8 lg:pb-28 lg:pt-32">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.28em] text-emerald-900">
              Personal Shopping
            </span>

            <h1 className="mt-8 font-serif text-5xl leading-tight text-emerald-950 sm:text-6xl lg:text-7xl">
              Comprar melhor, com critério, direção e sofisticação.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
              Personal Shopping é um serviço para mulheres que desejam fazer
              escolhas mais inteligentes, evitar compras equivocadas e investir
              em peças que realmente fortaleçam sua imagem.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-emerald-100 bg-[#fafaf8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
              Direção estratégica
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-emerald-950 sm:text-5xl">
              Cada compra deixa de ser uma tentativa e passa a ser uma decisão
              alinhada à sua imagem.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-stone-600">
            <p>
              Quando não existe clareza estética, até mulheres com excelente
              repertório acabam comprando por impulso, repetindo erros ou
              investindo em peças que não sustentam a imagem que desejam
              transmitir.
            </p>
            <p>
              O Personal Shopping oferece curadoria e direção para que cada
              escolha seja coerente com estilo, contexto, funcionalidade e
              posicionamento.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
              O que este serviço contempla
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-emerald-950 sm:text-5xl">
              Compras orientadas por intenção, não por impulso.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-[28px] border border-emerald-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)]">
              <h3 className="font-serif text-2xl text-emerald-950">
                Curadoria de peças
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                Seleção com base em estilo, imagem desejada, rotina,
                proporcionalidade e coerência com o guarda-roupa existente.
              </p>
            </article>

            <article className="rounded-[28px] border border-emerald-100 bg-[#fafaf8] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)]">
              <h3 className="font-serif text-2xl text-emerald-950">
                Redução de erros
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                O processo evita compras desconectadas, peças pouco funcionais e
                investimentos que não agregam valor real à sua imagem.
              </p>
            </article>

            <article className="rounded-[28px] border border-emerald-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)]">
              <h3 className="font-serif text-2xl text-emerald-950">
                Consistência visual
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                As novas aquisições passam a conversar entre si e com o que você
                já possui, elevando a sofisticação do acervo.
              </p>
            </article>

            <article className="rounded-[28px] border border-emerald-100 bg-[#f7f2f3] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)]">
              <h3 className="font-serif text-2xl text-emerald-950">
                Compras com mais segurança
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                Você compra com mais clareza, mais precisão e menos desgaste,
                mantendo foco naquilo que realmente sustenta sua presença.
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
              Mulheres que querem investir melhor no vestir e construir um
              acervo mais elegante e intencional.
            </h2>
            <p className="mt-6 text-base leading-8 text-stone-600">
              Ideal para quem sente que compra demais sem resultado,
              procrastina decisões por insegurança ou deseja direcionamento
              refinado para atualizar a própria imagem.
            </p>
          </div>

          <div className="rounded-[32px] border border-emerald-100 bg-[#f7f2f3] p-8 sm:p-10">
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
              Resultado
            </span>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-emerald-950 sm:text-4xl">
              Peças certas, escolhas mais inteligentes e uma imagem mais
              consistente.
            </h2>
            <p className="mt-6 text-base leading-8 text-stone-600">
              O resultado é um guarda-roupa mais forte, compras mais conscientes
              e uma estética que evolui com critério, sem desperdício e sem
              improviso.
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
              Compre menos por impulso e mais em favor da sua imagem.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-emerald-50/85">
              Um processo pensado para transformar compras em escolhas
              estratégicas, elegantes e coerentes com quem você é.
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