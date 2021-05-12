import React from 'react';
import {NavigationContainer} from '@react-navigation/native'

import AuthNavigator from './app/navigation/AuthNavigator';
import TestScreen from './app/screens/TestScreen';

// Default App, starts at welcome screen.
export default function App() {
  return (
    <TestScreen></TestScreen>
  );
}
