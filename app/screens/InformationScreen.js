import React, { useState } from "react";
import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, Modal, View, Pressable, Alert} from "react-native";
import DataManager from '../config/DataManager';
import AppCard from "../components/AppCard";
import AppScreen from "../components/AppScreen";
import InfoModel from "../components/InfoModel";
import AppIcon from "../components/AppIcon";
import AppColor from "../config/AppColor";

// Object Array containing data to be read and displayed.
const DATA = [
    {
        id: 1,
        title:"Angkor Wat",
        subtitle:"Originally constructed as a personal mausoleum for the Khmer King Suryavarman II, dedicated to Vishnu in the early 12th century, it was converted into a Buddhist Temple towards the end of 12th century and remains so in the present day",
        image:require("../../assets/cardImages/angkorWat.jpeg"),
        category:"Siem Reap, Cambodia",
    },
    {
        id: 2,
        title:"Sydney Opera House",
        subtitle:"The Sydney Opera House is a multi-venue performing arts centre at Sydney Harbour located in Sydney, New South Wales, Australia. It is one of the 20th century's most famous and distinctive buildings.",
        image:require("../../assets/cardImages/operaHouse.jpg"),
        category:"Sydney, Australia",
    },
    {
        id: 3,
        title:"The Eiffel Tower",
        subtitle:"The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower. ",
        image:require("../../assets/cardImages/effielTower.jpeg"),
        category:"Paris, France",
    },
    {
        id: 4,
        title:"Taj Mahal",
        subtitle:"The Taj Mahal ('Crown of the Palace') is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan (reigned from 1628 to 1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.",
        image:require("../../assets/cardImages/tajMahal.jpeg"),
        category:"Agra, India",
    },
    {
        id: 5,
        title:"Burj Khalifa",
        subtitle:"The Burj Khalifa known as the Burj Dubai prior to its inauguration in 2010, is a skyscraper in Dubai, United Arab Emirates.",
        image:require("../../assets/cardImages/burjKhalifa.jpeg"),
        category:"Dubai, United Arab Emirates",
    },

];

/**
 * Takes in an item, onPress, backgroundColor, textColor 
 * item is a prop that is used to take in many data to display. 
 * Basically in better words. Pass array, read array, render array data. 
 * 
 */ 
const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <AppCard
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            category={item.category}
        />
    </TouchableOpacity>
  );

  /**
   * 
   * Modification to the Item above but doest use AppCard to render the information.
   * Used to render information inside the Modal.
   */
  const ModalItem = ({ item, backgroundColor, textColor }) => (
      <Text style={[styles.title, textColor]}>{item.title}</Text>,
      <Text>{item.subtitle}</Text>,
      <Text>{item.category}</Text>
  );

  // used for styling and to test changing of state(whcih was usucessful)
    let iconName = "thumb-up-outline";

/**
 * 
 * This screen basically reads from the DATA array and displays it in a model format.
 */
function InformationScreen({navigation}) {

    const [selectedId, setSelectedId] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    

    const renderItem = ({ item }) => {

    return (
      <Item
        item={item}
        onPress={() => {
            setSelectedId(item.id);
            setModalVisible(true);
            }
        }
      />
    );
  };

  const renderModalItem = ({ item }) => {

    return (
      <Item
        item={item}
      />
    );
  };

  // function to allow user to add Card to Books in DataManager which is read by wishlist.
  const addBook = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();

    const books = commonData.getBooks(user);
    const bookID = books.length+1;
    const newBook = {
        title: title,
        subtitle: subTitle,
        category: category.label,
        bookid: bookID,
        userid: user,
        image: image.path,
    };
    console.log(newBook);
    commonData.addBook(newBook);
}

  return (
    <AppScreen style={styles.container}>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            extraData={selectedId}
        />
        <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            data={DATA.filter(item => item.id == selectedId)}
            keyExtractor={(item) => item.id.toString()}
            onRequestClose={() => {
            setModalVisible(!modalVisible);
            }}

        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <FlatList
                    style={styles.modalText}
                    // Searches for all data which has only that id and displays it.Since each item has a unique id, it will only display 1 card.
                    data={DATA.filter(item => item.id == selectedId)} 
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => 
                        (
                            <InfoModel
                                title={item.title}
                                subtitle={item.subtitle}
                                category={item.category}
                            />
                        )
                    }
                    />
                    <View style={{flex: 1, flexDirection: 'row'}}>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.textStyle}>Back</Text>
                    </Pressable>
                    <Pressable
                        style={styles.addBook}
                        onPress={(item) => Alert.alert("Your Book has not been added to the wishlist. The Developer broke something.")}
                    >
                    <AppIcon 
                        size={40} 
                        name="plus-circle" 
                        backgroundColor={AppColor.white}
                        iconColor="#3ef83e"
                    />
                    </Pressable>
                    </View>
                    </View>
                    </View>
                </Modal>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      marginVertical: 5,
      marginHorizontal: 15,
    },
    title: {
      fontSize: 32,
    },centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 25,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: 300,
        height: 300,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 50,
        marginLeft: 10,
      },
      addBook: {
        alignItems: 'center',
        justifyContent: "center",
        marginLeft: 100,
        marginRight: 10,
      }
  });

export default InformationScreen;