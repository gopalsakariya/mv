var ran = Math.random() * (5 - 1) + 1
var apin = Math.floor(ran);
console.log(apin);


switch (apin) {
case 1:
    
    var email = prompt('Hola, Enter The Email!');

    var mailapi = "https://api.hunter.io/v2/email-verifier?email=" + email + "&api_key=08feff467a8ed0d134df86992041af58921bb2f0";


    fetch(mailapi)
    .then(response => response.json())
    .then((response) => {
        
        console.log(response)
        
        
        document.getElementById('imail').innerHTML = response.data.email;
        
        document.getElementById('irslt').innerHTML = response.data.result;
        
        document.getElementById('iscr').innerHTML = response.data.score;
        
        document.getElementById('ists').innerHTML = response.data.status;
        
        var test1 = document.getElementById('ists').innerHTML = response.data.status

        if (response.data.status == "valid") {

           document.getElementById("imail").style.color = "green";
           document.getElementById("irslt").style.color = "green";
           document.getElementById("iscr").style.color = "green";
           document.getElementById("ists").style.color = "green";

       }else{
        document.getElementById("imail").style.color = "red";
        document.getElementById("irslt").style.color = "red";
        document.getElementById("iscr").style.color = "red";
        document.getElementById("ists").style.color = "red";
    }
    
}
)
    .catch(err => console.error(err));

    break;
case 2:
    
 var email = prompt('Hola, Enter The Email!');

 var mailapi = "https://api.hunter.io/v2/email-verifier?email=" + email + "&api_key=771fda195655ce48339957c2972a4cc6507d5aed";


 fetch(mailapi)
 .then(response => response.json())
 .then((response) => {
    
    console.log(response)
    
    
    document.getElementById('imail').innerHTML = response.data.email;
    
    document.getElementById('irslt').innerHTML = response.data.result;
    
    document.getElementById('iscr').innerHTML = response.data.score;
    
    document.getElementById('ists').innerHTML = response.data.status;
    
    if (response.data.status == "valid") {

       document.getElementById("imail").style.color = "green";
       document.getElementById("irslt").style.color = "green";
       document.getElementById("iscr").style.color = "green";
       document.getElementById("ists").style.color = "green";

   }else{
    document.getElementById("imail").style.color = "red";
    document.getElementById("irslt").style.color = "red";
    document.getElementById("iscr").style.color = "red";
    document.getElementById("ists").style.color = "red";
}

}
)
 .catch(err => console.error(err));

 
 
 break;
case 3:

    var email = prompt('Hola, Enter The Email!');

    var mailapi = "https://api.hunter.io/v2/email-verifier?email=" + email + "&api_key=995d97f1604de8aa7dee3d0258db2abd407dc5c5";


    fetch(mailapi)
    .then(response => response.json())
    .then((response) => {
        
        console.log(response)
        
        
        document.getElementById('imail').innerHTML = response.data.email;
        
        document.getElementById('irslt').innerHTML = response.data.result;
        
        document.getElementById('iscr').innerHTML = response.data.score;
        
        document.getElementById('ists').innerHTML = response.data.status;
        
        if (response.data.status == "valid") {

           document.getElementById("imail").style.color = "green";
           document.getElementById("irslt").style.color = "green";
           document.getElementById("iscr").style.color = "green";
           document.getElementById("ists").style.color = "green";

       }else{
        document.getElementById("imail").style.color = "red";
        document.getElementById("irslt").style.color = "red";
        document.getElementById("iscr").style.color = "red";
        document.getElementById("ists").style.color = "red";
    }
    
}
)
    .catch(err => console.error(err));


    break;
case 4:
    var email = prompt('Hola, Enter The Email!');

    var mailapi = "https://api.hunter.io/v2/email-verifier?email=" + email + "&api_key=8b383239b3b7d2737a88d97340d21d55a5570d6f";


    fetch(mailapi)
    .then(response => response.json())
    .then((response) => {
        
        console.log(response)
        
        
        document.getElementById('imail').innerHTML = response.data.email;
        
        document.getElementById('irslt').innerHTML = response.data.result;
        
        document.getElementById('iscr').innerHTML = response.data.score;
        
        document.getElementById('ists').innerHTML = response.data.status;
        
        
        if (response.data.status == "valid") {

           document.getElementById("imail").style.color = "green";
           document.getElementById("irslt").style.color = "green";
           document.getElementById("iscr").style.color = "green";
           document.getElementById("ists").style.color = "green";

       }else{
        document.getElementById("imail").style.color = "red";
        document.getElementById("irslt").style.color = "red";
        document.getElementById("iscr").style.color = "red";
        document.getElementById("ists").style.color = "red";
    }
}
)
    .catch(err => console.error(err));

    break;
case 5:
    var email = prompt('Hola, Enter The Email!');

    var mailapi = "https://api.hunter.io/v2/email-verifier?email=" + email + "&api_key=614a695d111d4dd888978f4e9fe8a8aaee8072fb";


    fetch(mailapi)
    .then(response => response.json())
    .then((response) => {
        
        console.log(response)
        
        
        document.getElementById('imail').innerHTML = response.data.email;
        
        document.getElementById('irslt').innerHTML = response.data.result;
        
        document.getElementById('iscr').innerHTML = response.data.score;
        
        document.getElementById('ists').innerHTML = response.data.status;
        
        if (response.data.status == "valid") {

           document.getElementById("imail").style.color = "green";
           document.getElementById("irslt").style.color = "green";
           document.getElementById("iscr").style.color = "green";
           document.getElementById("ists").style.color = "green";

       }else{
        document.getElementById("imail").style.color = "red";
        document.getElementById("irslt").style.color = "red";
        document.getElementById("iscr").style.color = "red";
        document.getElementById("ists").style.color = "red";
    }
    
}
)
    .catch(err => console.error(err));

}