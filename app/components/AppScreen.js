import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import Constants from 'expo-constants';

import AppColorPalette from '../config/AppColorPalette';
import AppColor from '../config/AppColor';


/**
 *  Custom Component that renders on screen.
 *  Main view used throughout the app.
 * 
 */

export default function AppScreen({children, style}) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={styles.paddingView}>
                {children}
            </View> 
        </SafeAreaView>
    )
}

/**
 * Constants.statusbar + marginTop here is used to ensure that the screen doesnt flow into the statusBar(basically everything rendered is rendered below the statusBar)
 */
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: AppColor.black,
    },
    paddingView: {
        flex: 1,
        
    }
})

