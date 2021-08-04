const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


// firebase

let signup = () => {
  // var name=document.getElementById("name1").value

  var email = document.getElementById("email1").value
  var password = document.getElementById("password1").value

  console.log(email, password)
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      console.log(error.message)
    });

}



// firebase signin
let login = () => {
  console.log("hy")
  // window.location.href = "./in.html"
  
  var email1 = document.getElementById("email").value
  var password1 = document.getElementById("password").value
  
  console.log(email1, password1)
  firebase.auth().signInWithEmailAndPassword(email1, password1)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    console.log(error.message)
  });
  if(email1=="shani2103792@gmail.com" && password1=="123456"){
    window.location.href="./home.html"

    // window.location.href="./in.html"
  }
}


let facebook_login = () => {
  console.log("jhy")
  var provider = new firebase.auth.FacebookAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
     

      var user = result.user;

    console.log("user",user)
    })
    .catch((error) => {
    console.log(error.message)
    });
}


// welcome.html



let addTodo = () => {
  var input = document.getElementById("input")
  var li = document.createElement("li")
  var text = document.createTextNode(input.value)
  li.appendChild(text)
  // console.log( list.appendChild(text))

  var list = document.getElementById("li")
  list.appendChild(li)



  var delBtn = document.createElement("button")
  var delText = document.createTextNode("Delete")
  delBtn.setAttribute("onclick", "del(this)")
  delBtn.appendChild(delText)
  list.appendChild(delBtn)

  var editBtn = document.createElement("button")
  var editText = document.createTextNode("Edit")
  editBtn.setAttribute("onclick", "edit(this)")
  editBtn.appendChild(editText)
  list.appendChild(editBtn)
}

// let del = (e) => {

//   // e.parentNode.remove()
//   e.parentNode.remove()
// }

function del(e) {
  e.parentNode.remove()
}

// let add=(e)=>{
//  var p= e.parentNode.firstChild.nodeValue

//   var editText=prompt("Enter", e.parentNode.firstChild.nodeValue)
//   p=editText
// }


function edit(e) {
  var edit = prompt("Enter", e.parentNode.firstChild.nodeValue)
  var obj = {
    value: edit,
    key: e.id
  }
  firebase.database().child(e.id).set(obj)
  e.parentNode.firstChild.nodeValue = edit



}
let del1 = () => {
  var list = document.getElementById("li")

  list.remove()
}

