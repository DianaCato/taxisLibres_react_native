
import {DrawerNavigator} from 'react-navigation';

import Screen from '../components/screen';
import DrawerNavigation from './drawerStacks';

const DrawerScreen=DrawerNavigation({
    Screen:{screen:Screen},
},{
    headerMode:'none',


})
export default DrawerScreen;