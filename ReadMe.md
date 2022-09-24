# I'm Learning JavaScript
LOL , Js was built in a week, that explains why its so tra-


###### DOM - Document Object Model

DOM is an api to communicate with HTML documents, Nodes are in Doms for the same reason (God i'm saying trash already)
<img align="center" src="./assets/DOM.JPG" >
3 types of Nodes as stated in the Diagram

### How to declare a variable
```js script
var name = "Ilesanmi OLuwasijibomi"; //Stores string
var age; //Is an empty string so it will be undefined till it is given a value

```
Dont forget the freaking semi-colon, this isnt python. 
Using var is the traditional way of declaring variables,
but in more updated versions (I think) e.g ES6 using let and const can also be used
```js script
let height = "sha fucking tall"
const pi = 4.19 
```
###### Why use let and const
```let``` is limited to the block which it is declared i.e its not a universal variable, do let should be used inside blocks
```const``` is universal   

### Types of Datatypes
```js script
var age = 18; // Integer
var name = 'Blurry'; // string 
var virgin = true; // Bool
var babe; // Undefined
```
### Operators
<img align="center" src="./assets/OPERATORS.JPG" >

#### Arithmetic
Addition (+)
SUbtraction (-)
Division (/)
Multiplication (*)
Increment (++)
Decrement (--)

#### Assignment
<img align="center" src="./assets/ASSIGNMENT OPERATORS.JPG" >

#### Logical
<img align="center" src="./assets/LOGICAL OPERATORS.JPG" >

#### Comparison
<img align="center" src="./assets/COMPARISON OPERATORS.JPG" >

### Control Statements
if ... else statements
```js script
var x = 10
if (x>10){
    documents.write('X is greter than 10')
}else if(x == 10){
    document.write('X is equals to  10')
}else{
    document.write('X is less than 10')
}
```

### Functions in Javascript
Functio uses the function keyword e.g
```js script
function sum(x,y){
    return x+y
}

```
### Scope of Variables in Javascript
2 types of variables:
    Local variables
    Global variables
var keyword has a limited scope inside and outside a function.
siji pls just never use let, just use var and const

### Strings in Javascript
I just recalled escape sequence and concantenation in js

### Arrays in Javascript
```js script
var car = ['Honda' , 'Kia' , 'Ford']
document.write('<h1>'+car+'</h1>')
```
index also starts from 0

```js script
var car = ['Honda' , 'Kia' , 'Ford']
for(var i=0;i<3;i++){
    document.write(document.write('<h1>'+car[i]+'</h1>'))
}
```
Another way to call your Array
```js script
var fruits = new Array('Mango' , 'Banana' , 'Apple' , 'Grape')
for(var i = 0 ; i < fruits.length() ; i++){
    document.write('<h1>'+fruits[i]+'</h1>')
}
```
### Objects in Javascript
```js sccript
var car = {
    manufacture : "Honda",
    color : "Red",
    allprintsha : function()
    {
        document.write('Hello World')
    }
}
```
Better way
```js sccript
function cars : (brand , color , model){
    this.brand = brand
    this.color = color
    this.model = model
    this.drive : function(self , brand , model ){
        document.write('I drive a '+this.brand+' colored'+ this.color)
    }
}
```

### Classes in Javascript

```js script
class Student{
    constructor(name , age , roll){
        this.name = name
        this.age = age
        this.roll = roll
    }

    org(){
        return(this.name+' works at Blur studios')
    }
    dob(){
        return(this.name+' is '+this.age+' years old')
    }
}
```
inheritance
A new class will inherit from the Student class above
```js script
class Student2 extends Student{
    constructor(name, age , roll , language , department){
        super(name,age,roll)
        this.language = language
        this.department = department
    }
}
```
static methods dont need a class instance to use

### GettingElementsbyTagname in Javascript
```js script
var x = document.getElementsByTagName('div')
```




















