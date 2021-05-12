import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppColor from '../config/AppColor'
import AppText from './AppText'


//Custom Component made to display items as a list.
//Dont think it is used in this assignment.
// Takes in an image, title, subtitle and IconComponent. 
// The onSwipeLeft is a feauture of swipeable which displays the icon component which the item is swiped left.
export default function AppListItem({image, title, subtitle, IconComponent, onPress, onSwipeLeft}) {
    return (
        <Swipeable renderRightActions={onSwipeLeft}>
            <TouchableHighlight onPress={onPress} underlayColor={AppColor.darkgrey}>
                <View style={styles.container}>
                {IconComponent}
                {image && <Image 
                    source={image}
                    style={styles.image}    
                    />
                }
                    <View style={styles.textContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderRadius: 10,
    },
    image: {
        height: 75,
        width: 75,
        borderRadius: 200,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    textContainer: {
        marginTop: 12,
        flexDirection: 'column',
        marginLeft: 10,

        
    },
    title: {
        fontWeight: 'bold',
        justifyContent: 'center',
        alignContent: 'center',
        
    },
    subtitle: {
        fontSize: 15,
        justifyContent: 'center',
        alignContent: 'center',
    }

})
