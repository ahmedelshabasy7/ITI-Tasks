let sz = parseFloat(prompt("Size"));
let arr = [sz];
for(let i = 0 ; i < sz ; i++){
    arr[i] = parseFloat(prompt(i));
}
let x = parseFloat(prompt("Number"));
let bool = 0 ;
let index = -1 ;

for(let i = 0 ; i < sz ; i++){
    if(arr[i] == x){
        bool = 1 ;
        index = i ;
        break;
    }
    else{
        bool = 0;
        index = -1 ;
    }
}

if(bool){
    document.write(`<p>Input N : ${sz}</p><br><p>Input arr : ${arr}</p><br><p>Input x : ${x}</p><br><p>output : ${index}</p>`);
}

else{
    document.write(`<p>Input N : ${sz}</p><br><p>Input arr : ${arr}</p><br><p>Input x : ${x}</p><br><p>output : ${index}</p>`);
}
