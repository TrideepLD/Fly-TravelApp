import React from 'react'
import { ImageBackground, StyleSheet, Platform, View, Image } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native'

import AppScreen from '../components/AppScreen'
import AppText from '../components/AppText';
import AppColor from '../config/AppColor';
import AppButton from '../components/AppButton';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

/**
 * 
 * Main Screen that takes users to either the Login/ Register/ terms and conditions page
 * Makes use of navigation prop to allow us to call navigation.navigate to navigate to the different screens
 * 
 */

export default function WelcomeScreen({navigation}) {
    return (
        <AppScreen style={styles.background}>
                <Image 
                source={require("../../assets/ImageBackground/welcomeScreenBG.jpg")}
                style={styles.img}
                />

                <View style={styles.welcomeContainer}>
                    <AppText style={styles.introduction}>
                        FLY
                    </AppText>
                </View>

                <View style={styles.buttonsContainer}>
                    <AppButton 
                        title="LOGIN" 
                        color="grey"
                        onPress={()=> navigation.navigate("Login")}
                        textColor="black"
                    />
                    <AppButton 
                        title="SIGN UP" 
                        color="grey"
                        onPress={()=> navigation.navigate("Register")}
                        textColor="black"
                    />
                </View>
                <View>
                    <TouchableWithoutFeedback onPress={()=> navigation.navigate("TermsAndCondition")}>
                        <AppText style={styles.termsCondition}>Terms and Conditions</AppText>
                    </TouchableWithoutFeedback>
                    
                </View>
        </AppScreen>
    )
}

// The sytling in buttonsContainer is really important.
const styles = StyleSheet.create({
    background: {
        backgroundColor: AppColor.black,
    },
    back: {
        flex: 1,
    },
    welcomeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColor.black,
    },
    buttonsContainer: {
        display: 'flex',
        marginEnd: 5,
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 140,
        alignSelf: 'center',
        width: '50%',
    },
    img: {
        width: "100%",
        height: "35%",
    },
    introduction: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 64,
        lineHeight: 135,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
    },
    termsCondition: {
        marginTop: 150,
        marginBottom: 50,
        color: AppColor.white,
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 20,
    }
})
