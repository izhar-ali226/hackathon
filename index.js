const loginForm = document.getElementById("loginForm")
const CreateAccount = document.getElementById("createAccount");
const linkLogin = document.getElementById("linkLogin");
const linkCreateAccount = document.getElementById("linkCreateAccount");
const homePage = document.getElementById("homePage");

document.addEventListener('DOMContentLoaded', () => {


    linkCreateAccount.addEventListener("click", (e) => {
        loginForm.classList.add("formHidden");
        CreateAccount.classList.remove("formHidden");
        e.preventDefault();
    })

    linkLogin.addEventListener("click", () => {
        loginForm.classList.remove("formHidden");
        CreateAccount.classList.add("formHidden");
    })


})


const signUp = () => {
    
    const signUpEmail = document.getElementById("signUpEmail");
    const signUpPassword = document.getElementById("signUpPassword");

    const promise= auth.createUserWithEmailAndPassword(signUpEmail.value, signUpPassword.value)
    promise.catch(e=>alert(e.message));
    alert("sign in")

}


const signIn = () => {
    
    const signUpEmail = document.getElementById("signUpEmail");
    const signUpPassword = document.getElementById("signUpPassword");

    const promise= auth.signInWithEmailAndPassword(signUpEmail.value, signUpPassword.value)
    // promise.catch(e=>alert(e.message));
    // alert(`email is  ${signUpEmail}`)
    document.getElementById("home").style.display="block"

    // take user into different user

    auth.onAuthStateChanged(function(user){
        if(user){
            document.getElementsById("container").style.display="none"
        }else{
            document.getElementById("home").style.display="flex"
            // signout
        }
     }
    )}


function removeEvent(e) {
    e.target.removeEventListener('mouseover', function () {

    })
};


let score = 0;
const increment = () => {
    score += 10;
    console.log(score)
    document.getElementById("score").innerHTML = `score :${score}`
}

let life = 4;
const decriment = () => {
    console.log(life)
    life -= 1;
    console.log(life)
    document.getElementById("life").innerHTML = `life: ${life}`
    if (life === 0) {
        alert("game over")
        location.reload();
    }
}
// level1


const next = document.getElementById("next");
const next2 = document.getElementById("next2");
const level2 = document.getElementById("level2");
const level1 = document.getElementById("level1");
const level3 = document.getElementById("level3")
 const next3= document.getElementById("next3");


document.addEventListener('mouseover', function (e) {
    if (e.target.className === "balloon") {

        e.target.style.backgroundColor = "#ededed";
        e.target.textContent = "POP!";
        increment();
        removeEvent(e)
    }
});

document.addEventListener('mouseover', function (e) {
    if (e.target.className === "gray") {
        decriment()
        alert("wrong ")
        removeEvent(e)
    }
});

// level2

next.addEventListener("click", function () {
    level1.classList.add("formHidden")
    level3.classList.add("formHidden")
    level2.classList.remove("formHidden")

})
next2.addEventListener("click", function () {
    level1.classList.add("formHidden")
    level3.classList.remove("formHidden");
    level2.classList.add("formHidden");

})

document.addEventListener('mouseover', function (e) {
    if (e.target.className === "balloon2") {

        e.target.style.backgroundColor = "#ededed";
        e.target.textContent = "POP!";
        increment();
        removeEvent(e)
    }
});

document.addEventListener('mouseover', function (e) {
    if (e.target.className === "gray2") {
        decriment()
        alert("wrong ")
        removeEvent(e)
    }
});



// level3


document.addEventListener('mouseover', function (e) {
    if (e.target.className === "balloon2") {

        e.target.style.backgroundColor = "#ededed";
        e.target.textContent = "POP!";
        increment();
        removeEvent(e)
    }
});

document.addEventListener('mouseover', function (e) {
    if (e.target.className === "gray3") {
        decriment()
        alert("wrong ")
        removeEvent(e)
    }
});




next3.addEventListener("click", function () {
    level1.classList.add("formHidden");
    level2.classList.add("formHidden");
    level3.classList.remove("formHidden");

})