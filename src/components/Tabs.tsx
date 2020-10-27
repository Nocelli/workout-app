import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import Main from '../screens/main'


interface TabsProps { }

const AppTabs = createBottomTabNavigator()

export const Tabs: React.FC<TabsProps> = ({ }) => {
    return (
        <AppTabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName = 'ios-alert';

                    if (route.name === 'Home') {
                        iconName = 'md-home'
                    } else if (route.name === 'Settings') {
                        iconName = 'md-settings'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#000000',
                inactiveTintColor: 'gray',
            }}
        >
            <AppTabs.Screen name='Home' component={Main} />
            <AppTabs.Screen name='Settings' component={Main} />
        </AppTabs.Navigator>
    )
}