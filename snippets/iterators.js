var arr = ['BMW' , 'Honda' , 'Toyota' , 'Volkswagen']
console.log(arr)
console.log(arr.length)

for (let i = 0 ; i < arr.length ; i++){
    console.log(arr[i])
}

//Better for arrays

for (let x of arr){
    console.log(x)
}
