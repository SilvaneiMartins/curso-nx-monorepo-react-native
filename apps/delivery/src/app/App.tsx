import React from 'react'
import { View, Text } from 'react-native'

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
            }} >Delivery Text</Text>
        </View>
    )
}

export default App
