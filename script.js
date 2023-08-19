const pressed = [];
const secretCode = "mookalaqi";
const changedElement = document.querySelector(".to-be-changed")
window.addEventListener("keyup", (e)=>{
    pressed.push(e.key);
    pressed.splice(-secretCode.length -1, pressed.length - secretCode.length);
    
    if(pressed.join("").includes(secretCode)) {
        changedElement.classList.add("changed")
        console.log("123")
    }

   
})