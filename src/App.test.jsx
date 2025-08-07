import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './components/Header';
import { DataProvider } from './context/DataContext';

test('renders dashboard title', () => {
  render(
    <DataProvider>
      <Header />
    </DataProvider>
  );
  expect(screen.getByText(/dashboard/i)).toBeTruthy();
});
