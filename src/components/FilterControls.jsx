import React, { useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DataContext } from '../context/DataContext';

/**
 * Componente de control para seleccionar el rango de fechas.
 */
export default function FilterControls() {
  const { dateRange, setDateRange } = useContext(DataContext);
  const [startDate, endDate] = dateRange;

  return (
    <div className="flex items-center space-x-2 mt-2 text-white">
      <DatePicker
        selected={startDate}
        onChange={(date) => setDateRange([date, endDate])}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat="yyyy-MM-dd"
        className="bg-white/20 backdrop-blur p-2 rounded-lg text-black"
      />
      <span className="text-white">a</span>
      <DatePicker
        selected={endDate}
        onChange={(date) => setDateRange([startDate, date])}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        dateFormat="yyyy-MM-dd"
        className="bg-white/20 backdrop-blur p-2 rounded-lg text-black"
      />
    </div>
  );
}