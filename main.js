function myData(){

    var inputnama = document.getElementById("nama0").value;
   
    if(inputnama == ""){
        document.getElementById("Message").innerHTML="Tolong disi ya!";
        return false;
    }
    if(inputnama.length<3){
        document.getElementById("Message").innerHTML="Karakter nya diatas tiga ya!";
        return false;
        
    }
}

console.log(inputnama);
