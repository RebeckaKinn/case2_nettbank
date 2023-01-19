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
        <div class="kontoerName1">${model.loggedInUser[0].kontoer[0].name}</div>
        <div class="kontoerSum1">${model.loggedInUser[0].kontoer[0].sum}</div>

        <div class="kontoerName2">${model.loggedInUser[0].kontoer[1].name}</div>
        <div class="kontoerSum2">${model.loggedInUser[0].kontoer[1].sum}</div>

        <div class="kontoerName3">${model.loggedInUser[0].kontoer[2].name}</div>
        <div class="kontoerSum3">${model.loggedInUser[0].kontoer[2].sum}</div>

        <div class="kontoerName4">${model.loggedInUser[0].kontoer[3].name}</div>
        <div class="kontoerSum4">${model.loggedInUser[0].kontoer[3].sum}</div>

        <div class="kontoerName5">${model.loggedInUser[0].kontoer[4].name}</div>
        <div class="kontoerSum5">${model.loggedInUser[0].kontoer[4].sum}</div>
        <button class="alleKontoerButton" onclick="overview()">Se alle kontoene</button>
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
            model.users.splice(i, 1)
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
    model.users.push(model.loggedInUser[0]);
    model.loggedInUser.splice(0, model.loggedInUser.length);
    model.online = false;
    logIn();
}

function getAccounts(){
    for(let i = 0; i < model.loggedInUser[0].kontoer.length; i++){
        model.samletOversikt += /*HTML*/`
            <div class="kontoName">${model.loggedInUser[0].kontoer[i].name}</div>
            <div class="kontoSum">${model.loggedInUser[0].kontoer[i].sum}</div>
            <div class="kontoDate">${model.loggedInUser[0].kontoer[i].date}</div>
            `;
    }
}

//Done
//Dropdown menu til å legge til kontoer
function showDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}
  
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function chooseAccount(chosen){
    if(chosen == 1) model.opprettetKonto = 'Brukskonto';
    if(chosen == 2) model.opprettetKonto = 'Sparekonto';
    if(chosen == 3) model.opprettetKonto = 'BSU';
    if(chosen == 4) model.opprettetKonto = 'Fond';
    if(chosen == 5) model.opprettetKonto = 'Aksjer';
    model.createdName = model.opprettetKonto;
    addKonto();
    return model.opprettetKonto;
}
//Done
//Lage navn til ny konto
function createAccountName(){
    let inputAccountName = document.getElementById(`inputKontonavn`).value;
    model.createdName = inputAccountName;
    addKonto();
}
function createNewKonto(){
    model.loggedInUser[0].kontoer.push(
        {name: model.createdName, sum: 0, date: model.date}
    )
    overview();
}
//DONE
//Dropdown menu til settings
function showKontoerDropdown(){
    document.getElementById("dropdownMenu2").classList.toggle("show2");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn2')) {
      let dropdowns2 = document.getElementsByClassName("dropdown-content2");
      for (let j = 0; j < dropdowns2.length; j++) {
        let openDropdown2 = dropdowns2[j];
        if (openDropdown2.classList.contains('show2')) {
          openDropdown2.classList.remove('show2');
        }
      }
    }
  }
function generateKonto(){
      for(let i = 0; i < model.loggedInUser[0].kontoer.length; i++){
          model.dropdownKontoer += /*HTML*/`
          <div onclick="chooseKontoNameChange(${i})">${model.loggedInUser[0].kontoer[i].name}</div>
          `;
        }
}
//Not done
//Endre navnet til eksisterende konto
function chooseKontoNameChange(i){
        model.opprettetKonto = model.loggedInUser[0].konto[i].name;
        model.newKontoName = model.opprettetKonto;
        settings();
}
    
function saveChanges(){
    let name = document.getElementById(`newNameInput`).value;
    let lastName = document.getElementById(`newLastNameInput`).value;
    let oldPassword = document.getElementById(`oldPassword`).value;
    let newPassword1 = document.getElementById(`newPassword1`).value;
    let newPassword2 = document.getElementById(`newPassword2`).value;
    model.newUserName = name;
    model.newUserLastName = lastName;
    if(model.newUserName !== '' && model.newUserLastName !==''){
        model.loggedInUser[0].name = model.newUserName;
        model.loggedInUser[0].lastname = model.newUserLastName;
    }
    if(oldPassword !== '' || newPassword1 !== '' || newPassword2 !== ''){
        if(oldPassword != model.loggedInUser[0].password || newPassword1 != newPassword2 || newPassword1 == '' || newPassword2 == '' || newPassword1.length > 4 || newPassword2.length > 4){
            model.settingsWrongPassword = /*HTML*/`
            <h3 class="settingsFlex">Noen av passordene samsvarer ikke. Prøv igjen.</h3>
            `;
        }
        if(oldPassword == model.loggedInUser[0].password && newPassword1 == newPassword2 && newPassword1.length <= 4 && newPassword2.length <= 4){
            model.loggedInUser[0].password = newPassword1;
            model.settingsWrongPassword = /*HTML*/`
            <h3 class="settingsFlex">Passord oppdatert!</h3>
            `;
        }
    }
    model.settingsSaved = /*HTML*/ `
    <h3 class="settingsFlex">Endringene er lagret.</h3>
    `;
    console.log(model.loggedInUser[0].password)
    settings(); 
}