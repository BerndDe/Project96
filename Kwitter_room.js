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

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

  function addRoom(){
      room_name=document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name" + Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoom(this.id)'>"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoom(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}