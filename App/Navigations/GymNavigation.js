import { View, Text } from 'react-native'
import React from 'react'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import Gym from '../Screens/Gym';
import PlaceDetail from '../Components/PlaceDetail/PlaceDetail';

export default function GymNavigation() {
    const isAndroid = true;
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            gestureEnabled: true,

            ...(isAndroid && TransitionPresets.ModalPresentationIOS)

        }}>
            <Stack.Screen name='gym-screen'
                options={{ headerShown: false }}
                component={Gym} />
            <Stack.Screen name="place-detail"
                options={{ title: "" }}
                component={PlaceDetail} screenOptions={{
                    presentation: 'modal',

                }} />
        </Stack.Navigator>
    )
}