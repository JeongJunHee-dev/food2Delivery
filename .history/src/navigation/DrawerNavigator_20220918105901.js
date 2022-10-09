import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTabs from './ClientTabs';


const Drawer = createDrawerNavigator()


export default function DrawerNavigitor(){

    return(
        <Drawer.Navigator >

            <Drawer.Screen 
                name = "RootClientTabs"
                component = {RootClientTabs}

                options = {{
                    title: 'Client'
                }}
            />

        </Drawer.Navigator>
    )

}