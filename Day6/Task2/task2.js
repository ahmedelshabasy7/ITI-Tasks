let str = new String(prompt("Enter string"));
let r = str.length;
let b = 0 ;
for(let i = 0 ; i < r ; i++){
    if(str.charAt(i) == str.charAt(r - i - 1)){
        b = 1 ; 
    }
    else{
        b = 0 ;
    }
}

if(b){
    document.write("Yes");
}
else{
    document.write("No");
}