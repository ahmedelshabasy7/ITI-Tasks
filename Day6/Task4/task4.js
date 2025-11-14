let sz = parseFloat(prompt("Size"));
let arr = [sz];
for(let i = 0 ; i < sz ; i++){
    arr[i] = parseFloat(prompt(i));
}
let x = parseFloat(prompt("index"));


arr.splice(x , 1);

document.write(`<p>new arr is : ${arr}</p>`);
