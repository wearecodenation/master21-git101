let multiplesFive = [];
for(let i = 0; i < 100; i++){
    if (i % 5 == 0){
        multiplesFive.push(i);
    }
}
console.log('numbers between 0 and 100 that are divisible by 5 are: ${multiplesFive}.');