//01
let i = 0
do{
    i++;
    console.log(i);
}while( i < 50 )
//02
let arr = [1, 2, 3, 4, 5]
for (x of arr){
    console.log(x)
}
//03
let arr = [2, 3, 4, 5]
let x = 0
for(x of arr){
    x *= x
    console.log(x)
}
//04
var obj = {
    "Минск" : "Беларусь",
    "Москва" : "Россия",
    "Киев" : "Украина"
}
for(x in obj){
    console.log( x, "- это ", obj[x])
}
//05
var i = 0
while(i < 100){
    i++
    console.log(i)
}
//06
var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}
for(y in obj){
    console.log(y, ":", obj[y])
}
//07?
var arr = [2, 5, 9, 15, 0, 4]

for ( x = 0; x < arr.length; x++) {
    if(3 < x < 10) {
        console.log(x)
    }
}
