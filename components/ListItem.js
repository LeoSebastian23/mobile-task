import * as React from 'react';
import { StyleSheet,Text, View } from 'react-native';
import Checkbox from './Checkbox';

export default function ListItem({
    id,
    text,
    isCompleted,
    isToday,
    hour
}){
    return( 
        <View style={styles.container}>
            <Checkbox 
                id={id}
                text={text}
                isCompleted={isCompleted}
                isToday={isToday}
                hour={hour}
            />
            <View>
                <Text  style={
                    isCompleted 
                    ? [styles.text,{textDecorationLine :'line-through'}, {color :'gray'}] 
                    : [styles.text]
                }
                >{text}</Text>
                <Text style={styles.time}>{hour}</Text>
            </View>
        
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom:15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text:{
        fontSize:20, 
        color:'#2f4f4f',
    },
    time:{
        fontSize:14,
        color:'#a3a3a3',
        fontWeight:'500',
    }
})