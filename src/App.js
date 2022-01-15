import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Location from './Location';
import AppProvider from './AppContext';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <Location />
        <Body />
      </AppProvider>
    </QueryClientProvider>
  );
}

function Body() {
  // const query = useLivePowerBreakdown();
  // console.log(query);

  return <div />;
}

export default App;
