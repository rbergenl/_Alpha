import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@aardonyx/ui/app';
import { ThemeProvider } from 'styled-components/native';
import { getTheme } from './theme';

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={getTheme({ mode: 'light' })}>
      <View style={styles.container}>
        <Button variant="primary"><Text>Hello</Text></Button>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
