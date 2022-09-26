//Get Elements by Tag Name
function fun1(){
    var x = document.getElementsByTagName('div')
    x[0].style.fontFamily = 'Times New Roman'
    x[0].style.fontSize = "50px"
    x[1].style.color = "Red"
    x[2].style.backgroundColor = "Red"
    
}
//Get Elements by Class Name
function func1(){
    var x= document.getElementsByClassName('cls1')
    for (let i = 0 ; i < x.length ; i++){
        x[i].style.backgroundColor = 'Red'
    }
}



