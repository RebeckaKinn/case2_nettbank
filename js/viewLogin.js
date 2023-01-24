logIn();
//logger inn eksisterende bruker, eller sender brukeren til å lage konto
function logIn(){
    model.site.innerHTML = /*HTML*/`
    <div class="accountGrid">
    <div class="logo"><img src="img/logo.png"></div>
    <h2 class="title">Logg inn</h2>
    <div class="username">Brukernavn</div>
    <input class="usernameInput" id="usernameInput" type="text" placeholder="Brukernavn"/>
    <div class="password">Passord</div>
    <input class="passwordInput" id="passwordInput" type="text" placeholder="Passord"/>
    <button class="logInButton" onclick="logInInfo()">Logg Inn</button>
    <div class="wrongLogIn" id="wrongLogIn"></div>
    <div class="noAccount">Har ingen konto? <button class="createAccoutButton" onclick="createAccount()">Registrer deg her.</button></div>
    </div>
    `;
}

//NOT DONE
//lager en ny bruker
function createAccount(){
    model.wrongPassword = '';
    model.site.innerHTML = /*HTML*/`
    <div class="accountGrid">
    <div class="logo"><img src="img/logo.png"></div>
    <h2 class="title">Lag en bruker</h2>
    <div class="wrongInput" id="wrongInput"></div>
    <div class="yourName">Ditt navn</div>
    <input class="nameInput" id="createName" type="text" placeholder="Fornavn"/>
    <input class="lastNameInput" id="createLastName" type="text" placeholder="Etternavn"/>

    <div class="username2">Brukernavn</div>
    <input class="createUsernameInput" id="createUsername" type="text" placeholder="Brukernavn"/>
    <div class="createPassword">Passord</div>
    <input class="createPassword1Input" id="createPassword1" type="text" placeholder="Passord"/>
    <input class="createPassword2Input" id="createPassword2" type="text" placeholder="Gjenta passord"/>
    <div class="wrongLogIn2" id="wrongLogIn"></div>
    <button class="buttonCreateAccount" onclick="createNewUser()">Opprett konto</button>
    </div>
    `;
}