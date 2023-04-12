import React from 'react';

import { Text, Pressable } from 'react-native';

/* eslint-disable-next-line */
export interface ButtonEntrarProps {
    title: string;
}

export function ButtonEntrar(props: ButtonEntrarProps) {
    return (
        <Pressable
            onPress={() => console.log('Botão foi apertado!')}
            style={{
                width: 200,
                height: 50,
                marginTop: 20,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'tomato',
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    color: 'white',
                }}
            >
                {props.title}
            </Text>
        </Pressable>
    );
}

export default ButtonEntrar;
