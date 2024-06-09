import React from 'react';
import {Provider} from 'react-redux';
import store from './src/state/store';
import {AppNavigation} from './src/navigation/AppNavigation';
import {ThemeProvider} from 'styled-components/native';
import {defaultTheme} from './src/theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <SafeAreaProvider>
          <AppNavigation />
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
