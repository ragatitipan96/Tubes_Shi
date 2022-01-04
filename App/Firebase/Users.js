import Firebase from './firebaseConfig';

export const AddUser =async(name, email, image, uuid) => {
     try {
        return await Firebase
             .database()
             .ref("Users/" + uid)
             .set({
                name: name,
                email: email,
                image: image,
                uuid: uid,
              });
   } catch (error) {
        return error;   
      }
} 

export const allUser 