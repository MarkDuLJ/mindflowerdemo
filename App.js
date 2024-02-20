import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SettingsScreen from './src/screens/Settings';
import HomeScreen from './src/screens/Home';
import MedicationScreen from './src/screens/Medication';
import { BottomTabs } from './src/components/BottomTab';
import { MainNavigation } from './src/components/MainNavigator';

function App() {
  return (
    <>
    <NavigationContainer>
      <MainNavigation/>
 
    </NavigationContainer>

    </>
  );
}

export default App;