function add()
{
    var nterms = 50
    var a = document.getElementById("box1").value;
    var b = document.getElementById("box2").value;
    var c = 0;
    var count=0;
    var ans = new Array();
    
    if (nterms <= 0){
        console.log("please enter a positive value")
    }
    else{
        console.log("fibonacci sequence")
        while (count < nterms){
           
            nth = parseInt(a) + parseInt(b);
            c = parseInt(a);
             console.log(c);
             ans.push(c)
            a = b;
            b = nth;
            count += 1;
            document.getElementById("result").innerHTML= ans ;
        }
    }
}
