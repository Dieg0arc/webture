import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">

      {/* nav glass */}
      <nav className="sticky top-6 z-20 flex w-full justify-center px-10">
        <div className="flex items-center gap-60 rounded-full border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-brand-500 via-[#7C3AED] font-bold">
              W
            </span>
            <span className="text-2xl font-semibold tracking-wide">Webture</span>
          </div>
          <ul className="hidden sm:flex gap-3 text-2xl text-white">
            <li><a className="rounded-full border border-transparent px-3 py-1 hover:border-white/15 hover:text-white transition" href="#servicios">Servicios</a></li>
            <li><a className="rounded-full border border-transparent px-3 py-1 hover:border-white/15 hover:text-white transition" href="#precios">Precios</a></li>
            <li><a className="rounded-full border border-transparent px-3 py-1 hover:border-white/15 hover:text-white transition" href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </nav>

      {/* hero */}
      <section className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-28 text-center">
        <h1 className="bg-gradient-to-br from-white to-white/70 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl md:text-7xl animate-fadeInUp">
          <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-[#7C3AED] to-brand-200">
            El futuro del desarrollo web esta aqui.
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-balance text-white sm:text-lg animate-fadeInUp [animation-delay:.15s]">
          Websites ultramodernos que potencian tu negocio
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fadeInUp [animation-delay:.25s]">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-lg text-white/60">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#7C3AED] to-fuchsia-100">
              En Webture estamos preparando el futuro del desarrollo web.
              <br />
              Vuelve pronto para descubrir nuestros servicios y precios.
            </span>
          </span>
        </div>
      </section>

      {/* footer */}
      <footer className="absolute inset-x-0 bottom-6 z-10 text-center text-sm text-white/50">
        {`© ${new Date().getFullYear()} Webture`}
      </footer>

      {/* borde interior suave */}
      <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/10 shadow-[inset_0_0_120px_rgba(168,85,247,0.15)]" />

      {/* boton de whatsapp */}
      <WhatsAppButton />
    </main>
  );
}
