import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

/**
 * 
 * Custom Component to replace AppTextInput
 * Adding the bracket around the tag makes it optional, you weill need to pass tags. 
 */

export default function AppTextInput({icon, ...otherProps}) {

    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons 
            name = {icon}
            size = {33}
            />}
            <TextInput style={styles.textInput} {...otherProps}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f5',
        flexDirection: 'row',
        borderRadius: 10,
        padding: 2,
        width: '100%',
        marginVertical: 20,
    },
    textInput: {
        fontSize: 20,
        fontFamily: Platform.OS === "android" ? "monospace" : "Cochin",
        color: '#000',
        marginLeft: 5,
        flex: 1,
    }
});