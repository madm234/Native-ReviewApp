import React from "react";
import {StyleSheet,View,Text} from 'react-native'

export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.txt}>Home Screen</Text>
        </View>
    )
}

const styles =StyleSheet.create({
        container: {
            backgroundColor: 'coral',
            paddingTop: 40,
            paddingLeft: 15,
            paddingBottom: 10
        },
        txt: {
            fontFamily: 'nunito'
        }
});