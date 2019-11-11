//01
let N = prompt("ваше число:")
let summ = 0;
for(i = 1; i  <= Number(N); i++){
    if(i%2 === 1){
           summ += i;
            console.log(summ)
    }
}
//02
let str = "abcde"
alert(str[0])
alert(str[1])
alert(str[str.length-1])