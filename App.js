import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs'
import MapScreen from './src/screens/MapScreen'
import MapListScreen from './src/screens/MapListScreen'
import Login from './src/screens/login'
import { setNavigator } from './src/navigationRef'

const switchNavigator = createSwitchNavigator({
  mainFlow: createMaterialTopTabNavigator({
    Login:Login,
    MapView: MapScreen,
    MapList: MapListScreen
  })
})

const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <App 
      ref={navigator => {
        setNavigator(navigator)
      }}
    />
  );
}

// const App = createSwitchNavigator({
  
//   Auth: {
//     screen: switchNavigator,
//   },
  
// });

// export default createAppContainer(App);