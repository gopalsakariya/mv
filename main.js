

var email = prompt();

var mailapi = "https://api.hunter.io/v2/email-verifier?email=" + email + "&api_key=08feff467a8ed0d134df86992041af58921bb2f0";


fetch(mailapi)
  .then(response => response.json())
  .then((response) => {
    
    console.log(response)
  
  
  document.getElementById('imail').innerHTML = response.data.email;
  
  document.getElementById('irslt').innerHTML = response.data.result;
  
  document.getElementById('iscr').innerHTML = response.data.score;
  
  document.getElementById('ists').innerHTML = response.data.status;
  
  
  
  }
  )
  .catch(err => console.error(err));




