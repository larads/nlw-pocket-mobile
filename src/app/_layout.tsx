import {
    useFonts,
    Rubik_700Bold,
    Rubik_500Medium,
    Rubik_400Regular,
    Rubik_600SemiBold
} from '@expo-google-fonts/rubik'
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from "react-native-gesture-handler"

import { colors } from '../styles/colors';
import { Loading } from '../components/loading';

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Rubik_700Bold,
        Rubik_500Medium,
        Rubik_400Regular,
        Rubik_600SemiBold
    })

    if (!fontsLoaded) {
        return <Loading />
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: colors.gray[100] }
                }}
            />
        </GestureHandlerRootView>
    )
}