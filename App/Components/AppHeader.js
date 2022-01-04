import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native' ;
import Icon from 'react-native-vector-icons/MaterialIcons';

class AppHeader extends Component {

    render(){
        const { title, onPress, navigation } = this.props;
        return (
            <View style={{height:60, marginBottom:20}}>
                <View style={[styles.gradient, { paddingTop:5, backgroundColor:'#ffd31d' }]}>
                    <View style={styles.headerView}>
                        {title === "Shi" ?
                            <View style={{ width: '10% '}}>

                            </View>
                            :
                            <View style={{ alignItems: 'flex-start' }}>
                                <TouchableOpacity style={style.iconView} onPress={() => {navigation.goBack(null) }}>
                                    <Icon name="arrow-back" size={25} color="#000" />
                                </TouchableOpacity>
                            </View>
                        }
                        <View style={{ width: '80%', alignItems: 'center' }}>
                            <Text style={[ styles.textView, {fontSize: 25, fontWeight: 'bold' }]} > {title}</Text>
                        </View>
                        <View style={{ width: '10%', alignItems: 'flex-end', marginLeft: 10  }}>
                            <TouchableOpacity style={style.iconView} onPress={() => { onPress() }}>
                                <Icon name="Logout" size={25} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
