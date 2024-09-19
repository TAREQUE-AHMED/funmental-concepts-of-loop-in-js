for (let i = 1; i <= 20; i++){
    //console.log(i);
    if (i % 2 === 0 ||i%3===0) {
        //console.log(i);
        
    }
}
for (let i = 0; i <= 10; i++){
    if (i % 5 === 0 || i % 4 === 0) {
//        console.log(i);
        
    }
}


// give me the sum of the numbers from 11 to 20 that are divisible by 3
let sum = 0;
for (i = 1; i <= 20; i++){
    if (i % 3 === 0) {

    console.log(i);
        sum = sum + i;
        console.log('sum', sum);
        
}
    
}
console.log(sum);


