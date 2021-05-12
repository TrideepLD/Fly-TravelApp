import React, {useState} from 'react'
import { View, StyleSheet, TextInput, Image } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";

import AppScreen from '../components/AppScreen';
import AppColor from '../config/AppColor';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';


/**
 * 
 *  Register Screen, which asks users for an email, password and account name or username.
 *  The data is passed into the users databse in Login.
 *  onChangeText is called everytime there is a change in text and reflects those changes in email,password and account accordingly.
 */
export default function RegisterScreen() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [account, setUserName] = useState();

    return (
    <AppScreen style={styles.container}>
        <View style={styles.welcomeContainer}>
            <Image
            source={require("../../assets/icon/icon.jpg")}
            style={styles.img}
            />
        </View>
        <View style={styles.textInputContainer}>
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="account"
                placeholder="Full Name"
                textContentType="emailAddress"
                onChangeText = { input => setUserName(input)}
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                textContentType="emailAddress"
                icon="email"
                placeholder="Email Address"
                onChangeText = { input => setEmail(input)}
            />
            <AppTextInput 
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
                onChangeText = { input => setPassword(input)}
            />
        </View>
        <View style={styles.button}>
            <AppButton
                title="SIGN UP"
                color="white"
            />
        </View>
    </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.black,
        padding: 25,
        marginTop: 0,
      },
    welcomeContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 50,
    },
    textInputContainer: {
        marginTop: 75,
        marginBottom: 75,
    },
    img: {
        height: 75,
        width: 75,
        backgroundColor: AppColor.black
    },
    button: {
        width: 200,
        justifyContent: 'center',
        alignSelf: 'center'
    }
})
