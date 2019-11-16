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
//03.1
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
//04
var num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num += 1;
num -= 1;
alert(num);
//05
let num = 3;
alert(num)
//06
let a = 10;
let b = 2;
alert(a + b);
alert(a - b);
alert(a * b);
alert(a / b);
//07
let c = 15;
let d = 2;
let result = c + d;
alert(result);
//08
let str = "Привет Мир!"
str.charCodeAt()
//09
let name = prompt('Как вас зовут?')
alert('Вас зовут ' + name)
//10
let yourNumm = prompt('Ваше число:')
alert(yourNumm ** 2)
//11
let kolsec = prompt("КОЛИЧЕСТВО ВРЕМЕНИ:")
if(kolsec === "10h"){
    alert(60 * 60 * 10)
}else if(kolsec === "10d"){
    alert(60 * 60 * 10 * 24)
}else if(kolsec === "10w"){
    alert(60 * 60 * 24 * 7 * 10)
}else if(kolsec === "10m"){
    alert(60 * 60 * 24 * 30 * 10)
}