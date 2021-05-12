import React, {useState} from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity, Modal, Text, Alert, Pressable } from 'react-native'
import AppButton from '../components/AppButton'
import AppCard from '../components/AppCard'
import AppIcon from '../components/AppIcon'
import AppScreen from '../components/AppScreen'
import AppText from '../components/AppText'
import InfoModel from '../components/InfoModel'
import AppColor from '../config/AppColor'
import DataManager from '../config/DataManager'


export default function MyTravelScreen({navigation, ...otherprops}) {

    // States to manipulate data and to catch errors.
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [subTitle, setSubtitle] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);

    const [titleError, setTitleError] = useState("");
    const [subtitleError, setSubtitleError] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [imageError, setImageError] = useState("");

    // gets books array objects from Datamanger
    const getBooks = () => {
        let commonData = DataManager.getInstance();
        let user = commonData.getUserID();
        return commonData.getBooks(user);
    }
    
    // Adds books to array object in DataManager.
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
            image: require("../../assets/fallenAngelWingsEclipse.jpg"),
        };
        console.log(newBook);
        commonData.addBook(newBook);
    }
    
    const bookList = getBooks();
    console.log(bookList);
    return (
        <AppScreen style={styles.container}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <FlatList
                data={bookList}
                keyExtractor={book => book.bookid.toString()}
                renderItem={({item}) => 
                    (
                        <AppCard
                            title={item.title}
                            subtitle={item.subtitle}
                            image={item.image}
                            category={item.category}
                        />
                    )
                }
                    
                />
            </TouchableOpacity>
            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <FlatList
                style={styles.modalText}
                data={bookList}
                keyExtractor={book => book.bookid.toString()}
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
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
                >
                    <Text style={styles.textStyle}>Back</Text>
                </Pressable>

                </View>
                </View>
            </Modal>
        </AppScreen>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColor.windowBackground,
        flex: 1,
        padding: 15,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
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
      buttonClose: {
        backgroundColor: "#2196F3",
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 10,
        marginRight: 170,
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },

})
