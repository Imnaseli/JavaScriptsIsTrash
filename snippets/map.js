var mycar = new Map()
{
//  mycar.set(1 , 'Mysterio')
//  mycar.set(2 , 'impulse')   
}
// mycar.set(4 , 'flash')
var arr = ['flash' , 'batman' , "a-train " , 'butcher']
for(let i = 1 ; i-1 < arr.length ; i++){
    mycar.set(i , arr[i-1])
}
mycar.set(4 , 'superman')
console.log(mycar.get(4))
//.set to store key value pairs
//.get to access them and use them
// they are mutable
//.size to get the size of the map object
