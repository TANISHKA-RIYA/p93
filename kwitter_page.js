const firebaseConfig = {
    apiKey: "AIzaSyB0pbTHtZNAAtXCYZh_1KRVuVk5cP1-ON0",
    authDomain: "pkwitter-58fca.firebaseapp.com",
    projectId: "pkwitter-58fca",
    storageBucket: "pkwitter-58fca.appspot.com",
    messagingSenderId: "1060105118639",
    appId: "1:1060105118639:web:268f3482af78f9dda9055a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem('username');
room_name=localStorage.getItem('roomname');

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
