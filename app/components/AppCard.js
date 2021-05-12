import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import AppColor from '../config/AppColor'
import AppText from './AppText'


/**
 * 
 * Custom component to display object array data accordingly.
 */
export default function AppCard({title, subtitle, image, category}) {
    return (
        <View style={styles.container}>
        {/**
            is finite is used here due to how images work, not entirely sure but it is read as number so as long as the image is finite we can display something. 
            refer to week 5 or 6 lecture to double check the latter part of the statement.
        */}
            {isFinite(image)? <Image source={image} style={styles.image}/>: <Image source={{uri: image}} style={styles.image}/>}
            <AppText style={styles.tit}>{title}</AppText>
            <AppText style={styles.sub}>{subtitle}</AppText>
            <AppText style={styles.cat}>{category}</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColor.contentBackground,
        height: 285,
        overflow: "hidden",
        marginBottom: 25,
        borderRadius: 10,
    },
    image: {
        height: 200,
        width: "100%",
        
    },
    tit: {
        color: AppColor.white,
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        marginLeft: 5
    },
    sub: {
        color: AppColor.white,
        fontSize: 12,
        marginTop: 5,
        marginLeft: 5,
    },
    cat: {
        color: AppColor.grey,
        fontSize: 8,
        marginTop: 5,
        marginLeft: 5,
    }
})
