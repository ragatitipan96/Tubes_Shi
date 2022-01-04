import React, { Component, component } from 'react';
import { Text, TextInput, View, StyleSheet} from 'react-native';
class TextInputComponent extends Component {
    render () {
    const { placeholder, updateFields, } = this.props;
    return (
        <view style={[style.mainContainer, { backgroundColor: '#ccc', }]}>
            <TextInput style= {[style.textInput, { fontsize: 17 }]}
                placeholder={placeholder}
                placeholderTextColor='#000'
                onChangeText={text => updateFields(text)}
                secureTexEntry={placeholder == "Masukan Password" ? true:false} />
        </view>
        )
    }
}

const style = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 5,
        height: 50,
        marginBottom: 10,
        width: '85%',
    },
    TextInput: {
        paddingHorizontal: 10,
        width: '90%',
        paddingVertical: 0,
        color: '#000'
    }
});