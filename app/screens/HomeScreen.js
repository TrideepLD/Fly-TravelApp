import React from 'react'
import { StyleSheet, View, Image,  } from 'react-native'

import AppScreen from '../components/AppScreen';
import AppColor from '../config/AppColor';
import AppListItem from '../components/AppListItem';
import AppButton from '../components/AppButton';

// Screen user is taken to after sucessful login.
// route parameter allows user to display any data that the user passed from login.
// navigation prop is a way to navigate among screens.

export default function HomeScreen({navigation, route}) {
    console.log(route.params);
    return (
        <AppScreen style={styles.container}>
        <View style={styles.welcomeContainer}>
            <Image
                source={require("../../assets/icon/icon.jpg")}
                style={styles.img}
            />
        </View>
        <View style={styles.profileContainer}>
            <AppListItem
                image={route.params.paramImage}
                title={route.params.paramName}
                subtitle={route.params.paramEmail}
            />
        </View>

        {/**Navigates user to Welcome screen which requires them to login again to view anything. */}
        <View style={styles.logoutButton}>
            <AppButton
                title="LOG OUT"
                color="delete"
                onPress={() => navigation.navigate("Welcome")}
                textColor="white"
            />
        </View>
       </AppScreen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.black,
        padding: 5,
      },
    welcomeContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50,
    },
    profileContainer: {
        flexDirection: 'column',
        marginTop: 50,
        marginBottom: 20,
        backgroundColor: AppColor.cardBackground,
        height: 90,
        justifyContent: 'center',
        paddingLeft: 5,
        borderRadius: 10,
    },
    img: {
        height: 75,
        width: 75,
        backgroundColor: AppColor.black
    },
    logoutButton: {
        marginTop: 150,
        width: 200,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    termsCondition: {
        alignContent: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 300,
        marginBottom: 20,
        fontSize: 15,
    }
})
