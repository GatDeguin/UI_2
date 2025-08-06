import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { LayoutDashboard, Filter } from 'lucide-react';

/**
 * Encabezado del dashboard. Muestra el título y el selector de filtro.
 */
export default function Header() {
  const { filter, setFilter } = useContext(DataContext);
  return (
    <div className="flex items-center justify-between mb-4">
      <h1 className="flex items-center gap-2 text-4xl font-modern font-bold text-white">
        <LayoutDashboard className="w-6 h-6 text-pink-300" />
        Dashboard
      </h1>
      <div className="flex items-center gap-2">
        <Filter className="w-6 h-6 text-pink-300" />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-white/20 backdrop-blur text-white p-2 rounded-lg font-modern text-lg"
        >
          <option value="All">Todos</option>
          <option value="Revenue">Revenue</option>
          <option value="Sales">Sales</option>
          <option value="Visitors">Visitors</option>
        </select>
      </div>
    </div>
  );
}