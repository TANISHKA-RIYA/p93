const firebaseConfig = {
      apiKey: "AIzaSyB0pbTHtZNAAtXCYZh_1KRVuVk5cP1-ON0",
      authDomain: "pkwitter-58fca.firebaseapp.com",
      databaseURL: "https://pkwitter-58fca-default-rtdb.firebaseio.com",
      projectId: "pkwitter-58fca",
      storageBucket: "pkwitter-58fca.appspot.com",
      messagingSenderId: "1060105118639",
      appId: "1:1060105118639:web:268f3482af78f9dda9055a"
    };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  username = localStorage.getItem('username') ;
document.getElementById("username").innerHTML="WELCOME "+username+" !!";
function addroom(){
     roomname = document.getElementById("room_name").value;
     localStorage.setItem("roomname",roomname);
     firebase.database().ref('/').child(roomname).update({
      purpose : "adding new room"
     });
     window.location='kwitter_page.html';
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {
      childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname");
      row = '<div class="roomname" id='+Room_names+' onclick="redirectToRoomName(this.id)">#'+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(roomname){
      localStorage.setItem("roomname",roomname);
      window.location='kwitter_page.html';
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}