var firebaseConfig = {
    apiKey: "AIzaSyBX622DUzT_6M2ISuhC3VEPsU7Gr8UiEDQ",
    authDomain: "letschat-6a9fc.firebaseapp.com",
    databaseURL: "https://letschat-6a9fc-default-rtdb.firebaseio.com",
    projectId: "letschat-6a9fc",
    storageBucket: "letschat-6a9fc.appspot.com",
    messagingSenderId: "291545520089",
    appId: "1:291545520089:web:7be04a040ea0c65e4aebc8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
    });
    document.getElementById("msg").value=""; 
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}

