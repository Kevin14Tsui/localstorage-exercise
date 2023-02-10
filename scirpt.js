let user = [
    { email: "kevin@test.com", username:"Kevin", password: "123123", accountype:"admin" },
    { email: "celia@test.com", username:"celia", password: "456456", accountype:"normal"}
];

localStorage.userlist = JSON.stringify(user);

var Apanel = document.getElementById("Apanel");

// 2a,2b,task
function checkLogin() {
    convert()
    var email = document.getElementById("exampleInputEmail1");
    var pw = document.getElementById("exampleInputPassword1");
    var container = document.querySelector(".container")
    var login =true;
    for(let i =0; i<user.length; i++){
        if (email.value == user[i].email && pw.value == user[i].password) {
            login = false;
            localStorage.setItem("currentUser", user[i].username);
            localStorage.setItem("userType", user[i].accountype);            
            alert("usernmae correct");
            if (localStorage.getItem("userType") == "admin"){
               container.innerHTML =
          `<p>Hi, ` +
          user[i].username +
          `~ Do you wanna go to the admin panel?</p><br><br><a href="./adminpanel.html">
          <button id="adminpagebtn" class="btn btn-primary">Admin Panel</button></a>`;
            } else {
                alert("Sorry, you are not admin")
            }
        } 
    }
    if(login == true) {
        alert("go way")
    }
}

function convert() {
    var user = JSON.parse(localStorage.userlist);
}


// function usertpye() {
//     if(currentaccount.accountype == "admin"){
//         newpage.classList.remove("invisible")
//     }
// }

// task5
function newpagehtml() {
    window.open("adminpanel.html");
}
// adminpanel.html
let show = document.getElementById("show")
show.innerHTML = `Hi, ` + localStorage.getItem("currentUser") + 
` You are,` + localStorage.getItem("userType");