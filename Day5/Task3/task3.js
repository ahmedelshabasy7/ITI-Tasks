var name;
for(var i = 0 ; i <= 3 ; i++){
    if(i == 3){
        alert("input must be string");
    }

    name = prompt("Enter your name");

    if(isNaN(name)){
        break;
    }
}

var year;
for(var i = 0 ; i <= 3 ; i++){
    if(i == 3){
        alert("input must be number < 2010");
    }

    year = prompt("Enter your birth year");

    if(!(isNaN(year)) && parseInt(year) < 2010){
        break;
    }
}

var Age = 2025 - year;

document.write(`<b><u>Name : </u></b>${name} <br><b><u>birth year : </u></b>${year}<br> <b><u>Age : </u></b>${Age}`);