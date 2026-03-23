"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Serviços", href: "/servicos" },
  { name: "Experiência", href: "/#como-funciona" },
  { name: "Consultoria", href: "/consultoria-imagem-estrategica" },
  { name: "Closet Intelligence", href: "/closet-intelligence" },
  { name: "Personal Shopping", href: "/personal-shopping" },
  { name: "Styling Executivo", href: "/styling-executivo" },
  { name: "Contato", href: "/#contato" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d8e8df] bg-[#f6fbf8] text-[#547b6a] transition hover:opacity-90"
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 7h16" />
            <path d="M4 12h16" />
            <path d="M4 17h16" />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          />

          <div className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white px-6 pb-8 pt-6 shadow-2xl">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <p className="font-serif text-2xl tracking-wide text-[#547b6a]">
                  Laura Bianchi
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                  Consultoria de Imagem
                </p>
              </div>

              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d8e8df] bg-[#f6fbf8] text-[#547b6a] transition hover:opacity-90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-5">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`pb-4 font-serif text-2xl text-neutral-900 transition hover:text-[#547b6a] ${
                    index < navigation.length - 1
                      ? "border-b border-neutral-100"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto space-y-4 pt-10">
              <Link
                href="https://wa.me/5514996244361"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#547b6a] px-5 py-3 text-sm font-medium tracking-wide text-white transition hover:opacity-90"
              >
                Agendar Consultoria
              </Link>

              <Link
                href="mailto:24hcloset@gmail.com"
                onClick={() => setOpen(false)}
                className="block text-center text-sm text-neutral-600 transition hover:text-[#547b6a]"
              >
                24hcloset@gmail.com
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}