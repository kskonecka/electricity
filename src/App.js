import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Location from './Location';
import AppProvider from './AppContext';
import DefinitionList from './DefinitionList';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <Location />
            <DefinitionList />
          </div>
        </div>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
