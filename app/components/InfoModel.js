import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import AppColor from '../config/AppColor'
import AppText from './AppText'


/**
 * 
 * Custom Component made specifically to display Modal data.
 * Displays only title, subtitle, category(only text that needs to be displayed.)
 * 
 * Category refers to the location of the landmark.
 * Title is the Landmark of these places.
 * Subtitle is the description.
 */
export default function InfoModel({title, subtitle, category}) {
    return (
        <View style={styles.container}>
            <AppText style={styles.tit}>{title}</AppText>
            <Text style={styles.sub} numberOfLines={0}>{subtitle}</Text>
            <AppText style={styles.cat}>Location: {category}</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        overflow: "hidden",
    },
    tit: {
        color: AppColor.black,
        fontSize: 20,
        fontWeight: "bold",
        justifyContent: 'space-between',
        marginBottom: 30,
        alignSelf: 'center',
    },
    sub: {
        color: AppColor.black,
        fontSize: 10,
        justifyContent: 'space-between',
        marginVertical: 5,
        fontFamily: Platform.OS === "android" ? "monospace" : "Cochin",
    },
    cat: {
        color: AppColor.black,
        fontSize: 10,
        justifyContent: 'space-between',
        marginTop: 40,
        marginVertical: 5,
    }
})
