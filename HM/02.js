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
for(x of str){
    if(x === 'a'){
        console.log("я знаю эту букву")
    }else if(x === 'b' ){
        console.log("я знаю эту букву")
    }else if(x === 'e'){
        console.log('я знаю эту букву')
    }else{
        console.log(x)
    }
}
//03
let hour = prompt("Который час")
let hoursec = 60 * 60 * Number(hour)
alert('В ' + hour + " часах " + hoursec + " секунд")
//04
var hour = Number(prompt("Который час"))
while(true){
    if(hour !== Number(hour)){
        var hour = Number(prompt("не верный формат, пробуйте еще"))
    }else if(hour === Number(hour)){
        break
    }
}
let hoursec = 60 * 60 * Number(hour)
alert('В ' + hour + " часах " + hoursec + " секунд")