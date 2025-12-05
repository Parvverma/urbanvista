let input = document.getElementById("email")
let button = document.getElementById("btn")

function submit(){
    let value = input.value;
    if (value.trim().length > 0){
        window.location = "index.html";
    }
    else{
        input.style.borderColor = "red";
        input.style.borderRadius = "8px";
        input.placeholder = "Invalid Input";
    }
}

button.addEventListener("click" , submit);