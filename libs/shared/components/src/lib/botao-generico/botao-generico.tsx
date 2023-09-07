import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles'

/* eslint-disable-next-line */
export interface BotaoGenericoProps {
    title: string;
    onPress?: () => void;
}

export function BotaoGenerico(props: BotaoGenericoProps) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={props.onPress}
        >
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    );
}

export default BotaoGenerico;
