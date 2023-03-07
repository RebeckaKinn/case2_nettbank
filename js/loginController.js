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
//Logg ut
function logOut(){
    model.settingsSaved = '';
    model.settingsWrongPassword = '';
    model.users.push(model.loggedInUser[0]);
    model.loggedInUser.splice(0, model.loggedInUser.length);
    model.online = false;
    logIn();
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
            img: 'img/default_profile.png',
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