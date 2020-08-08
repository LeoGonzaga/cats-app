import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  useColorScheme,
  StatusBar,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from 'styled-components';
import Themes from './src/Themes/index';

import Login from './src/Views/Login/index';
const Stack = createStackNavigator();

function App() {
  const deviceTheme = useColorScheme();
  const theme = Themes[deviceTheme] || Themes.Light;
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="green" />
      <ThemeProvider theme={theme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
