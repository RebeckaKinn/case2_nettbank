//TODO
//Finner brukerens informasjon til hovedsiden (må nok dele dette opp i flere functions og legge inn functions istedenfor her)
function getAccountInfo(){
    model.mineKontoer = '';
    model.uttakSite = '';
    model.innskuddSite = '';
    model.samletOversikt = '';
    for(let h = 0; h < model.loggedInUser[0].kontoer.length; h++){
        model.mineKontoer = /*HTML*/`
    <h3>Mine kontoer</h3>
        <div class="accountNameSection1">NAVN
        <div>${model.loggedInUser[0].kontoer[0].name}</div>
        <div>${model.loggedInUser[0].kontoer[1].name}</div>
        <div>${model.loggedInUser[0].kontoer[2].name}</div>
        
    <div class="accountSumSection1">SUM
        <div>${model.loggedInUser[0].kontoer[0].sum}</div>
        <div>${model.loggedInUser[0].kontoer[1].sum}</div>
        <div>${model.loggedInUser[0].kontoer[2].sum}</div>
        </div>
    <div class="accountSumSection1">SIST ENDRET
        <div>${model.loggedInUser[0].kontoer[0].date}</div>
        <div>${model.loggedInUser[0].kontoer[1].date}</div>
        <div>${model.loggedInUser[0].kontoer[2].date}</div>
        </div>
    `;
    }
    
    for(let i = 0; i < model.loggedInUser[0].uttak.length; i++){
        model.uttakSite += /*HTML*/`
        <div>${model.loggedInUser[0].uttak[i].name}</div>
        <div>${model.loggedInUser[0].uttak[i].sum}</div>
        <div>${model.loggedInUser[0].uttak[i].date}</div>
        `;
        }
    for(let j = 0; j < model.loggedInUser[0].innskudd.length; j++){
        model.innskuddSite += /*HTML*/`
        <div>${model.loggedInUser[0].innskudd[j].name}</div>
        <div>${model.loggedInUser[0].innskudd[j].sum}</div>
        <div>${model.loggedInUser[0].innskudd[j].date}</div>
        `;
        }
    for(let k = 0; k < model.loggedInUser[0].kontoer.length; k++){
        model.samletOversikt = /*HTML*/ `
        <div>${model.loggedInUser[0].kontoer[k].name}</div>
        <div>${model.loggedInUser[0].kontoer[k].sum}</div>
         `;
        }
    model.totalsum = 
    model.loggedInUser[0].kontoer[0].sum + 
    model.loggedInUser[0].kontoer[1].sum + 
    model.loggedInUser[0].kontoer[2].sum;
}

//NOT DONE resetter ikke username og password etter feil innlogging
//
//finner hvilken bruker som logger på pålogget
function logInInfo(){
    let wrongLogIn = document.getElementById(`wrongLogIn`);
    let username = document.getElementById(`usernameInput`).value;
    let password = document.getElementById(`passwordInput`).value;
    for(let i = 0; i < model.users.length; i++){
        if(password == model.users[i].password && username == model.users[i].username){
            model.loggedInUser.push(model.users[i]);
            model.online = true;
            mainSite();
        } 
    };
        if(model.online == false){
            password = '';
            username = '';
            wrongLogIn.innerHTML = /*HTML*/`
            <h3>Passord eller brukernavn er feil. Prøv igjen.</h3>
            `;
        };
   
}

//NOT DONE, lager en bruker men vil ikke logge på den nye brukeren
//lager en ny bruker i users
function createNewUser(){
    let wrongLogIn = document.getElementById(`wrongLogIn`);
    let newPassword1 = document.getElementById(`createPassword1`).value;
    let newPassword2 = document.getElementById(`createPassword2`).value;
    let newUsername = document.getElementById(`createUsername`).value;
    let newName = document.getElementById(`createName`).value;
    let newLastName = document.getElementById(`createLastName`).value;
    wrongLogIn.innerHTML = '';
    if(newPassword1 != newPassword2){
        newPassword1 = '';
        newPassword2 = '';
        wrongLogIn.innerHTML = /*HTML*/`
        <h3>Passordene samsvarer ikke, prøv igjen.</h3>
        `;
    }
    if(newPassword1 === newPassword2){
        model.users.push(
            {name: newName,
            lastname: newLastName,
            password: newPassword1,
            username: newUsername,
            img: '',
            kontoer: [{name: 'Brukskonto', sum: 0, date: model.date},
                    {name: 'Sparekonto', sum: 0, date: model.date},
                    {name: 'BSU', sum: 0, date: model.date},
                    {name: 'Fond', sum: 0, date: model.date},
                    {name: 'Aksjer', sum: 0, date: model.date},
                    {name: 'Lån', sum: 0, date: model.date},
                    {name: 'Mastercard', sum: 0, date: model.date},
                    ],
            uttak: [],
            innskudd: [],
                }
            );
        logIn();
    }
}

//DONE
//Logg ut
function logOut(){
    model.loggedInUser.splice(0, model.loggedInUser.length);
    model.valgtBetal.splice(0, model.valgtBetal.length);
    model.valgtKonto.splice(0, model.valgtKonto.length);
    model.online = false;
    logIn();
}


