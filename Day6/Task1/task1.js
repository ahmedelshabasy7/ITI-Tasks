let arr = [];

for(let i = 0 ; i < 5 ; i++){
    arr[i] = parseFloat(prompt(i));
}

document.write(`<p>Your arr is : ${arr}</p>`);

arr.sort((a , b) => a - b);

document.write(`<p>Your arr after sort is : ${arr}</p>`);

arr.reverse();

document.write(`<p>Your arr after reverse is : ${arr}</p>`);