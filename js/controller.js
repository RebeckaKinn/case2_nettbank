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
        <div class="accountNameTitle">NAVN</div>
        <div class="accountName1Section1">${model.loggedInUser[0].kontoer[0].name}</div>
        <div class="accountName2Section1">${model.loggedInUser[0].kontoer[1].name}</div>
        <div class="accountName3Section1">${model.loggedInUser[0].kontoer[2].name}</div>
    <div class="accountSumTitle">SUM</div>
        <div class="accountSum1Section1">${model.loggedInUser[0].kontoer[0].sum}</div>
        <div class="accountSum2Section1">${model.loggedInUser[0].kontoer[1].sum}</div>
        <div class="accountSum3Section1">${model.loggedInUser[0].kontoer[2].sum}</div>
    <div class="accountDateTitle">SIST ENDRET</div>
        <div class="accountDate1Section1">${model.loggedInUser[0].kontoer[0].date}</div>
        <div class="accountDate2Section1">${model.loggedInUser[0].kontoer[1].date}</div>
        <div class="accountDate3Section1">${model.loggedInUser[0].kontoer[2].date}</div>
    `;
    }
    
    let uttakNumber = model.loggedInUser[0].uttak.length;
    let uttak0 = uttakNumber -1;
    let uttak1 = uttakNumber -2;
    let uttak2 = uttakNumber -3;
        model.uttakSite += /*HTML*/`
        <div class="uttakNameTitle">NAVN</div>
            <div class="uttakName1">${model.loggedInUser[0].uttak[uttak0].name}</div>
            <div class="uttakName2">${model.loggedInUser[0].uttak[uttak1].name}</div>
            <div class="uttakName3">${model.loggedInUser[0].uttak[uttak2].name}</div>
        <div class="uttakSumTitle">SUM</div>
            <div class="uttakSum1">${model.loggedInUser[0].uttak[uttak0].sum}</div>
            <div class="uttakSum2">${model.loggedInUser[0].uttak[uttak1].sum}</div>
            <div class="uttakSum3">${model.loggedInUser[0].uttak[uttak2].sum}</div>
        <div class="uttakDateTitle">DATO</div>
            <div class="uttakDate1">${model.loggedInUser[0].uttak[uttak0].date}</div>
            <div class="uttakDate2">${model.loggedInUser[0].uttak[uttak1].date}</div>
            <div class="uttakDate3">${model.loggedInUser[0].uttak[uttak2].date}</div>
        `;

        let innskuddNumber = model.loggedInUser[0].innskudd.length;
        let innskudd0 = innskuddNumber -1;
        let innskudd1 = innskuddNumber -2;
        let innskudd2 = innskuddNumber -3;
        model.innskuddSite += /*HTML*/`
        <div class="inskuddNameTitle">NAVN</div>
            <div class="innskuddName1">${model.loggedInUser[0].innskudd[innskudd0].name}</div>
            <div class="innskuddName2">${model.loggedInUser[0].innskudd[innskudd1].name}</div>
            <div class="innskuddName3">${model.loggedInUser[0].innskudd[innskudd2].name}</div>
        <div class="inskuddSumTitle">SUM</div>
            <div class="innskuddSum1">${model.loggedInUser[0].innskudd[innskudd0].sum}</div>
            <div class="innskuddSum2">${model.loggedInUser[0].innskudd[innskudd1].sum}</div>
            <div class="innskuddSum3">${model.loggedInUser[0].innskudd[innskudd2].sum}</div>
        <div class="inskuddDateTitle">DATO</div>
            <div class="innskuddDate1">${model.loggedInUser[0].innskudd[innskudd0].date}</div>
            <div class="innskuddDate2">${model.loggedInUser[0].innskudd[innskudd1].date}</div>
            <div class="innskuddDate3">${model.loggedInUser[0].innskudd[innskudd2].date}</div>
        `;
        
        model.samletOversikt = /*HTML*/ `
        <div class="kontoerName">${model.loggedInUser[0].kontoer[0].name}</div>
        <div class="kontoerSum">${model.loggedInUser[0].kontoer[0].sum}</div>
         `;
        
    model.totalsum = 
    model.loggedInUser[0].kontoer[0].sum + 
    model.loggedInUser[0].kontoer[1].sum + 
    model.loggedInUser[0].kontoer[2].sum;
}

//DONE
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

//DONE
//lager en ny bruker i users
function createNewUser(){
    let wrongInput = document.getElementById(`wrongInput`);
    let wrongLogIn = document.getElementById(`wrongLogIn`);
    let newPassword1 = document.getElementById(`createPassword1`).value;
    let newPassword2 = document.getElementById(`createPassword2`).value;
    let newUsername = document.getElementById(`createUsername`).value;
    let newName = document.getElementById(`createName`).value;
    let newLastName = document.getElementById(`createLastName`).value;
    if(newPassword1 != newPassword2 || newPassword1 == '' || newPassword2 == ''){
        newPassword1 = '';
        newPassword2 = '';
        wrongLogIn.innerHTML = /*HTML*/`
        <h3>Passordene samsvarer ikke, prøv igjen.</h3>
        `;
    }
    if(newUsername == '' || newLastName == '' || newName == ''){
        newPassword1 = '';
        newPassword2 = '';
        newUsername = '';
        newName = '';
        newLastName = '';
        wrongInput.innerHTML = /*HTML*/`
        <h3>Noen av feltene mangler.</h3>
        `;
    }
    if(newPassword1 === newPassword2 && newPassword1 != '' && newPassword2 != ''){
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
    model.online = false;
    logIn();
}


