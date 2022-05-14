import React from 'react';
import SwitchNavigator from './navigator/SwitchNavigator';
import MainContextProvider from './contexts/MainContext';
import application from './contexts/feathersApp';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  console.log(123444);
  return (
    <MainContextProvider application={application}>
      <PaperProvider>
        <SwitchNavigator />
      </PaperProvider>
    </MainContextProvider>
  );
};

export default App;
