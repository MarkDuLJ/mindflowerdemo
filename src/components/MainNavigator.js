import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingsScreen from '../screens/Settings';
import HomeScreen from '../screens/Home';
import MedicationScreen from '../screens/Medication';
import MedicationAddScreen from '../screens/MedicationAdd';


const Stack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const HomeStack = ()=>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Meds" component={MedicationScreen} />
            <Stack.Screen name="MedAdd" component={MedicationAddScreen} />
        </Stack.Navigator>
    )
}

export const MainNavigation = () =>{
    return (
        <Tab.Navigator barStyle={{ backgroundColor: '#D9EEEA' }}>
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Meds"
                component={MedicationScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="pill" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cog" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}