import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

/**
 * Encabezado del dashboard. Muestra el título y el selector de filtro.
 */
export default function Header() {
  const { filter, setFilter } = useContext(DataContext);
  return (
    <div className="flex items-center justify-between mb-2">
      <h1 className="text-2xl font-bold text-white">Dashboard</h1>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="bg-white/20 backdrop-blur text-white p-2 rounded-lg"
      >
        <option value="All">Todos</option>
        <option value="Revenue">Revenue</option>
        <option value="Sales">Sales</option>
        <option value="Visitors">Visitors</option>
      </select>
    </div>
  );
}