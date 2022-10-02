function employee()
{
    var eid = document.getElementById("eid").value
    var check = /[DE]253[10-99]/i
    var output = check.test(eid)
    if (output){
        alert('It Worked')
    }else{
        alert("fuck off")
    }
}