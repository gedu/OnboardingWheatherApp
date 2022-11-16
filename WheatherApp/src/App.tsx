import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { queryClient } from '@services/remote-data-source/networking/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { MainNavigation } from 'src/navigation/MainNavigation';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
