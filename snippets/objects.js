var car = {
    manufacture : "Honda",
    color : "Red",
    allprintsha : function()
    {
        document.write('Hello World')
    }
}
function cars  (brand , color , model)
{
    this.brand = brand;
    this.color = color;
    this.model = model;

    this.drive = function( brand ){
        document.write('I drive a '+this.color+' colored '+this.brand )
    }

}

var car2 = new cars('Honda' , 'Yellow' , 'ABDK2783B')
var c3 = new cars('Benz' , 'Red' ,'!(&^@$8!)')
c3.drive()
var color = car2.color
var c4 = new cars
c4.brand = "VOLKSWAGEN"
document.write(c4.brand)
