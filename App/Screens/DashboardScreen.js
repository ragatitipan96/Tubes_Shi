import AsyncStorage  from '@react-native-comunity/async-storage';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import firebase from '../Firebase/firebaseConfig';
import Spinner from 'react-native-loading-spinner-overlay';
import AppHeader from '../Components/AppHeader';
import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

class Dashboard extends Component {
    state = {
        allUser: [],
        loader:false,
        imageUrl:''
    }

    async componentDidMount() {
        try {
            this.state ({ loader:tru })
            await firebase.database().ref('users')
                .on("Value", async (datasnapshoot) => {
                    const uuid= await AsyncStorage.getItem('UID');
                    let users= [];
                    datasnapshoot.forEach((child) => {
                        if(child.val().uuid === uuid ) {

                        }
                        else {
                            users.push({
                                userName: child.val().name,
                                uuid:child.val().uuid 
                            });
                        }
                    });
                    this.setState({ allUser: users, loader: false });
                })
        } catch (error) {
            alert(error);
            this.state({loader:false})
        }
    }
    LogOut = async () => {
        await firebase.auth().SignOut().then(()=> {
            await AsyncStorage.removeItem('UID');
            this.props.navigation.navigate('Login');
        }).catch((err) => {
            alert(err);
        })
    }
    
    openGallery() {
        launchImageLibrary.showImagePicker('photo', (response)=> {
            console.log('res', response);
            this.setState({ imageUrl:response.uri });
        })
    }
    render() {
        return (
            <View>
                <View style={{ flex:1, backgroundColor: '#000'}}>
                <AppHeader title="Shi" navigation={this.props.navigation} onPress={() => this.LogOut()} /> 
                <FlatList
                    alwaysBounceVertical={false}
                    data={this.state.allUser}
                    style={{ padding:5 }}
                    keyExtractor={(_, index) => index.toString()}
                    ListHeaderComponent={
                        <View style = {{ width: '15%', alignItems: 'center', justifyContent: 'center '}}>
                            <TouchableOpacity style = {{ height: 90, width: 90, borderRadius: 45 }} onPress={() => {this.openGallery() }}>
                                <Image source ={{ uri: this.state.imageUrl === ''?'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' : this.state.imageUrl }} style={{ height: 90, width:90,borderRadius:25}} />
                            </TouchableOpacity>
                            <Text style={{ color: '#fff', fontsize:20,marginTop:10, fontWeight:'bold'}}> Raga & Fajarr</Text>
                        </View>
                    } />
                            <TouchableOpacity style ={{ flexDirection:'row', marginBottom:20, marginTop:20 }}>
                                <View style = {{ width: '15%', alignItems: 'center', justifyContent: 'center '}}>
                                    <Image source ={{ uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' }} style={{ height: 50, width:50,borderRadius:25}} />
                                </View>
                                <View style = {{ width: '85%', alignItems: 'flex-start', justifyContent: 'center ', marginLeft: 10}}>
                                    <Text style = {{ color: '#000', fontSize: '16', fontWeight: 'bold'}}>{item.userName}</Text>
                                </View>
                            </TouchableOpacity>
                                <View style = {{ borderBottomWidth: 0.5, borderColor: '#fff' }} />
                           
                        </View>
                       
                
                <Spinner
                    visible={this.state.loader}
                />
            </View>
        )
    }
}
export default Dashboard;