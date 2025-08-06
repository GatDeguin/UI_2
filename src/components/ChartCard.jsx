import React from 'react';
import { motion } from 'framer-motion';

/**
 * Contenedor animado reutilizable para cualquier gráfico o KPI.
 * Se le pasa un título y, como children, el gráfico o dato a renderizar.
 */
export default function ChartCard({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      className="w-full h-full"
    >
      <div className="bg-white/20 backdrop-blur-xl border border-white/30 shadow-md rounded-[40px] shadow-inner drop-shadow w-full h-full overflow-hidden">
        <div className="p-8 w-full h-full flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          {/* El área de contenido ocupa todo el espacio restante */}
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </motion.div>
  );
}