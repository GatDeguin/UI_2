import React, { useContext, useMemo } from 'react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { format, isWithinInterval } from 'date-fns';
import { DataContext } from '../context/DataContext';
import ChartCard from './ChartCard';

const formatDate = (d) => format(new Date(d), 'MMM d');

// Colores pastel coherentes para todos los gráficos
const pastelStroke = '#a5b4fc';
const pastelFill = '#a5b4fc66';

/**
 * Filtra los datos por rango de fechas (dateRange) que viene del contexto.
 */
function useFilteredData(data, dateRange) {
  return useMemo(() => {
    if (!data) return [];
    const [start, end] = dateRange;
    return data.filter((d) =>
      isWithinInterval(new Date(d.date), { start, end })
    );
  }, [data, dateRange]);
}

export default function DashboardOverlay() {
  const { data, dateRange, filter } = useContext(DataContext);
  const chartData = useFilteredData(data, dateRange);

  if (!chartData.length) {
    return (
      <div className="col-span-3 row-span-2 flex items-center justify-center text-white/80">
        Cargando datos&hellip;
      </div>
    );
  }

  /**
   * Decide qué tarjetas mostrar según el filtro.
   * El grid padre (creado en App.jsx) tiene 3 columnas × 2 filas.
   */
  const cards = [];

  const allOr = (name) => filter === 'All' || filter === name;

  if (allOr('Revenue')) {
    cards.push(
      <ChartCard key="revenue" title="Revenue (USD)">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={pastelStroke} stopOpacity={0.4} />
                <stop offset="95%" stopColor={pastelStroke} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="date"
              tickFormatter={formatDate}
              stroke="#ffffff"
              strokeOpacity={0.2}
              tickLine={false}
            />
            <YAxis
              stroke="#ffffff"
              strokeOpacity={0.2}
              tickFormatter={(v) => `$${v / 1000}k`}
              tickLine={false}
              width={40}
            />
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" strokeOpacity={0.2} />
            <Tooltip
              labelFormatter={(l) => formatDate(l)}
              formatter={(v) => `$${v.toLocaleString()}`}
              contentStyle={{ background: 'rgba(0,0,0,0.5)', border: 'none' }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke={pastelStroke}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="url(#colorRev)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>
    );
  }

  if (allOr('Sales')) {
    cards.push(
      <ChartCard key="sales" title="Sales (Units)">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis
              dataKey="date"
              tickFormatter={formatDate}
              stroke="#ffffff"
              strokeOpacity={0.2}
              tickLine={false}
            />
            <YAxis
              stroke="#ffffff"
              strokeOpacity={0.2}
              tickLine={false}
              width={40}
            />
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" strokeOpacity={0.2} />
            <Tooltip
              labelFormatter={(l) => formatDate(l)}
              contentStyle={{ background: 'rgba(0,0,0,0.5)', border: 'none' }}
            />
            <Bar
              dataKey="sales"
              stroke={pastelStroke}
              fill={pastelFill}
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    );
  }

  if (allOr('Visitors')) {
    cards.push(
      <ChartCard key="visitors" title="Visitors">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis
              dataKey="date"
              tickFormatter={formatDate}
              stroke="#ffffff"
              strokeOpacity={0.2}
              tickLine={false}
            />
            <YAxis
              stroke="#ffffff"
              strokeOpacity={0.2}
              tickLine={false}
              width={40}
            />
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" strokeOpacity={0.2} />
            <Tooltip
              labelFormatter={(l) => formatDate(l)}
              formatter={(v) => v.toLocaleString()}
              contentStyle={{ background: 'rgba(0,0,0,0.5)', border: 'none' }}
            />
            <Line
              type="monotone"
              dataKey="visitors"
              stroke={pastelStroke}
              fill={pastelFill}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
    );
  }

  /**
   * Rellenamos el grid con tarjetas “vacías” para mantener la cuadrícula estable
   * si el usuario elige un filtro individual.
   */
  while (cards.length < 6) {
    cards.push(<div key={`spacer-${cards.length}`} />);
  }

  return <>{cards}</>;
}