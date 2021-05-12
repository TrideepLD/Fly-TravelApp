import React from 'react'
import { View, StyleSheet, TextInput, Image } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from 'formik';
import * as Yup from 'yup'

import AppScreen from '../components/AppScreen';
import AppColor from '../config/AppColor';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import DataManager from '../config/DataManager';

// Uses Yup as validation schema. Down below is just ensure it exists and fits certain criteria. Might improve with regex in future.
const schema = Yup.object().shape(
    {
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).max(12).label("Password"),
    }
);

// Stored location of the users. 
// This looks like a security vulnerability, probably should not store it like so and uhh maybe do security stuff later if got time.
const users = [
    {
        id: "user1",
        name: "J. Harper",
        email: "jh@gmail.com",
        password: '1234',
        image: require("../../assets/profilePictures/bwg.jpg"),
    },
    {
        id: "user2",
        name: "UnBunga",
        email: "ub@gmail.com",
        password: 'asdf',
        image: require("../../assets/profilePictures/dog.jpg"),
    },
    {
        id: "user3",
        name: "asdf123",
        email: "asdf123@gmail.com",
        password: '1234',
        image: require("../../assets/profilePictures/dog2.jpg"),
    },
];

// Checks the username and password among the ones in the user object array and validates accordingly.
const validateUser = ({email, password}) => {
    return(
        users.filter((user) => user.email === email && user.password === password).length>0
    );
};

// Next 2 function are quite literal in their name. Is used later to get the user and create a user.
// Get user makes use of a .find method
const getUser = ({email}) => {
    return users.find((user) => user.email === email);
}

// Create user makes use of DataManager to ensure that data display is specific per user.
const createUser = ({email}) => {
    let commonData = DataManager.getInstance();
    let userID = getUser({email}).id;
    commonData.setUserID(userID);
}

/**
 * 
 * Formik, a powerful tool for building forms.
 * And also relatively easy to use and implement.
 * Reference: https://formik.org/docs/tutorial
 */
export default function LoginScreen({navigation}) {
    return (
        <AppScreen style={styles.container}>
            <View style={styles.welcomeContainer}>
                <Image
                    source={require("../../assets/icon/icon.jpg")}
                    style={styles.img}
                />
            </View>

            <Formik
                initialValues={{email:'', password:'',}}
                onSubmit = {(values, {resetForm}) => {
                    if (validateUser(values)) {
                        console.log(getUser(values).name);
                        resetForm();
                        createUser(values);
                        navigation.navigate("Home", {
                            screen: "Home",
                            params:{
                                screen: "Home",
                                params:{
                                    paramEmail: values.email,
                                    paramName: getUser(values).name,
                                    paramImage: getUser(values).image,
                                },
                            }
                        });
                    }
                    else{
                        resetForm();
                        alert("Invalid Login Details")
                    }
                }}
                validationSchema={schema}
                >
                {({values, handleChange, handleSubmit, errors, setFieldTouched, touched}) => 
                    (
                        <>
                            <View style={styles.textInputContainer}>
                                <AppTextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="email-address"
                                    textContentType="emailAddress"
                                    icon="email"
                                    placeholder="Email Address"
                                    value={values.email}
                                    onBlur = {() => setFieldTouched("email")}
                                    onChangeText = { handleChange("email")}
                                />
                                {touched.email && <AppText style={{fontSize: 15,}}>{errors.email}</AppText>}
                                <AppTextInput 
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    icon="lock"
                                    placeholder="Password"
                                    secureTextEntry
                                    textContentType="password"
                                    value={values.password}
                                    onChangeText = { handleChange("password")}
                                    onBlur = {() => setFieldTouched("password")}
                                />
                                {touched.password && <AppText style={{fontSize: 15,}}>{errors.password}</AppText>}
                            </View>
                            <View style={styles.loginButton}>
                                <AppButton
                                    title="Login"
                                    color="white"
                                    onPress={ handleSubmit }
                                />
                            </View>
                        </>
                    )
                }
            </Formik> 
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
    loginButton: {
        width: 200,
        justifyContent: 'center',
        alignSelf: 'center'
    }
})
