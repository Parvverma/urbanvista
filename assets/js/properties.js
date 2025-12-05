let invalid_para = document.getElementById("invalid");
let button = document.getElementById("submit-btn")

let input = document.getElementsByClassName("error")


function loop(){
    let flag = true;
    for (let elem of input){
        if (elem.value.trim().length == 0) {
            flag = false;
        }
    }
    if (flag){
        window.location = "index.html";
    }
    else{
        invalid_para.style.color = "red";
        invalid_para.innerText = "Invalid input";
    }
}

button.addEventListener("click", loop);