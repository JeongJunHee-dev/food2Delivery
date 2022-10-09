import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator()


export default function DrawerNavigitor(){

    return(
        <Drawer.Navigator >

            <Drawer.Screen 
                name = "clientTabs"
            />

        </Drawer.Navigator>
    )

}