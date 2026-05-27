import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-600 selection:text-white font-sans overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="w-full border-b border-zinc-900 bg-black/80 backdrop-blur-md fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo Placeholder */}
            <div className="w-10 h-10 rounded-full border-2 border-fuchsia-600 flex items-center justify-center font-black text-sm tracking-tighter">
              SP
            </div>
            <span className="font-bold text-xl tracking-[0.2em] uppercase">Stereo Pool</span>
          </div>
          <div className="hidden md:flex gap-8 text-xs font-bold tracking-widest uppercase text-zinc-400">
            <a href="#" className="hover:text-fuchsia-500 transition-colors">Inicio</a>
            <a href="#" className="hover:text-fuchsia-500 transition-colors">Servicios</a>
            <a href="#" className="hover:text-fuchsia-500 transition-colors">Historia</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center min-h-screen justify-center">
        
        {/* Efecto Glow Neon de Fondo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-fuchsia-600/20 blur-[100px] rounded-full pointer-events-none z-0"></div>

        <div className="relative z-10 w-full max-w-5xl mx-auto">
          
          {/* Titular Idéntico al Original pero más impactante */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-widest uppercase text-white mb-6 leading-[1.1] drop-shadow-2xl">
            Lujo y Precisión <br className="hidden sm:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600">
              En Cada Corte
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-zinc-300 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
            Ofrecemos una experiencia exclusiva con servicios premium y barberos altamente calificados. Sistema de reservas integrado.
          </p>

          {/* Botón Principal (Neón) */}
          <button className="bg-fuchsia-600 text-white font-black tracking-widest uppercase px-12 py-5 rounded-md hover:bg-fuchsia-500 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(192,38,211,0.5)]">
            Reservar Ahora
          </button>
        </div>

        {/* SECCIÓN SERVICIOS (Para demostrar la estructura limpia B2B) */}
        <div className="relative z-10 w-full mt-32 border-t border-zinc-900 pt-16">
          <h2 className="text-2xl font-bold tracking-[0.3em] uppercase text-center mb-12">Expertos En</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
            
            {/* Card 1 */}
            <div className="bg-zinc-950/50 border border-zinc-800 hover:border-fuchsia-500 p-8 transition-colors group cursor-pointer backdrop-blur-sm">
              <h3 className="font-black text-xl uppercase tracking-widest mb-3 text-fuchsia-500 group-hover:text-white transition-colors">Corte</h3>
              <p className="text-sm text-zinc-500">Diseños clásicos y modernos con precisión quirúrgica.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-950/50 border border-zinc-800 hover:border-fuchsia-500 p-8 transition-colors group cursor-pointer backdrop-blur-sm">
              <h3 className="font-black text-xl uppercase tracking-widest mb-3 text-fuchsia-500 group-hover:text-white transition-colors">Barba</h3>
              <p className="text-sm text-zinc-500">Perfilado, ritual de toallas calientes y productos premium.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-950/50 border border-zinc-800 hover:border-fuchsia-500 p-8 transition-colors group cursor-pointer backdrop-blur-sm">
              <h3 className="font-black text-xl uppercase tracking-widest mb-3 text-fuchsia-500 group-hover:text-white transition-colors">Platinado</h3>
              <p className="text-sm text-zinc-500">Colorimetría avanzada cuidando la salud de tu cabello.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-zinc-950/50 border border-zinc-800 hover:border-fuchsia-500 p-8 transition-colors group cursor-pointer backdrop-blur-sm">
              <h3 className="font-black text-xl uppercase tracking-widest mb-3 text-fuchsia-500 group-hover:text-white transition-colors">Facial</h3>
              <p className="text-sm text-zinc-500">Limpieza profunda y exfoliación para renovar tu piel.</p>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}