import React, { Children }  from "react";
import { Text, StyleSheet, Platform } from 'react-native'


/**
 * 
 * Custom Component AppText to replace Text in most places.
 * 
 */
function AppText({children, style}) {
    return (
        // numberOfLines limit the text to only display 1 line. Eg: "Hello Worl...".
        <Text numberOfLines={1} style={[styles.text, style]}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 20,
        fontFamily: Platform.OS === "android" ? "monospace" : "Cochin"
    }
})

export default AppText;