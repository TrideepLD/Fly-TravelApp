import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import AppText from './AppText'
import AppIcon from './AppIcon'


/**
 * 
 *  A helper component/supplement component to AppPicker.
 */
export default function AppPickerItem({onPress, label, icon, backgroundColor}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <AppIcon 
                name={icon}
                iconColor="white"
                backgroundColor={backgroundColor}
            />
            <AppText>{label}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        width: "50%",
        alignItems: 'center'
    }
})
