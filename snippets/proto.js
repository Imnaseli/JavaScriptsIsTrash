var abc = {
    name : 'Object',
    age : '89',
    virgin : true,
    changename : function(name){
        this.name = name
    }
}
abc.changename('Harry')
// console.log(abc)
// document.write(abc.name)

function Employee(name , age , role){
    this.name = name
    this.age = age
    this.role = role
}

