function SearchMail() {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(document.getElementById('inputmail').value.match(mailformat))
    {   


        // document.getElementById('imail').innerHTML = "Loading...";

        // document.getElementById('irslt').innerHTML = "Loading...";

        // document.getElementById('iscr').innerHTML = "Loading...";

        // document.getElementById('ists').innerHTML = "Loading...";





        var email = document.getElementById('inputmail').value;
        alert(email);


        var ran = Array(1,2,3,4,5,7,8,10,12,26,27,28,29,30,31,32,33,34,35,36,37);

        var apin = ran[Math.floor(Math.random()*ran.length)];



        console.log(apin);


        switch (apin) {
        case 1:
            document.getElementById('imail').innerHTML = "Loading...";

            document.getElementById('irslt').innerHTML = "Loading...";

            document.getElementById('iscr').innerHTML = "Loading...";

            document.getElementById('ists').innerHTML = "Loading...";



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


            break;
        case 2:
            document.getElementById('imail').innerHTML = "Loading...";

            document.getElementById('irslt').innerHTML = "Loading...";

            document.getElementById('iscr').innerHTML = "Loading...";

            document.getElementById('ists').innerHTML = "Loading...";

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

            document.getElementById('imail').innerHTML = "Loading...";

            document.getElementById('irslt').innerHTML = "Loading...";

            document.getElementById('iscr').innerHTML = "Loading...";

            document.getElementById('ists').innerHTML = "Loading...";


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


            document.getElementById('imail').innerHTML = "Loading...";

            document.getElementById('irslt').innerHTML = "Loading...";

            document.getElementById('iscr').innerHTML = "Loading...";

            document.getElementById('ists').innerHTML = "Loading...";

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
            document.getElementById('imail').innerHTML = "Loading...";

            document.getElementById('irslt').innerHTML = "Loading...";

            document.getElementById('iscr').innerHTML = "Loading...";

            document.getElementById('ists').innerHTML = "Loading...";


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
            document.getElementById('imail').innerHTML = "Loading...";

            document.getElementById('irslt').innerHTML = "Loading...";

            document.getElementById('iscr').innerHTML = "Loading...";

            document.getElementById('ists').innerHTML = "Loading...";

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

            document.getElementById('imail').innerHTML = "Loading...";

            document.getElementById('irslt').innerHTML = "Loading...";

            document.getElementById('iscr').innerHTML = "Loading...";

            document.getElementById('ists').innerHTML = "Loading...";

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
            document.getElementById('imail').innerHTML = "Loading...";

            document.getElementById('irslt').innerHTML = "Loading...";

            document.getElementById('iscr').innerHTML = "Loading...";

            document.getElementById('ists').innerHTML = "Loading...";

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
            document.getElementById('imail').innerHTML = "Loading...";

            document.getElementById('irslt').innerHTML = "Loading...";

            document.getElementById('iscr').innerHTML = "Loading...";

            document.getElementById('ists').innerHTML = "Loading...";

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
            document.getElementById('imail').innerHTML = "Loading...";

            document.getElementById('irslt').innerHTML = "Loading...";

            document.getElementById('iscr').innerHTML = "Loading...";

            document.getElementById('ists').innerHTML = "Loading...";

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
            document.getElementById('imail').innerHTML = "Loading...";

            document.getElementById('irslt').innerHTML = "Loading...";

            document.getElementById('iscr').innerHTML = "Loading...";

            document.getElementById('ists').innerHTML = "Loading...";

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
            document.getElementById('imail').innerHTML = "Loading...";

            document.getElementById('irslt').innerHTML = "Loading...";

            document.getElementById('iscr').innerHTML = "Loading...";

            document.getElementById('ists').innerHTML = "Loading...";

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
            document.getElementById('imail').innerHTML = "Loading...";

            document.getElementById('irslt').innerHTML = "Loading...";

            document.getElementById('iscr').innerHTML = "Loading...";

            document.getElementById('ists').innerHTML = "Loading...";

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


            break;


        case 16:
            document.getElementById('imail').innerHTML = "Loading...";

            document.getElementById('irslt').innerHTML = "Loading...";



            const settings16 = {
                "async": true,
                "crossDomain": true,
                "url": "https://email-verifier-validator.p.rapidapi.com/api/"+email,
                "method": "GET",
                "headers": {
                    "X-RapidAPI-Key": "9e03f61470msh54c142b216b25fdp167d0ejsne021f7be3134",
                    "X-RapidAPI-Host": "email-verifier-validator.p.rapidapi.com"
                }
            };

            $.ajax(settings16).done(function (response) {
                console.log(response);

                console.log(response.Email);
                console.log(response.Result);


                document.getElementById('imail').innerHTML = response.Email;

                document.getElementById('irslt').innerHTML = response.Result;

                document.getElementById('lirslt').innerHTML = "Status :";

                document.getElementById('iscr').innerHTML = "";

                document.getElementById('ists').innerHTML = "";

                document.getElementById('liscr').innerHTML = "";

                document.getElementById('lists').innerHTML = "";


                if (response.Result == "Valid") {

                   document.getElementById("imail").style.color = "green";
                   document.getElementById("irslt").style.color = "green";

               }else{
                document.getElementById("imail").style.color = "red";
                document.getElementById("irslt").style.color = "red";

            }


        });

            break;


        case 26:
            document.getElementById('imail').innerHTML = "Loading...";

            document.getElementById('irslt').innerHTML = "Loading...";



            const settings26 = {
                "async": true,
                "crossDomain": true,
                "url": "https://email-verifier-validator.p.rapidapi.com/api/"+email,
                "method": "GET",
                "headers": {
                    "X-RapidAPI-Key": "fa8436ff32mshf3790f254bc5941p124f3ajsn52f8f02f7b50",
                    "X-RapidAPI-Host": "email-verifier-validator.p.rapidapi.com"
                }
            };

            $.ajax(settings26).done(function (response) {
                console.log(response);

                console.log(response.Email);
                console.log(response.Result);


                document.getElementById('imail').innerHTML = response.Email;

                document.getElementById('irslt').innerHTML = response.Result;

                document.getElementById('lirslt').innerHTML = "Status :";

                document.getElementById('iscr').innerHTML = "";

                document.getElementById('ists').innerHTML = "";

                document.getElementById('liscr').innerHTML = "";

                document.getElementById('lists').innerHTML = "";


                if (response.Result == "Valid") {

                   document.getElementById("imail").style.color = "green";
                   document.getElementById("irslt").style.color = "green";

               }else{
                document.getElementById("imail").style.color = "red";
                document.getElementById("irslt").style.color = "red";
                
            }


        });

            break;


        case 27:
            document.getElementById('imail').innerHTML = "Loading...";

            document.getElementById('irslt').innerHTML = "Loading...";



            const settings27 = {
                "async": true,
                "crossDomain": true,
                "url": "https://email-verifier-validator.p.rapidapi.com/api/"+email,
                "method": "GET",
                "headers": {
                    "X-RapidAPI-Key": "07f993e9ffmsh308bcbb0ca1089dp1404c3jsn6cbea23085e5",
                    "X-RapidAPI-Host": "email-verifier-validator.p.rapidapi.com"
                }
            };

            $.ajax(settings27).done(function (response) {
                console.log(response);

                console.log(response.Email);
                console.log(response.Result);


                document.getElementById('imail').innerHTML = response.Email;

                document.getElementById('irslt').innerHTML = response.Result;

                document.getElementById('lirslt').innerHTML = "Status :";

                document.getElementById('iscr').innerHTML = "";

                document.getElementById('ists').innerHTML = "";

                document.getElementById('liscr').innerHTML = "";

                document.getElementById('lists').innerHTML = "";


                if (response.Result == "Valid") {

                   document.getElementById("imail").style.color = "green";
                   document.getElementById("irslt").style.color = "green";

               }else{
                document.getElementById("imail").style.color = "red";
                document.getElementById("irslt").style.color = "red";
                
            }


        });

            break;


        case 28:
            document.getElementById('imail').innerHTML = "Loading...";

            document.getElementById('irslt').innerHTML = "Loading...";



            const settings28 = {
                "async": true,
                "crossDomain": true,
                "url": "https://email-verifier-validator.p.rapidapi.com/api/"+email,
                "method": "GET",
                "headers": {
                    "X-RapidAPI-Key": "742ce4e29dmshbdc741d4e7775ccp1f181ejsn769ecb972827",
                    "X-RapidAPI-Host": "email-verifier-validator.p.rapidapi.com"
                }
            };

            $.ajax(settings28).done(function (response) {
                console.log(response);

                console.log(response.Email);
                console.log(response.Result);


                document.getElementById('imail').innerHTML = response.Email;

                document.getElementById('irslt').innerHTML = response.Result;

                document.getElementById('lirslt').innerHTML = "Status :";

                document.getElementById('iscr').innerHTML = "";

                document.getElementById('ists').innerHTML = "";

                document.getElementById('liscr').innerHTML = "";

                document.getElementById('lists').innerHTML = "";


                if (response.Result == "Valid") {

                   document.getElementById("imail").style.color = "green";
                   document.getElementById("irslt").style.color = "green";

               }else{
                document.getElementById("imail").style.color = "red";
                document.getElementById("irslt").style.color = "red";
                
            }


        });

            break;


        case 29:
            document.getElementById('imail').innerHTML = "Loading...";

            document.getElementById('irslt').innerHTML = "Loading...";



            const settings29 = {
                "async": true,
                "crossDomain": true,
                "url": "https://email-verifier-validator.p.rapidapi.com/api/"+email,
                "method": "GET",
                "headers": {
                    "X-RapidAPI-Key": "64cf19ee8cmshd24278206816227p1172c0jsn3f224510a191",
                    "X-RapidAPI-Host": "email-verifier-validator.p.rapidapi.com"
                }
            };

            $.ajax(settings29).done(function (response) {
                console.log(response);

                console.log(response.Email);
                console.log(response.Result);


                document.getElementById('imail').innerHTML = response.Email;

                document.getElementById('irslt').innerHTML = response.Result;

                document.getElementById('lirslt').innerHTML = "Status :";

                document.getElementById('iscr').innerHTML = "";

                document.getElementById('ists').innerHTML = "";

                document.getElementById('liscr').innerHTML = "";

                document.getElementById('lists').innerHTML = "";


                if (response.Result == "Valid") {

                   document.getElementById("imail").style.color = "green";
                   document.getElementById("irslt").style.color = "green";

               }else{
                document.getElementById("imail").style.color = "red";
                document.getElementById("irslt").style.color = "red";
                
            }


        });

            break;


        case 30:
            document.getElementById('imail').innerHTML = "Loading...";

            document.getElementById('irslt').innerHTML = "Loading...";



            const settings30 = {
                "async": true,
                "crossDomain": true,
                "url": "https://email-verifier-validator.p.rapidapi.com/api/"+email,
                "method": "GET",
                "headers": {
                    "X-RapidAPI-Key": "874cf91f48msh72d3cf537e719b4p1ce71djsn2f0d442fc3ac",
                    "X-RapidAPI-Host": "email-verifier-validator.p.rapidapi.com"
                }
            };

            $.ajax(settings30).done(function (response) {
                console.log(response);

                console.log(response.Email);
                console.log(response.Result);


                document.getElementById('imail').innerHTML = response.Email;

                document.getElementById('irslt').innerHTML = response.Result;

                document.getElementById('lirslt').innerHTML = "Status :";

                document.getElementById('iscr').innerHTML = "";

                document.getElementById('ists').innerHTML = "";

                document.getElementById('liscr').innerHTML = "";

                document.getElementById('lists').innerHTML = "";


                if (response.Result == "Valid") {

                   document.getElementById("imail").style.color = "green";
                   document.getElementById("irslt").style.color = "green";

               }else{
                document.getElementById("imail").style.color = "red";
                document.getElementById("irslt").style.color = "red";
                
            }


        });

            break;


        case 31:
            document.getElementById('imail').innerHTML = "Loading...";

            document.getElementById('irslt').innerHTML = "Loading...";



            const settings31 = {
                "async": true,
                "crossDomain": true,
                "url": "https://email-verifier-validator.p.rapidapi.com/api/"+email,
                "method": "GET",
                "headers": {
                    "X-RapidAPI-Key": "6f0ceb074fmsh6403fff13e9ac2ep193a35jsn2dc542eef98e",
                    "X-RapidAPI-Host": "email-verifier-validator.p.rapidapi.com"
                }
            };

            $.ajax(settings31).done(function (response) {
                console.log(response);

                console.log(response.Email);
                console.log(response.Result);


                document.getElementById('imail').innerHTML = response.Email;

                document.getElementById('irslt').innerHTML = response.Result;

                document.getElementById('lirslt').innerHTML = "Status :";

                document.getElementById('iscr').innerHTML = "";

                document.getElementById('ists').innerHTML = "";

                document.getElementById('liscr').innerHTML = "";

                document.getElementById('lists').innerHTML = "";


                if (response.Result == "Valid") {

                   document.getElementById("imail").style.color = "green";
                   document.getElementById("irslt").style.color = "green";

               }else{
                document.getElementById("imail").style.color = "red";
                document.getElementById("irslt").style.color = "red";
                
            }


        });

            break;


        case 32:
            document.getElementById('imail').innerHTML = "Loading...";

            document.getElementById('irslt').innerHTML = "Loading...";



            const settings32 = {
                "async": true,
                "crossDomain": true,
                "url": "https://email-verifier-validator.p.rapidapi.com/api/"+email,
                "method": "GET",
                "headers": {
                    "X-RapidAPI-Key": "a1c76ac7c5mshc1e03c565cb7fdcp1a5bf1jsna811f61ef231",
                    "X-RapidAPI-Host": "email-verifier-validator.p.rapidapi.com"
                }
            };

            $.ajax(settings32).done(function (response) {
                console.log(response);

                console.log(response.Email);
                console.log(response.Result);


                document.getElementById('imail').innerHTML = response.Email;

                document.getElementById('irslt').innerHTML = response.Result;

                document.getElementById('lirslt').innerHTML = "Status :";

                document.getElementById('iscr').innerHTML = "";

                document.getElementById('ists').innerHTML = "";

                document.getElementById('liscr').innerHTML = "";

                document.getElementById('lists').innerHTML = "";


                if (response.Result == "Valid") {

                   document.getElementById("imail").style.color = "green";
                   document.getElementById("irslt").style.color = "green";

               }else{
                document.getElementById("imail").style.color = "red";
                document.getElementById("irslt").style.color = "red";
                
            }


        });

            break;


        case 33:
            document.getElementById('imail').innerHTML = "Loading...";

            document.getElementById('irslt').innerHTML = "Loading...";



            const settings33 = {
                "async": true,
                "crossDomain": true,
                "url": "https://email-verifier-validator.p.rapidapi.com/api/"+email,
                "method": "GET",
                "headers": {
                    "X-RapidAPI-Key": "f43a32eeb0msh393395962413266p11b847jsn70a159d36600",
                    "X-RapidAPI-Host": "email-verifier-validator.p.rapidapi.com"
                }
            };

            $.ajax(settings33).done(function (response) {
                console.log(response);

                console.log(response.Email);
                console.log(response.Result);


                document.getElementById('imail').innerHTML = response.Email;

                document.getElementById('irslt').innerHTML = response.Result;

                document.getElementById('lirslt').innerHTML = "Status :";

                document.getElementById('iscr').innerHTML = "";

                document.getElementById('ists').innerHTML = "";

                document.getElementById('liscr').innerHTML = "";

                document.getElementById('lists').innerHTML = "";


                if (response.Result == "Valid") {

                   document.getElementById("imail").style.color = "green";
                   document.getElementById("irslt").style.color = "green";

               }else{
                document.getElementById("imail").style.color = "red";
                document.getElementById("irslt").style.color = "red";
                
            }


        });

            break;


        case 34:
            document.getElementById('imail').innerHTML = "Loading...";

            document.getElementById('irslt').innerHTML = "Loading...";



            const settings34 = {
                "async": true,
                "crossDomain": true,
                "url": "https://email-verifier-validator.p.rapidapi.com/api/"+email,
                "method": "GET",
                "headers": {
                    "X-RapidAPI-Key": "440ffc8bc7msh9a99c49dd47f5b2p167c00jsn9147415f8447",
                    "X-RapidAPI-Host": "email-verifier-validator.p.rapidapi.com"
                }
            };

            $.ajax(settings34).done(function (response) {
                console.log(response);

                console.log(response.Email);
                console.log(response.Result);


                document.getElementById('imail').innerHTML = response.Email;

                document.getElementById('irslt').innerHTML = response.Result;

                document.getElementById('lirslt').innerHTML = "Status :";

                document.getElementById('iscr').innerHTML = "";

                document.getElementById('ists').innerHTML = "";

                document.getElementById('liscr').innerHTML = "";

                document.getElementById('lists').innerHTML = "";


                if (response.Result == "Valid") {

                   document.getElementById("imail").style.color = "green";
                   document.getElementById("irslt").style.color = "green";

               }else{
                document.getElementById("imail").style.color = "red";
                document.getElementById("irslt").style.color = "red";
                
            }


        });

            break;

        case 35:
            document.getElementById('imail').innerHTML = "Loading...";

            document.getElementById('irslt').innerHTML = "Loading...";



            const settings35 = {
                "async": true,
                "crossDomain": true,
                "url": "https://email-verifier-validator.p.rapidapi.com/api/"+email,
                "method": "GET",
                "headers": {
                    "X-RapidAPI-Key": "64f39da940msh0d0e95e04c1f0f6p1d72d5jsnd0f749675035",
                    "X-RapidAPI-Host": "email-verifier-validator.p.rapidapi.com"
                }
            };

            $.ajax(settings35).done(function (response) {
                console.log(response);

                console.log(response.Email);
                console.log(response.Result);


                document.getElementById('imail').innerHTML = response.Email;

                document.getElementById('irslt').innerHTML = response.Result;

                document.getElementById('lirslt').innerHTML = "Status :";

                document.getElementById('iscr').innerHTML = "";

                document.getElementById('ists').innerHTML = "";

                document.getElementById('liscr').innerHTML = "";

                document.getElementById('lists').innerHTML = "";


                if (response.Result == "Valid") {

                   document.getElementById("imail").style.color = "green";
                   document.getElementById("irslt").style.color = "green";

               }else{
                document.getElementById("imail").style.color = "red";
                document.getElementById("irslt").style.color = "red";
                
            }


        });

            break;


        case 36:
            document.getElementById('imail').innerHTML = "Loading...";

            document.getElementById('irslt').innerHTML = "Loading...";



            const settings36 = {
                "async": true,
                "crossDomain": true,
                "url": "https://email-verifier-validator.p.rapidapi.com/api/"+email,
                "method": "GET",
                "headers": {
                    "X-RapidAPI-Key": "c3e59a9d5cmsh5a0ce8dca69dbb6p17f85djsnef698484df73",
                    "X-RapidAPI-Host": "email-verifier-validator.p.rapidapi.com"
                }
            };

            $.ajax(settings36).done(function (response) {
                console.log(response);

                console.log(response.Email);
                console.log(response.Result);


                document.getElementById('imail').innerHTML = response.Email;

                document.getElementById('irslt').innerHTML = response.Result;

                document.getElementById('lirslt').innerHTML = "Status :";

                document.getElementById('iscr').innerHTML = "";

                document.getElementById('ists').innerHTML = "";

                document.getElementById('liscr').innerHTML = "";

                document.getElementById('lists').innerHTML = "";


                if (response.Result == "Valid") {

                   document.getElementById("imail").style.color = "green";
                   document.getElementById("irslt").style.color = "green";

               }else{
                document.getElementById("imail").style.color = "red";
                document.getElementById("irslt").style.color = "red";
                
            }


        });

            break;

        case 37:
            document.getElementById('imail').innerHTML = "Loading...";

            document.getElementById('irslt').innerHTML = "Loading...";



            const settings37 = {
                "async": true,
                "crossDomain": true,
                "url": "https://email-verifier-validator.p.rapidapi.com/api/"+email,
                "method": "GET",
                "headers": {
                    "X-RapidAPI-Key": "bf2c8075edmshff63a31546fa69cp19855ejsn29f56d2c88a7",
                    "X-RapidAPI-Host": "email-verifier-validator.p.rapidapi.com"
                }
            };

            $.ajax(settings37).done(function (response) {
                console.log(response);

                console.log(response.Email);
                console.log(response.Result);


                document.getElementById('imail').innerHTML = response.Email;

                document.getElementById('irslt').innerHTML = response.Result;

                document.getElementById('lirslt').innerHTML = "Status :";

                document.getElementById('iscr').innerHTML = "";

                document.getElementById('ists').innerHTML = "";

                document.getElementById('liscr').innerHTML = "";

                document.getElementById('lists').innerHTML = "";


                if (response.Result == "Valid") {

                   document.getElementById("imail").style.color = "green";
                   document.getElementById("irslt").style.color = "green";

               }else{
                document.getElementById("imail").style.color = "red";
                document.getElementById("irslt").style.color = "red";
                
            }


        });

            break;


        }



        document.getElementById('inputmail').value = "";


    }
    else
    {
        alert("You have entered an invalid email address!");  
        document.getElementById('inputmail').value = "";


    }



}




