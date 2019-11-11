//01
var numbers = [254, 115, 78,25,91,45,37]
for( var i of numbers){
if (i > 50){
console.log(i)}}
//02
var a = 5;
var b = 7;
var c = 12;
if (b > a < c){
	alert(a)
}else if(a > b < c){
	alert(b)
}else if(a > c < b){
	alert(c)
}
//03
let age = 22
if ( age >= 20 && age < 27){
	console.warn("Выслать повестку")
}
//04
let day = "среда"
if (day != "cуббота" || day != "воскесенье"){
	console.log("Нужно на работу")
}
//05
for(i = ""; i.length <= 10; i += ".#")
console.log(i + ".")
//06
for(var i = 1; i < 10; i++){
	if(i % 2 === 0) console.log(i ** 2)
}

//07
let username = 'Maxim'
console.log('Happy birthday dear ' + username)
//08
for(i = 1; i <= 50; i++)
if(i % 3 === 0 && i % 5 ===0){ 
	console.log("FizzBuzz")
	} else if(i % 5 ===0){
		console.log("Buzz")
	} else if(i % 3 === 0){
		console.log("Fizz")
	} else {
		console.log(i)
	}