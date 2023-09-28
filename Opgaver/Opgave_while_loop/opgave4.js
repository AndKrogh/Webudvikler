let i = 1;
let limit = 101;
let sum = 0;

while( i < limit){
    if(i % 1 == 0){
        sum = sum + i;
    }
    
    i++;
}
console.log(sum);