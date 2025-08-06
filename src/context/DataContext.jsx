import React, { createContext, useState, useEffect } from 'react';
import dataJson from './mockData.json';

// Create a context to share data, date range, and filter across the app.
export const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [dateRange, setDateRange] = useState([null, null]);
  const [filter, setFilter] = useState('All');

  // Load data when the provider mounts. In a real app, you could fetch from an API.
  useEffect(() => {
    setData(dataJson);
    if (dataJson.length) {
      // Use the first and last dates from the dataset as the initial range.
      const start = new Date(dataJson[0].date);
      const end = new Date(dataJson[dataJson.length - 1].date);
      setDateRange([start, end]);
    }
  }, []);

  return (
    <DataContext.Provider
      value={{ data, dateRange, setDateRange, filter, setFilter }}
    >
      {children}
    </DataContext.Provider>
  );
}