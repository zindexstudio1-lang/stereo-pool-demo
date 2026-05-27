// components/NeonGlowCursor.tsx

"use client"; // Crítico: Este componente solo corre en el navegador del cliente

import React, { useState, useEffect } from 'react';

export default function NeonGlowCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Función para actualizar las coordenadas del mouse
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    
    // Escuchar el movimiento del mouse
    window.addEventListener('mousemove', updateMousePosition);
    
    // Limpiar el escuchador cuando el componente se desmonte
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{
        background: `radial-gradient(
          800px circle at ${mousePosition.x}px ${mousePosition.y}px,
          rgba(192, 38, 211, 0.08),
          transparent 80%
        )`
      }}
    />
  );
}