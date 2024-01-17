let input;
let icel;
let ifar;
let ikel;
let ocel;
let ofar;
let okel;
let result = document.getElementById("result");
let submit = document.getElementById("submit");
submit.addEventListener("click",()=>{
    icel = document.getElementById("icel");
    ifar = document.getElementById("ifar");
    ikel = document.getElementById("ikel");
    ocel = document.getElementById("ocel");
    ofar = document.getElementById("ofar");
    okel = document.getElementById("okel");
    input = document.getElementById("input").value;
    input = Number(input);
    if((icel.checked==true && ocel.checked==true) || (ifar.checked==true && ofar.checked==true) || (ikel.checked==true && okel.checked==true)){
        result.innerHTML = input;
    }
    else if((icel.checked==true && okel.checked==true)){
        result.innerHTML = (input + 273.15).toFixed(2);
    }
    else if((ikel.checked==true && ocel.checked==true)){
        result.innerHTML = (input - 273.15).toFixed(2);
    }
    else if((ifar.checked==true && ocel.checked==true)){
        result.innerHTML = ((input-32)* 5/9).toFixed(2);
    }
    else if((icel.checked==true && ofar.checked==true)){
        result.innerHTML = ((input* 1.8)+32).toFixed(2);
    }
    else if((ifar.checked==true && okel.checked==true)){
        result.innerHTML = ((input-32)* 5/9 + 273.15).toFixed(2);
    }
    else if((ikel.checked==true && ofar.checked==true)){
        result.innerHTML = (((input-273.15)* 1.8)+32).toFixed(2);
    }
    else{
        result.innerHTML = "Select units...."
    }
})