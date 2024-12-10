import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import TaskScreen from './src/screens/TaskScreen';
import { globalStyles } from './src/styles/globalStyles';

export default function App() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar barStyle="light-content" backgroundColor={globalStyles.header.backgroundColor} />
      <TaskScreen />
    </SafeAreaView>
  );
}

