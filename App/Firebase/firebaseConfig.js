import firebase from 'firebase' ;

const firebaseConfig= {
    apiKey: "AIzaSyDuD0QKc8edeuPeHCn3h7OjNRwZ7bk8Dnw",
    databaseURL:"https://chat-shi-default-rtdb.firebaseio.com/",
    projectID:"chat-shi",
    appID:"1:308702147152:android:fdb4819c57e7f590ab1755",
};

export default Firebase.initializeApp(firebaseConfig);