import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppColor from '../config/AppColor';


// Custom Button. Makes use of TouchableOpacity as opposed to button due initial tinkering of features that TouchableOpacity has as opposed to button.
// Takes a view with a background color with can be changed later. and whatever text is fed into title.
// Color = background color, textColor = color(text color)
export default function AppButton({title, color, onPress, textColor}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.butt, {backgroundColor: AppColor[color]}]}>
                <Text style={[styles.text, {color: AppColor[textColor]}]}>
                    {title}                
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    butt: {
        backgroundColor: AppColor.otherColor,
        borderRadius: 20,
        width: "100%",
        padding: 15,
        justifyContent: 'center',
        alignItems: "center",
        marginVertical: 10,
        borderRadius: 50,
        
    },
    text: {
        fontSize: 20,
        textTransform: "capitalize",
        fontWeight: "bold",
        fontFamily: 'sans-serif-light',
        textTransform: 'uppercase',
    }
})
