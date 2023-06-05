const signupForm = document.querySelector("#signup-form");
const greeting = document.querySelector("#greeting"); 
const usernameInput = document.getElementById("#name");

const HIDDEN_CLASSNAME = "hidden"; 

function onSignupSubmit(event) {
    event.preventDefault(); 
    signupForm.classList.add(HIDDEN_CLASSNAME);
    const username = usernameInput.value;
    greeting.innerText = `${username}님, 회원가입이 완료되었습니다.`;
    greeting.classList.remove(HIDDEN_CLASSNAME); 
} 

signupForm.addEventListener("submit", onSignupSubmit);
// first argument of a function gives information about the event object that just occurred
