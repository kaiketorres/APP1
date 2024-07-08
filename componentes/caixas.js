import React from "react";
import { View } from "react-native";
import styles from "../Styles/styles";



export default function(props){
  
    return(
        <View style={styles.PaiCaixas}>

            {props.exibir?
            <View style={styles.flex}>
                <View style={{...styles.FilhosCaxixas, backgroundColor:'#00f',flexGrow:1}}></View>
                <View style={{...styles.FilhosCaxixas, backgroundColor:'#00a',flexGrow:1}}></View>
                <View style={{...styles.FilhosCaxixas, backgroundColor:'#005',flexGrow:1}}></View>
            </View>

            :

            <View style={styles.flex}>
                <View style={{...styles.FilhosCaxixas, backgroundColor:'#f00',flexGrow:1}}></View>
                <View style={{...styles.FilhosCaxixas, backgroundColor:'#a00',flexGrow:1}}></View>
                <View style={{...styles.FilhosCaxixas, backgroundColor:'#500',flexGrow:1}}></View> 
            </View>

            }

        </View>
    )
        
    
}