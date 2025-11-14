var firstname;

while(1){
    firstname = prompt("Enter your first name");
    if(isNaN(firstname)){
        break;
    }
}
var lastname;

while(1){
    lastname = prompt("Enter your last name");
    if(isNaN(lastname)){
        break;
    }
}

confirm("Is " + firstname + " " + lastname + " your name ?")

var address ;

while(1){
    address =  prompt("Enter your address") ;
    if(isNaN(address)){
        break;
    }
}
document.write("welcome " + firstname + " " + lastname + " who lives in " + address);