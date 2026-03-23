import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Serviços", href: "/servicos" },
  {
    name: "Consultoria de Imagem Estratégica",
    href: "/consultoria-imagem-estrategica",
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-emerald-100 bg-[#fafaf8]">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div className="max-w-md">
          <h3 className="font-serif text-3xl font-semibold text-emerald-950">
            Laura Bianchi
          </h3>
          <p className="mt-4 text-sm leading-7 text-stone-600">
            Consultoria de imagem e estilo para mulheres que querem se vestir
            com elegância, autoridade e autenticidade.
          </p>
          <p className="mt-4 text-sm leading-7 text-stone-600">
            Imagem estratégica para mulheres que desejam alinhar presença,
            sofisticação e identidade pessoal.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-xl text-emerald-950">Navegação</h4>
          <nav className="mt-5 flex flex-col gap-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-stone-600 transition-colors duration-300 hover:text-emerald-900"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-serif text-xl text-emerald-950">Contato</h4>
          <div className="mt-5 space-y-4">
            <Link
              href="https://wa.me/5514996244361"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-emerald-900 bg-emerald-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-800"
            >
              Falar no WhatsApp
            </Link>

            <div>
              <Link
                href="mailto:24hcloset@gmail.com"
                className="text-sm text-stone-600 transition-colors duration-300 hover:text-emerald-900"
              >
                24hcloset@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-emerald-100">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-stone-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Laura Bianchi. Todos os direitos reservados.</p>
          <p>Sofisticação, presença e imagem estratégica.</p>
        </div>
      </div>
    </footer>
  );
}   