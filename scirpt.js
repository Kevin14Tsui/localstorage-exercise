let user = [
    { email: "kevin@test.com", username:"Kevin", password: "123123", accountype:"admin" },
    { email: "celia@test.com", username:"celia", password: "456456", accountype:"normal"}
];

localStorage.userlist = JSON.stringify(user);

let Apanel = document.getElementById("Apanel");
let login = document.getElementById("login")
Apanel.classList.add("d-none")
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
                alert("you are admin")
                Apanel.classList.remove("d-none");
            } else {
                alert("Sorry, you are not admin")
            }
        } 
    }
    if(login == true) {
        alert("pls input correct ac & pw")
    }
}

function convert() {
    var user = JSON.parse(localStorage.userlist);
}

function showadminpanel(){
    window.open("./adminpanel.html");
}

// adminpanel.html
function showinfo(){
    let show = document.getElementById("show")
    show.innerHTML = `Hi, ` + localStorage.getItem("currentUser") + 
    ` You are,` + localStorage.getItem("userType");  
}