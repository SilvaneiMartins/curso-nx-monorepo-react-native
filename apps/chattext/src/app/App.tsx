import React from 'react'
import { View, Text, Alert } from 'react-native'

import { styles } from './styles'
import { BotaoGenerico } from '@monorepo-sam/shared/components'

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Chat Text</Text>
            <BotaoGenerico
                onPress={
                    () => {
                        Alert.alert('Chat Text', 'Você clicou no botão genérico Chat Text'	)
                    }
                }
                title='Botão Genérico Chat Text'
            />
        </View>
    )
}

export default App
