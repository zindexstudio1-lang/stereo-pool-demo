// app/page.tsx

import React from 'react';
import NeonGlowCursor from '@/components/NeonGlowCursor';
import DigitalBarberPole from '@/components/DigitalBarberPole';
import IntroLoader from '@/components/IntroLoader';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-600 selection:text-white font-sans overflow-x-hidden scroll-smooth relative">
      <IntroLoader />
      <NeonGlowCursor />

      {/* NAVBAR (Sin cambios) */}
      <nav className="w-full border-b border-zinc-900 bg-black/90 backdrop-blur-md fixed top-0 z-50 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-zinc-800 bg-zinc-900 flex justify-center items-center p-1.5 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
              <img src="/logo.png" alt="Stereo Pool Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <span className="font-black text-lg tracking-[0.25em] uppercase bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Stereo Pool
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest uppercase text-zinc-400">
            <a href="#inicio" className="hover:text-fuchsia-500 transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-fuchsia-500 transition-colors">Servicios</a>
            <a href="#ubicacion" className="hover:text-fuchsia-500 transition-colors">Ubicación</a>
            <a href="#contacto" className="bg-fuchsia-600/10 text-fuchsia-400 border border-fuchsia-500/30 px-4 py-2 rounded hover:bg-fuchsia-600 hover:text-white transition-all hover:shadow-[0_0_15px_rgba(192,38,211,0.5)]">Reserva</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION (Sin cambios) */}
      <header id="inicio" className="relative pt-40 pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center text-center min-h-[95vh] justify-center">
        <div className="absolute top-1/3 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-fuchsia-600/15 blur-[130px] rounded-full pointer-events-none z-0 animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-cyan-500/15 blur-[110px] rounded-full pointer-events-none z-0" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase text-white mb-6 leading-[0.95] drop-shadow-[0_0_35px_rgba(255,255,255,0.3)]">
            LUJO Y PRECISIÓN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-fuchsia-600 drop-shadow-[0_0_35px_rgba(192,38,211,0.5)]">
              EN CADA CORTE.
            </span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Una experiencia inmersiva que fusiona la barbería clásica con el lujo de vanguardia. Diseñado para quienes exigen perfección y exclusividad.
          </p>

          <a href="#contacto" className="inline-block bg-fuchsia-600 text-white font-extrabold tracking-widest uppercase text-sm px-10 py-5 rounded shadow-[0_0_35px_rgba(192,38,211,0.5)] hover:bg-fuchsia-500 hover:shadow-[0_0_60px_rgba(192,38,211,1)] active:scale-95 transition-all duration-300">
            RESERVA TU CITA AHORA
          </a>
        </div>
      </header>

      <DigitalBarberPole />

      {/* SECCIÓN DE SERVICIOS (Sin cambios) */}
      <section id="servicios" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-xs font-black tracking-[0.4em] uppercase text-fuchsia-500 mb-3 drop-shadow-[0_0_10px_rgba(217,70,239,0.5)]">// EXPERIENCIAS PREMIUM</h2>
          <p className="text-3xl md:text-4xl font-black uppercase tracking-wider text-white">NUESTRA CARTA</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Corte", desc: "Adaptado a tus facciones.", price: "S/. 45", icon: "M14 12v6m4 0V9a2 2 0 00-2-2H8a2 2 0 00-2 2v9m12-9a2 2 0 11-4 0m0 0a2 2 0 00-4 0m0 0a2 2 0 11-4 0" },
            { title: "Barba", desc: "Ritual tradicional y aceites.", price: "S/. 30", icon: "M20 12l-2.072 1.381A9 9 0 0110 16.5M19 19c-1-1-4-2-7-2s-6 1-7 2m13-13l-4 4m0 0l-4-4m4 4v11" },
            { title: "Color", desc: "Colorimetría avanzada y cuidado.", price: "S/. 80", icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
            { title: "Facial", desc: "Limpieza profunda e hidratación.", price: "S/. 40", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
          ].map((service, index) => (
            <div key={index} className="bg-zinc-950/40 border border-zinc-900 p-8 hover:border-fuchsia-500/60 transition-all duration-300 rounded-lg backdrop-blur-sm relative overflow-hidden group hover:shadow-[0_0_20px_rgba(192,38,211,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/0 via-fuchsia-600/5 to-fuchsia-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
              <div className="text-fuchsia-500 mb-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_5px_rgba(192,38,211,0.5)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d={service.icon} /></svg>
              </div>
              <h3 className="font-black text-xl uppercase tracking-wider mb-2 text-white">{service.title}</h3>
              <p className="text-sm text-zinc-500 mb-6 leading-relaxed font-light">{service.desc}</p>
              <div className="text-lg font-mono font-bold text-fuchsia-400 drop-shadow-[0_0_10px_rgba(192,38,211,0.5)]">{service.price}</div>
            </div>
          ))}
        </div>
      </section>

      <DigitalBarberPole />

      {/* UBICACIÓN - 👇 ACTUALIZADO CON EL CROQUIS REAL */}
      <section id="ubicacion" className="py-24 px-6 max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-xs font-black tracking-[0.4em] uppercase text-fuchsia-500 mb-3 drop-shadow-[0_0_10px_rgba(217,70,239,0.5)]">// ENCUÉNTRANOS</h2>
          <p className="text-3xl font-black uppercase tracking-wider text-white mb-6 leading-none">NUESTRA UBICACIÓN</p>
          <p className="text-zinc-400 mb-8 leading-relaxed max-w-md font-light">
            Visítanos en Comas. Un ambiente diseñado con mesas de pool, música en formato análogo y estacionamiento privado para tu total comodidad.
          </p>
          
          <div className="bg-zinc-950/60 border border-zinc-900 p-6 rounded-lg backdrop-blur-sm max-w-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/0 via-zinc-900/20 to-zinc-900/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
            <div className="text-sm font-bold uppercase tracking-wider mb-2 text-white">Sede Principal</div>
            <div className="text-sm text-zinc-400 font-light mb-4">Comas, Lima, Perú</div>
            <a href="https://maps.app.goo.gl/krCbFCbt9Pq3coMV7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              VER EN GOOGLE MAPS
            </a>
          </div>
        </div>
        {/* 👇 INYECTAMOS EL CROQUIS AQUÍ */}
        <div className="h-full aspect-[4/3] rounded bg-zinc-950 border border-zinc-900 overflow-hidden relative group shadow-[0_0_15px_rgba(192,38,211,0.1)] hover:border-fuchsia-500/40 transition-colors">
          <img 
            src="/mapa.png" 
            alt="Stereo Pool Croquis Comas" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
          />
        </div>
      </section>

      {/* SECCIÓN DE CONTACTO/WHATSAPP (Optimizada para Móvil y Desktop) */}
      <section id="contacto" className="py-16 md:py-24 px-6 max-w-4xl mx-auto border-t border-zinc-900 relative z-10">
        <div className="relative bg-black border-2 border-fuchsia-900/40 rounded-xl p-8 md:p-12 text-center shadow-[0_0_50px_rgba(192,38,211,0.2)] overflow-hidden group hover:border-cyan-500/40 transition-colors">
          
          {/* Luces de fondo del banner */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-600/10 blur-2xl rounded-full pointer-events-none group-hover:bg-cyan-600/20 transition-colors"></div>
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-fuchsia-600/10 blur-2xl rounded-full pointer-events-none group-hover:bg-fuchsia-600/20 transition-colors"></div>
          
          <h3 className="text-xl md:text-3xl font-black uppercase tracking-widest text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] leading-tight">
            RESERVA EXCLUSIVA <br className="hidden md:block"/> 
            POR <span className="text-emerald-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.7)]">WHATSAPP</span>
          </h3>
          
          <p className="text-xs md:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed mb-8 font-light">
            Vive la experiencia Stereo Pool agendando al instante con nuestro motor automatizado oficial. Sin esperas y en tiempo real.
          </p>
          
          <div className="flex flex-col items-center gap-6 relative z-10">
            
            <button className="inline-flex items-center justify-center gap-2 md:gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black tracking-widest text-[10px] md:text-xs uppercase px-6 md:px-10 py-4 md:py-5 rounded-full transition-all duration-300 active:scale-95 w-full sm:w-max shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)]">
              <svg className="w-5 h-5 md:w-6 md:h-6 fill-current flex-shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.428 1.977 13.961 1.96 11.33 1.96c-5.436 0-9.861 4.371-9.865 9.8a9.736 9.736 0 001.514 5.132L1.928 22.2l5.525-1.45c-.244-.143-.806-.473-.806-.473z"/>
              </svg>
              <span className="text-center">INICIAR RESERVA WHATSAPP</span>
            </button>
            
            <div className="flex items-center justify-center gap-2 text-[8px] md:text-[10px] text-emerald-500 font-mono tracking-widest uppercase bg-emerald-950/40 px-3 py-1.5 rounded border border-emerald-900 w-max">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              Meta API Partner Connected
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER (Sin cambios) */}
      <footer className="border-t border-zinc-900 bg-black py-10 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-600 gap-4">
          <div>© {new Date().getFullYear()} Stereo Pool Barber. Todos los derechos reservados. Lima, Perú.</div>
          <div className="font-mono tracking-widest uppercase text-[10px] text-zinc-500 bg-zinc-950 px-3 py-1.5 rounded">
            Engineered by <span className="text-white font-black drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">Z-INDEX STUDIO</span>
          </div>
        </div>
      </footer>

    </div>
  );
}