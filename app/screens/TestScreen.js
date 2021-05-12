import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppTextInput from '../components/AppTextInput'

export default function TestScreen() {
    return (
        <View style={styles.container}>
            <AppTextInput></AppTextInput>
            <AppTextInput></AppTextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
    }
})
 