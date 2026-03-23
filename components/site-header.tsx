"use client";
{/* teste deploy */}
import Link from "next/link";
import { MobileMenu } from "@/components/mobile-menu";

const navigation = [
  { name: "Sobre", href: "/sobre" },
  { name: "Serviços", href: "/servicos" },
  { name: "Experiência", href: "/#como-funciona" },
  { name: "Consultoria", href: "/consultoria-imagem-estrategica" },
  { name: "Contato", href: "/#contato" },
];

export function SiteHeader() {
  return (
    <header className="relative z-50 bg-transparent">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-8 md:px-10 lg:px-16">
        <Link href="/" className="shrink-0">
          <div>
            <p className="font-serif text-2xl tracking-wide text-[#547b6a]">
              Laura Bianchi
            </p>
            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-neutral-500">
              Consultoria de Imagem
            </p>
          </div>
        </Link>

        <nav className="hidden gap-8 text-sm text-neutral-600 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition hover:text-[#547b6a]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}