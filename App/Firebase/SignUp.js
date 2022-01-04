import Firebase from './firebaseConfig';

export const SignUpUser = async (name, email) =>{
    try {
    return await Firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error){
    return error;
    }  
}