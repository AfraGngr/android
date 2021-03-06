
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions
} from 'react-native';

const Roll = ({roll, selected})=>{
    const list = [require("./assets/1.png"), require("./assets/2.png"), require("./assets/3.png"), require("./assets/4.gif")]

    return(
        <View style = {{flex :1.2}}>
            
            <View style ={styles.containerRoll}>
                <Image style = {styles.image} source = {list[selected]} />
                <Image style = {styles.image} source = {list[roll]} />
            </View>
            <View style ={styles.containerRoll}>
                <Text style = {styles.text}>You</Text>
                <Text style = {styles.text}>Computer</Text>
            </View>
      </View>
    )
}

const styles = StyleSheet.create({
    image : {
        width : Dimensions.get("window").width*0.475,
        height : Dimensions.get("window").height * 0.25
    },
    containerRoll : {
        flex : 1,
        flexDirection : "row",
        justifyContent : "space-around",
      
    },
    text : {
        fontSize : 30,
        color : "#313409",
        fontWeight : "bold",
        fontFamily : "monospace",
        marginTop : 50,
        marginLeft : 28
    },
})

export {Roll}