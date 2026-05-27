import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-zinc-800 selection:text-white relative overflow-hidden font-sans">
      
      {/* EFECTO DE GLOW / RADIAL GRADIENT EN EL FONDO */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/60 via-neutral-950 to-neutral-950 pointer-events-none z-0" />

      {/* NAVBAR MINIMALISTA */}
      <nav className="relative z-10 max-w-7xl mx-auto px-6 h-24 flex items-center justify-between border-b border-zinc-900">
        <div className="flex items-center gap-3">
          {/* Marcador de posición para su Isotipo/Logo */}
          <div className="w-9 h-9 bg-gradient-to-tr from-white to-zinc-500 rounded-lg flex items-center justify-center font-black text-black text-sm tracking-tighter">
            SP
          </div>
          <span className="font-bold text-lg tracking-wider uppercase text-zinc-200 hidden sm:block">
            Stereo Pool
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-xs text-zinc-500 font-mono tracking-widest uppercase hidden md:block">
            // Next.js Infrastructure
          </span>
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>
      </nav>

      {/* HERO SECTION PRINCIPAL */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-32 text-center flex flex-col items-center justify-center min-h-[calc(100vh-96px)]">
        
        {/* BADGE DE ALTA VELOCIDAD */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-medium text-zinc-400 mb-8 backdrop-blur-sm animate-fade-in">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-300"></span>
          </span>
          Rendimiento Ultra-Rápido Core Vercel (Fuera de WordPress)
        </div>

        {/* TITULAR PRINCIPAL (H1) CON DEGRADADO DE TEXTO */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] mb-6">
          El Nivel Supremo de la{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600">
            Barbería en Lima.
          </span>
        </h1>

        {/* SUBTÍTULO COMERCIAL */}
        <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed mb-12">
          Más que un corte, una experiencia inmersiva de alta fidelidad. Lujo, precisión, sonido análogo y pool club en un solo espacio. Agenda al instante sin intermediarios lentos.
        </p>

        {/* BOTONES DE LLAMADO A LA ACCIÓN (CTA) ESTILO SAAS */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-white text-black text-sm font-semibold rounded-full px-8 py-3.5 hover:bg-zinc-200 active:scale-95 transition-all duration-200 shadow-[0_0_25px_rgba(255,255,255,0.15)]">
            Reservar una Cita
          </button>
          <button className="w-full sm:w-auto bg-zinc-900/50 text-zinc-300 text-sm font-semibold rounded-full px-8 py-3.5 border border-zinc-800 hover:bg-zinc-900 hover:text-white active:scale-95 transition-all duration-200 backdrop-blur-sm">
            Ver Carta de Servicios
          </button>
        </div>

        {/* LAS PÍLDORAS TÉCNICAS (EL GANCHO PARA EL PANEL BACKEND) */}
        <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-zinc-900 pt-10 text-left">
          
          <div className="p-4 rounded-xl bg-zinc-900/20 border border-zinc-900/60 backdrop-blur-sm">
            <div className="text-zinc-200 font-semibold text-sm mb-1 flex items-center gap-2">
              <span className="text-zinc-500">01.</span> Reservas en Tiempo Real
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Base de datos PostgreSQL directa. Olvídate de los retrasos e interferencias de plugins externos de terceros.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/20 border border-zinc-900/60 backdrop-blur-sm">
            <div className="text-zinc-200 font-semibold text-sm mb-1 flex items-center gap-2">
              <span className="text-zinc-500">02.</span> Automatización WhatsApp
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Confirmaciones automáticas y flujos de recordatorio integrados directamente a través de la API Oficial de Meta.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/20 border border-zinc-900/60 backdrop-blur-sm">
            <div className="text-zinc-200 font-semibold text-sm mb-1 flex items-center gap-2">
              <span className="text-zinc-500">03.</span> Panel Multi-Tenant
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Control de sucursales unificado, analíticas de rendimiento por barbero e historial financiero centralizado.
            </p>
          </div>

        </div>

      </main>

      {/* FOOTER DISCRETO */}
      <footer className="relative z-10 max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-600 border-t border-zinc-900">
        <div>&copy; {new Date().getFullYear()} Stereo Pool Barber. Concepto tecnológico de prueba.</div>
        <div className="mt-2 sm:mt-0 font-mono tracking-tight">Engineered by Z-INDEX STUDIO</div>
      </footer>

    </div>
  );
}