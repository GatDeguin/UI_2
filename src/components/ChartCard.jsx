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
      <div className="bg-white/20 backdrop-blur-lg rounded-xl border border-white/20 w-full h-full overflow-hidden">
        <div className="p-4 w-full h-full flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
          {/* El área de contenido ocupa todo el espacio restante */}
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </motion.div>
  );
}