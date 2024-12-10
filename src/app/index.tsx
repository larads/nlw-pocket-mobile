import { View } from 'react-native'
import { router } from 'expo-router'

import { Steps } from '../components/steps'
import { Button } from '../components/button'
import { Welcome } from '../components/welcome'
import { IconArrowRight } from '@tabler/icons-react-native'

export default function Index() {
    return (
        <View style={{ flex: 1, padding: 40, gap: 40 }}>
            <Welcome />
            <Steps />
            <Button onPress={() => router.navigate("/home")}>
                <Button.Title>Começar</Button.Title>
                <Button.Icon icon={IconArrowRight} />
            </Button>
        </View>
    )
}