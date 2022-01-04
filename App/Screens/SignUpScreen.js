import React, { component } from 'react' ;
import {View,image} from 'react-native';
import { TextInputComponent } from '../Components/TextInputComponent';
import ButtonComponent from '../Components/ButtonComponent';
import {SignUpUser} from '../Firebase/SignUp';
import {AddUser} from '../Firebase/Users';
import Firebase from '../Firebase/firebaseConfig';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage  from '@react-native-comunity/async-storage';
class SignUp extends Components {
    state = {
        name: "",
        email: "",
        password: "",
        loader:false
    }

    SignUptoFirebase= async () => {
        this.setState({loader:true})
        SignUpUser(this.state.email, this.state.password).
            then (async(res) => {
                console.log('res',res);
                var userUID= Firebase.auth().currentUser.uid;
                AddUser(this.state.name, this.state.email, '', userUID).
                    then (async () => {
                        this.setState({loader:false});
                        await AsyncStorage.setItem('UID',userUID);
                        this.props.navigation.navigate('Dashboard');
                    }).
                    catch((error) => {
                        this.setState({loader:false});
                        alert(error);
                    }).
                console.log(userUID);
            }).
            catch((err) => {
                this.setState({loader:false});
                alert(err);
            }) 

    }

    render() {
        return (
            <view style={{ flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center'}}>
                <image source={require('../Assets/SHI.png')} style= {{ width:100, height:100, borderRadius: 50,marginBottom: 30}} />
                <TextInputComponent placeholder="Masukan Nama" updateFields={(text) => this.setState ({ name: text})} />
                <TextInputComponent placeholder="Masukan Email" updateFields={(text) => this.setState ({ email: text})} />
                <TextInputComponent placeholder="Masukan Password" updateFields={(text) => this.setState ({ password: text})} />
                <ButtonComponent title="Sign UP" onPress={() => { this.SignUptoFirebase }} />
                <Spinner
                    visible={this.state.loader}
                
                />
                </view>
        )
    }
}
export default SignUp;