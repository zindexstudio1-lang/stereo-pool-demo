import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-600 selection:text-white font-sans overflow-x-hidden scroll-smooth">
      
      {/* 1. NAVBAR FIJO CON EFECTO BLUR */}
      <nav className="w-full border-b border-zinc-900 bg-black/80 backdrop-blur-md fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo real cargado desde la carpeta public */}
            <div className="w-12 h-12 rounded-full overflow-hidden border border-zinc-800 flex items-center justify-center bg-zinc-900">
              <img 
                src="/logo.png" 
                alt="Stereo Pool Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-black text-lg tracking-[0.25em] uppercase bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Stereo Pool
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest uppercase text-zinc-400">
            <a href="#inicio" className="hover:text-fuchsia-500 transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-fuchsia-500 transition-colors">Servicios</a>
            <a href="#staff" className="hover:text-fuchsia-500 transition-colors">Staff</a>
            <a href="#ubicacion" className="hover:text-fuchsia-500 transition-colors">Ubicación</a>
            <a href="#contacto" className="bg-fuchsia-600/10 text-fuchsia-400 border border-fuchsia-500/30 px-4 py-2 rounded hover:bg-fuchsia-600 hover:text-white transition-all">Reserva</a>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header id="inicio" className="relative pt-40 pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center text-center min-h-[90vh] justify-center">
        {/* Luces Neón de Fondo */}
        <div className="absolute top-1/3 left-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-fuchsia-600/10 blur-[120px] rounded-full pointer-events-none z-0 animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none z-0" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase text-white mb-6 leading-none">
            LUJO Y PRECISIÓN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-fuchsia-500 to-purple-600 drop-shadow-[0_0_30px_rgba(217,70,239,0.3)]">
              EN CADA CORTE.
            </span>
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg md:text-xl font-normal mb-12 max-w-2xl mx-auto leading-relaxed">
            Una experiencia inmersiva que combina el arte clásico de la barbería con un entorno premium exclusivo. Diseñado para quienes exigen perfección.
          </p>

          <a href="#contacto" className="inline-block bg-fuchsia-600 text-white font-extrabold tracking-widest uppercase text-sm px-10 py-5 rounded shadow-[0_0_35px_rgba(192,38,211,0.4)] hover:bg-fuchsia-500 hover:shadow-[0_0_50px_rgba(192,38,211,0.6)] active:scale-95 transition-all duration-300">
            RESERVA TU CITA
          </a>
        </div>
      </header>

      {/* 3. SECCIÓN DE SERVICIOS (EXPERTS EN...) */}
      <section id="servicios" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
        <div className="text-center mb-16">
          <h2 className="text-xs font-black tracking-[0.4em] uppercase text-fuchsia-500 mb-3">// SERVICIOS PREMIUM</h2>
          <p className="text-3xl md:text-4xl font-black uppercase tracking-wider">EXPERTS EN...</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Servicio 1 */}
          <div className="bg-zinc-950/40 border border-zinc-900 p-8 hover:border-fuchsia-500/50 transition-all group duration-300 rounded-lg backdrop-blur-sm relative overflow-hidden">
            <div className="text-fuchsia-500 mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.121 14.121L19 19m-4.879-4.879l4.879-4.879M12 12.334V21m0-18a2.333 2.333 0 000 4.666V12" /></svg>
            </div>
            <h3 className="font-black text-xl uppercase tracking-wider mb-2">CORTE</h3>
            <p className="text-sm text-zinc-500 mb-6 leading-relaxed">Estilo personalizado adaptado a tus facciones con acabado detallado.</p>
            <div className="text-lg font-mono font-bold text-fuchsia-400">S/. 45.00</div>
          </div>

          {/* Servicio 2 */}
          <div className="bg-zinc-950/40 border border-zinc-900 p-8 hover:border-fuchsia-500/50 transition-all group duration-300 rounded-lg backdrop-blur-sm relative overflow-hidden">
            <div className="text-fuchsia-500 mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" /></svg>
            </div>
            <h3 className="font-black text-xl uppercase tracking-wider mb-2">BARBA</h3>
            <p className="text-sm text-zinc-500 mb-6 leading-relaxed">Ritual tradicional con toallas calientes, navaja libre y aceites esenciales.</p>
            <div className="text-lg font-mono font-bold text-fuchsia-400">S/. 30.00</div>
          </div>

          {/* Servicio 3 */}
          <div className="bg-zinc-950/40 border border-zinc-900 p-8 hover:border-fuchsia-500/50 transition-all group duration-300 rounded-lg backdrop-blur-sm relative overflow-hidden">
            <div className="text-fuchsia-500 mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="font-black text-xl uppercase tracking-wider mb-2">PLATINADO</h3>
            <p className="text-sm text-zinc-500 mb-6 leading-relaxed">Colorimetría global de vanguardia protegiendo la estructura capilar.</p>
            <div className="text-lg font-mono font-bold text-fuchsia-400">S/. 80.00</div>
          </div>

          {/* Servicio 4 */}
          <div className="bg-zinc-950/40 border border-zinc-900 p-8 hover:border-fuchsia-500/50 transition-all group duration-300 rounded-lg backdrop-blur-sm relative overflow-hidden">
            <div className="text-fuchsia-500 mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h3 className="font-black text-xl uppercase tracking-wider mb-2">FACIAL</h3>
            <p className="text-sm text-zinc-500 mb-6 leading-relaxed">Limpieza profunda, exfoliación ultrasónica y mascarilla hidratante.</p>
            <div className="text-lg font-mono font-bold text-fuchsia-400">S/. 40.00</div>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN DE STAFF */}
      <section id="staff" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
        <div className="text-center mb-16">
          <h2 className="text-xs font-black tracking-[0.4em] uppercase text-fuchsia-500 mb-3">// NUESTRO EQUIPO</h2>
          <p className="text-3xl md:text-4xl font-black uppercase tracking-wider">NUESTRO STAFF</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="group relative rounded-lg overflow-hidden border border-zinc-900 bg-zinc-950/40 p-4 flex flex-col items-center">
              <div className="w-full aspect-[4/5] rounded bg-zinc-900 relative overflow-hidden mb-4 border border-zinc-800 group-hover:border-fuchsia-500/50 transition-colors duration-300">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-mono text-xs uppercase">
                  [ FOTO ]
                </div>
              </div>
              <h4 className="font-bold text-sm tracking-widest uppercase mb-1">MARKUS K.</h4>
              <p className="text-xs text-fuchsia-500 tracking-wider uppercase font-mono">Master Barber</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. UBICACIÓN Y CONTACTO DE CONVERSIÓN */}
      <section id="ubicacion" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Lado Izquierdo: Ubicación */}
        <div>
          <h2 className="text-xs font-black tracking-[0.4em] uppercase text-fuchsia-500 mb-3">// ENCUÉNTRANOS</h2>
          <p className="text-3xl font-black uppercase tracking-wider mb-6">NUESTRA UBICACIÓN</p>
          <p className="text-zinc-400 mb-8 leading-relaxed max-w-md">
            Visítanos en nuestra sede principal. Un ambiente diseñado con mesas de pool, música en formato análogo y estacionamiento privado para tu total comodidad.
          </p>
          
          <div className="bg-zinc-950/60 border border-zinc-900 p-6 rounded-lg backdrop-blur-sm max-w-md">
            <div className="text-sm font-bold uppercase tracking-wider mb-2">Dirección</div>
            <div className="text-sm text-zinc-400 font-light mb-4">Stereo Pool Barber, Comas, Lima, Perú</div>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              VER EN GOOGLE MAPS
            </a>
          </div>
        </div>

        {/* Lado Derecho: Banner de Conversión WhatsApp API */}
        <div id="contacto" className="bg-zinc-950 border-2 border-fuchsia-900/40 rounded-xl p-8 md:p-12 text-center relative overflow-hidden shadow-[0_0_50px_rgba(192,38,211,0.1)]">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-fuchsia-600/10 blur-2xl rounded-full pointer-events-none"></div>
          
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest text-white mb-4">
            RESERVA EXCLUSIVA <br /> POR WHATSAPP
          </h3>
          
          <p className="text-xs text-zinc-500 max-w-sm mx-auto leading-relaxed mb-8">
            Interactúa con nuestro motor automatizado en tiempo real. Agenda, reagenda o cancela tus citas de forma inmediata sin esperas telefónicas.
          </p>
          
          <button className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black tracking-widest text-xs uppercase px-8 py-4 rounded-full transition-all duration-300 active:scale-95 w-full shadow-[0_0_25px_rgba(16,185,129,0.2)]">
            {/* Icono de WhatsApp */}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.428 1.977 13.961 1.96 11.33 1.96c-5.436 0-9.861 4.371-9.865 9.8a9.736 9.736 0 001.514 5.132L1.928 22.2l5.525-1.45c-.244-.143-.806-.473-.806-.473z"/></svg>
            RESERVA WHATSAPP
          </button>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-[10px] text-zinc-600 font-mono tracking-widest uppercase">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
            Meta API Partner Connected
          </div>
        </div>

      </section>

      {/* 6. FOOTER CORPORATIVO */}
      <footer className="border-t border-zinc-900 bg-black py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-600 gap-4">
          <div>© {new Date().getFullYear()} Stereo Pool Barber. Todos los derechos reservados.</div>
          <div className="font-mono tracking-widest uppercase text-[10px] text-zinc-500">
            Engineered by <span className="text-white font-bold">Z-INDEX STUDIO</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
