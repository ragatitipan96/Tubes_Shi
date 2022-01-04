import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

class ButtonComponent extends Comment {
    render (){
        const { title, onPress } = this.props;
        return(
            
            <TouchableOpacity onPress={() => onPress()} style={style.button}>
                <View style={style.mainContainer}>
                    <Text style = {style.textStyle}>{title}</Text>
                </View>
            </TouchableOpacity>

            
        );        
    }
}

const style = StyleSheet.create({
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 50,
        marginBottom: 5,
        width: '85%',
        paddingHorizontal: 6,
        backgroundColorColor: '#ffd302',
        margin:10
    },
    textStyle: {
        fontSize: 18,
        fontWeight:'bold'
    }
});


export default ButtonComponent;