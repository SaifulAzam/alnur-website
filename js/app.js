var snackbar = document.getElementById("snackbar")

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDP1VoTAHGlEzUdU_lU1Aa79umNG2eJIXw",
    authDomain: "alnur-website.firebaseapp.com",
    databaseURL: "https://alnur-website-default-rtdb.firebaseio.com",
    projectId: "alnur-website",
    storageBucket: "alnur-website.appspot.com",
    messagingSenderId: "1919090440",
    appId: "1:1919090440:web:8e9d6035bb1c55af5276bd"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

//create firebase database reference
var dbRef = firebase.database();

var mosqueSignUpDbRef = dbRef.ref('mosques')

//AddMosque List

// document.querySelector('.addMosque').addEventListener("click", function(event){
//     event.preventDefault()

//     var name = document.querySelector('#name55').value;
//     var mosque = document.querySelector('#business55').value;
//     var email = document.querySelector('#email55').value;
//     var phone = document.querySelector('#phone55').value;
//     var postcode = document.querySelector('#postcode55').value;

//     if(name != '' || mosque != '' || email != '' || phone != '' || postcode){
//         mosqueSignUpDbRef.push({
//             person_name: name,
//             mosque_name: mosque,
//             email_address: email,
//             phone_number: phone,
//             post_code: postcode,
//             accepted: false,
//             created_at: Date.now(),
//             updated_at: Date.now()
//         })

//         document.getElementById("mosqueForm").reset();
//         showSnackbar("Thank You for your sign up!")

//     } else {
//          alert('Please fill all fields');
//     }
// }, false)


function showSnackbar(message) {
    snackbar.innerText = message
  snackbar.className = "show";
  setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}


//newsletter
var newsletterDbRef = dbRef.ref('newsletter')

document.querySelector('.newsletter').addEventListener('click', function(event){
    event.preventDefault()
    var email = document.querySelector('#email_address').value;

    if(email !== ''){
        newsletterDbRef.push({
            email: email,
            joined_at: Date.now(),
        })

        document.getElementById("newsletter-form").reset();
        showSnackbar("✅ Thank you for your interest!")
    } else {
        alert('Please fill all fields')
    }
}, false)