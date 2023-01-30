function SearchMail() {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(document.getElementById('inputmail').value.match(mailformat))
    {   


        document.getElementById('imail').innerHTML = "Loading...";

        document.getElementById('irslt').innerHTML = "Loading...";

        document.getElementById('iscr').innerHTML = "Loading...";

        document.getElementById('ists').innerHTML = "Loading...";





        var email = document.getElementById('inputmail').value;
        alert(email);


        var ran = Array(1,2,3,4,5,7,8,10,12);

        var apin = ran[Math.floor(Math.random()*ran.length)];
        console.log(apin);


        switch (apin) {
        case 1:



            var mailapi = "https://api.hunter.io/v2/email-verifier?email=" + email + "&api_key=08feff467a8ed0d134df86992041af58921bb2f0";


            fetch(mailapi)
            .then(response => response.json())
            .then((response) => {

                console.log(response);


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
            break;
        case 6:

            var mailapi = "https://api.hunter.io/v2/email-verifier?email=" + email + "&api_key=fa026dbe8b5a8e7a32e6d927deab53df95ed6d54";


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
        case 7:


            var mailapi = "https://api.hunter.io/v2/email-verifier?email=" + email + "&api_key=da7ac6012e6640f306c317d94aea5b3664afc5e5";


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
        case 8: 

            var mailapi = "https://api.hunter.io/v2/email-verifier?email=" + email + "&api_key=2e9c3b2dfeb194f836677efc1738c5ae8c1a044f";


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
        case 9:

            var mailapi = "https://api.hunter.io/v2/email-verifier?email=" + email + "&api_key=576159e1aacd3fdcc9c29fc0cc088d85ec3e029d";


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
        case 10:

            var mailapi = "https://api.hunter.io/v2/email-verifier?email=" + email + "&api_key=4d07f3b88ea4cb182bed42497e76f3ce3b29fc60";


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
        case 11:

            var mailapi = "https://api.hunter.io/v2/email-verifier?email=" + email + "&api_key=b87e95dd458d61ce005da70738ee6e790d643fa0";


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
        case 12:

            var mailapi = "https://api.hunter.io/v2/email-verifier?email=" + email + "&api_key=e94918ffe1ee7b246949a26442feaf23d326b321";


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
        case 13:

            var mailapi = "https://api.hunter.io/v2/email-verifier?email=" + email + "&api_key=27354f81bc6a00de03640625c9670e13230bc703";


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



        document.getElementById('inputmail').value = "";


    }
    else
    {
        alert("You have entered an invalid email address!");  
        document.getElementById('inputmail').value = "";

         
    }



}




