import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

/**
 * Custom Icon Component
 * MAkes use of MaterialCommunityIcons to display icons like the ones here: https://materialdesignicons.com/
 * the name of the icon corresponds to the name of the icons show on the website.
 */
export default function AppIcon({name, size=20, iconColor="black", backgroundColor}) {
    return (
        <View style={{width: size, height: size, backgroundColor, borderRadius: size/2, alignItems:"center", justifyContent:"center" }}>
            <MaterialCommunityIcons
                name={name}
                size={size*0.75}
                color={iconColor}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
