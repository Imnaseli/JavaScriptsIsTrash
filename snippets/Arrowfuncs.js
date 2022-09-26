function func1(a,b){
    return a+b
}
func1(5 , 10) // Ans: 20
// Arrow Functions
var arr1 = (a , b) => {
    return a + b
}
arr1(5 , 10) //Ans:20

var arr2 = (newname) =>{
     console.log('Arrow functions are wild '+ newname)
}
arr2("right")