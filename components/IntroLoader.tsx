// components/IntroLoader.tsx

"use client";
import React, { useState, useEffect } from 'react';

export default function IntroLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // La animación durará 2.5 segundos antes de revelar la página
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-transform duration-1000 ease-[cubic-bezier(0.7,0,0.3,1)] ${
        loading ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Glows de fondo fusionando el Fucsia con tu idea del Azul */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-fuchsia-600 blur-[60px] opacity-40 animate-pulse rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 blur-[80px] opacity-20 animate-pulse delay-700 rounded-full"></div>
        
        {/* Logo flotando */}
        <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-fuchsia-500/50 p-2 animate-bounce shadow-[0_0_40px_rgba(192,38,211,0.5)] bg-zinc-900 flex items-center justify-center">
          <img src="/logo.png" alt="Cargando Stereo Pool..." className="w-[85%] h-[85%] object-cover rounded-full" />
        </div>
        
        {/* Texto de carga inmersivo */}
        <div className="mt-10 font-black tracking-[0.4em] text-[10px] sm:text-xs text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-600 animate-pulse uppercase">
          Preparando tu asiento...
        </div>
        
        {/* Barra de progreso láser */}
        <div className="w-48 h-[2px] mt-6 bg-zinc-900 rounded-full overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-all duration-[2000ms] ease-out w-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
        </div>
      </div>
    </div>
  );
}