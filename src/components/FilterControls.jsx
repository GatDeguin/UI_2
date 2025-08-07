import React, { useContext, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DataContext } from '../context/DataContext';
import { Calendar, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const AnimatedCalendar = ({ className, children }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.div>
);

const DateInput = forwardRef(({ value, onClick, label }, ref) => (
  <button
    type="button"
    onClick={onClick}
    ref={ref}
    className="flex items-center space-x-2 focus:outline-none"
  >
    <Calendar className="w-4 h-4 text-white" />
    <span className="text-white">{value || label}</span>
    <ChevronDown className="w-4 h-4 text-white" />
  </button>
));

/**
 * Componente de control para seleccionar el rango de fechas.
 */
export default function FilterControls() {
  const { dateRange, setDateRange } = useContext(DataContext);
  const [startDate, endDate] = dateRange;

  return (
    <div className="flex items-center space-x-2 mt-2 text-white">
      <div className="bg-white/20 backdrop-blur rounded-lg p-2">
        <DatePicker
          selected={startDate}
          onChange={(date) => setDateRange([date, endDate])}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="yyyy-MM-dd"
          customInput={<DateInput label="Inicio" />}
          calendarContainer={AnimatedCalendar}
        />
      </div>
      <span className="text-white">a</span>
      <div className="bg-white/20 backdrop-blur rounded-lg p-2">
        <DatePicker
          selected={endDate}
          onChange={(date) => setDateRange([startDate, date])}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="yyyy-MM-dd"
          customInput={<DateInput label="Fin" />}
          calendarContainer={AnimatedCalendar}
        />
      </div>
    </div>
  );
}
