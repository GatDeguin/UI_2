import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3 } from 'lucide-react';

/**
 * Contenedor animado reutilizable para cualquier gráfico o KPI.
 * Se le pasa un título y, como children, el gráfico o dato a renderizar.
 */
export default function ChartCard({ title, children }) {
  const transition = { duration: 0.4, ease: 'easeOut' };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
      whileHover={{ y: -4, transition }}
      className="w-full h-full drop-shadow-lg"
    >
      <div className="bg-white/20 backdrop-blur-xl border border-white/30 shadow-md rounded-2xl sm:rounded-3xl lg:rounded-[40px] shadow-inner w-full h-full overflow-hidden">
        <div className="p-4 sm:p-6 lg:p-8 w-full h-full flex flex-col gap-4 sm:gap-6 lg:gap-8">
          <h3 className="flex items-center gap-2 text-2xl font-modern font-semibold text-white">
            <BarChart3 className="w-6 h-6 text-blue-300" />
            {title}
          </h3>
          {/* El área de contenido ocupa todo el espacio restante */}
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </motion.div>
  );
}