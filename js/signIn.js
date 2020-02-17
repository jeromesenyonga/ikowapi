var firebaseConfig = {
    apiKey: "AIzaSyAMwb7VfhMP38mpWM2hmWMXVJwY_I8XhIk",
    authDomain: "form-84e61.firebaseapp.com",
    databaseURL: "https://form-84e61.firebaseio.com",
    projectId: "form-84e61",
    storageBucket: "form-84e61.appspot.com",
    messagingSenderId: "1069222002209",
    appId: "1:1069222002209:web:eb047bec5e12710ae9ad60"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  function signUp() {
    //const form = document.querySelector('#login-form');
    var email = document.querySelector('#email');
    var pass = document.querySelector('#password');
    const promise = auth.createUserWithEmailAndPassword(email.value,  pass.value);
    promise.catch(e => alert(e.message));
        alert('signed Up');
        console.log(email.value, pass.value);
        console.log('signed Up');

  }
  function signIn() {
    const promise = auth().signInWithEmailAndPassword(email.value, pass.value);
    promise.catch(e => alert(e.message));
    alert('signed in '+email);
  }
  function signOut() {
    auth.signOut();
    alert('signed out!');
  }
  //function to redirect if user is signed In or not
  auth.onAuthStateChanged(function(user) {
      if(user) {
        var email = user.email;
          alert("Active user" + email);
          //then may be redirect to another page
      }else {
        alert('No active user')
      }
  })