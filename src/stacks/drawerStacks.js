import { StackNavigator } from "react-navigation";
import { TouchableHightlight,Text,View } from "react-native";
import DrawerScreen from './drawerScreen';

const DrawerNavigation=StackNavigator({
    DrawerStack:{screen:DrawerScreen}},
    {
headerMode:'float',
navigationOptions:({navigation})=>({
    headerStyle:{
           backgroundcolor:'black',
           paddingLeft:10,
           paddingRight:10
    },
    title:'Home',
    headerTinColor:'white',
    headerLeft:<View>
        <TouchableHightlight
        onPress={()=>{
            navigation.navigate('DrawerOpen');
        }}>
          <Text>Menu</Text>
        </TouchableHightlight>
    </View>
})
}
)
export default DrawerNavigation