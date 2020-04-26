var ix = document.body.getElementsByClassName("pv-entity__bullet-item-v2");
var total_experience = 0;
var months = 0; 
for (i=0; i<ix.length;i++){
    var x = ix[i].innerText;
    //Grabs Years
        if (x.includes("yr")){
         var y = x.indexOf(" ");
         total_experience+=(parseInt(x.slice(0,y)));
        }
    //Grabs Months where Month/Yr Field
        if(x.includes("mo") && x.includes("yr")) {
         var y = x.indexOf(" ")+1;
         var z = x.indexOf(" ",y)+1;
         var l = x.indexOf(" ",z);
         months += parseInt(x.slice(z,l));
        }
    //Grabs Months where only Month
        if(x.includes("mo") && !x.includes("yr")) {
         var y = x.indexOf(" ");
         months += parseInt(x.slice(0,y));
        }
}

if (months>11){
    total_experience += (months-(months%12))/12;
    months += (months-(months%12))*-1;
}


console.log("A Total of "+String(total_experience)+" Years and "+ String(months)+" Months");