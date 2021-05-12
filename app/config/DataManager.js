import React, { Component } from 'react'
import { Text, View } from 'react-native'

/**
 * DataManager is a class that handles the data manipulation 
 * or rather, acts almost like a database for the user's wishlist.
 */
export default class DataManager{
    
    static myInstance = null;
    userID = "";

    books = [
        {
            userid: "user1",
            bookid: 1,
            title:"Sydney Opera House",
            subtitle:"The Sydney Opera House is a multi-venue performing arts centre at Sydney Harbour located in Sydney, New South Wales, Australia. It is one of the 20th century's most famous and distinctive buildings.",
            image:require("../../assets/cardImages/operaHouse.jpg"),
            category:"Sydney, Australia",
        },
        {
            userid: "user1",
            bookid: 2,
            title:"Angkor Wat",
            subtitle:"Originally constructed as a personal mausoleum for the Khmer King Suryavarman II, dedicated to Vishnu in the early 12th century, it was converted into a Buddhist Temple towards the end of 12th century and remains so in the present day",
            image:require("../../assets/cardImages/angkorWat.jpeg"),
            category:"Siem Reap, Cambodia",
        },
        {
            userid: "user2",
            bookid: 1,
            title:"The Eiffel Tower",
            subtitle:"The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower. ",
            image:require("../../assets/cardImages/effielTower.jpeg"),
            category:"Paris, France",
        }
    ];

    // Basically creates an instance of Datamanager outside of datamanger.
    static getInstance(){
        if (DataManager.myInstance==null) {
            DataManager.myInstance = new DataManager();
        }
        return this.myInstance;
    }

    getUserID(){
        return this.userID;
    }

    setUserID(id){
        this.userID = id;
    }

    // Use .filter to only find books that have that same user id.
    getBooks(id){
        return this.books.filter((book) => book.userid === id);
    }

    addBook(book){
        this.books.push(book);
    }
    
}
