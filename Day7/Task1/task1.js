let timer;

function Mytime(){
    let clock = new Date();
    document.getElementById("task").innerHTML = clock.toLocaleTimeString();
}

function begin(){
    alert("clock started");
    Mytime();
    timer = setInterval(Mytime,1000);
}

function end(){
    let decision = confirm("Do you want to stop the time ?");
    if(decision){
        clearInterval(timer);
    }
    else{
        return;
    }
}