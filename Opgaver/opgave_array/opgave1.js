let tal = new Array();

tal.push(10,20,30,40);

/* console.log(tal[2]); */

tal[1] = 1000;

/* console.log(tal[1]); */


/* for(let i = 0; i < tal.length; i++) {
    console.log(tal[i]);
} */

tal.sort(function(a, b){return b - a});

/* console.log(tal); */

let newArr = new Array();

newArr.push(15,25,35,45);

/* console.log(newArr); */

let concatArr = tal.concat(newArr);

console.log(concatArr);