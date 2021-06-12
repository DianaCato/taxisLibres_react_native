import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { StackNavigator } from "react-navigation";
import DrawerStack from './src/stacks/drawerStacks';
import App from './App';

const Navigator=StackNavigator({
 drawerStack:{screen:DrawerStack}

},{
    headerMode:"none",
    initialRouteNAme:"drawerStack"
  })

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
