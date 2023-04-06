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

user_name=localStorage.getItem('username');
room_name=localStorage.getItem('roomname');

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code
    console.log(firebase_message_id);
    console.log(message_data);
    names=message_data["name"];
    message=message_data["message"];
    like=message_data["like"];
    namewithtag="<h4>"+ names+"</h4>";
    messagewithtag= "<h4 class='message_h4'>"+message+"</h4>";
    likewithtag= "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
    spanwithtag= "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like +"</span></button><hr>";
    row=namewithtag+messagewithtag+likewithtag+spanwithtag;
    document.getElementById("output").innerHTML+=row;
//End code
   } });  }); }
getData();
function send(){
   msg=document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
         name:user_name,
         message:msg,
         like:0
   });
document.getElementById("msg").value=" ";
}

function logout(){
   localStorage.removeItem("username");
   localStorage.removeItem("roomname");
   window.location="index.html";
}

function updatelike(message_id){
   console.log(message_id);
   button_id=message_id;
   likes=document.getElementById(button_id).value;
   updatedlikes=Number(likes)+1;
   firebase.database().ref(room_name).child(message_id).update({
         like:updatedlikes
   });
}
