// components/DigitalBarberPole.tsx

"use client";
import React from 'react';

export default function DigitalBarberPole() {
  return (
    <div className="w-full h-1.5 relative overflow-hidden bg-black z-20">
      {/* Glow base */}
      <div className="absolute inset-0 bg-fuchsia-600/20 blur-[2px]"></div>
      {/* Rayas diagonales animadas */}
      <div className="absolute inset-0 opacity-80 bg-[linear-gradient(45deg,#c026d3_25%,transparent_25%,transparent_50%,#c026d3_50%,#c026d3_75%,transparent_75%,transparent)] bg-[length:40px_40px] animate-barber-slide shadow-[0_0_15px_rgba(217,70,239,0.5)]"></div>
    </div>
  );
}