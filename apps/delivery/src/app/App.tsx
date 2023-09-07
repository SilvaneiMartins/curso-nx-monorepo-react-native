import React from 'react'
import { View, Text, Alert } from 'react-native'

import { BotaoGenerico } from '@monorepo-sam/shared/components'

const App = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text style={{
                fontSize: 25,
            }} >Delivery</Text>

            <BotaoGenerico
                onPress={
                    () => {
                        Alert.alert('Develivery', 'Você clicou no botão genérico Develivery')
                    }
                }
                title='Botão Genérico Delivery'
            />
        </View>
    )
}

export default App
