import React, {useState} from 'react'
import { View, StyleSheet, TextInput, Modal, Button, TouchableWithoutFeedback, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'


import AppText from './AppText';
import AppScreen from './AppScreen';
import AppPickerItem from './AppPickerItem';


/**
 * 
 *  Custom Component AppPicker
 * 
 *  Basically a drop down which takes in some data which is usually a category, icon to display beside the data, placeholder, 
 *  numColumns which determine the number of columns the drop down has and selectedItem and onSelectedItem are self-explaining.
 *  
 *  Makes use of React.Fragment which allows us to have TouchableWithoutFeedBack and Modal as two seperate views.
 */
export default function AppPicker({data, icon, placeholder, numColumns, selectedItem, onSelectedItem}) {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <React.Fragment>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons 
                    name = {icon}
                    size = {33}
                    />}
                    <AppText style={styles.text}>{selectedItem? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons name="chevron-down" size={33}/>
                </View>
            </TouchableWithoutFeedback>
            <Modal 
                visible={modalVisible} 
                animationType="slide" 
                onRequestClose={() => { setModalVisible(false)}}
                statusBarTranslucent={true}
                transparent={true}
            >
                <AppScreen>
                    <Button title="Close" onPress={() => setModalVisible(false)}/>
                    <FlatList
                        scrollEnabled={true}
                        overScrollMode="always"
                        scrollToOverflowEnabled={true}
                        numColumns={numColumns}
                        data={data}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({item}) => 
                        <AppPickerItem
                            onPress={() => {
                                setModalVisible(false);
                                onSelectedItem(item);    
                            }}
                            label={item.label}
                            icon={item.icon}
                            backgroundColor={item.backgroundColor}
                        />}
                    />
                </AppScreen>
                </Modal>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f5',
        flexDirection: 'row',
        borderRadius: 10,
        padding: 2,
        width: '100%',
        marginVertical: 20,
    },
    text: {
        color: '#000',
        marginLeft: 5,
        flex: 1,    
    }
});