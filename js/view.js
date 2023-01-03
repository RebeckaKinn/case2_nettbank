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

//TODO
//Hovedside med informasjon av den reelle brukeren. 
//Må oppdatere for å være current user og ikke beta
function mainSite(){
    getAccountInfo();
    model.site.innerHTML = /*HTML*/`
    <div class="container">
    <div class="icon"><img src="img/logo_mainsite.png" style=" height: 120px;"></div>
    <div class="titleMainSite">Oversikt</div>
    <div class="welcomeTitle">Velkommen</div><div class="nameTag">${model.loggedInUser[0].name} ${model.loggedInUser[0].lastname}</div>
    <button class="logOutButton" onclick="logOut()">Logg ut</button>

    <div class="meny">
        <h3>MENY</h3><br/>
        <button class="menuButton">oversikt</button><br/>
        <button class="menuButton">eFaktura</button><br/>
        <button class="menuButton">budsjettkalkulator</button><br/>
        <button class="menuButton">pengebruk</button><br/>
        <button class="menuButton">instillinger</button><br/>
        <button class="menuButton">legg til konto</button><br/>
    </div>

    <div class="mineKontoerGrid">${model.mineKontoer}
        <div class="totalSum">Sum kontoer: </div>
        <div class="totalSumNumber">${model.totalsum}</div>
    </div>

    <div class="midSection">
        <h3>Siste transaksjoner</h3>
        <button>Se alle transaksjonene</button>
    </div>

    <div class="lastSection">
    <h3>Uttak</h3>
    <div>
        <div>NAVN</div>
        <div>SUM</div>
        <div>DATO</div>
    </div>
    ${model.uttakSite}
    </div>
    <div class="lastSection2">
    <h3>Innskudd</h3>
    <div>
        <div>NAVN</div>
        <div>SUM</div>
        <div>DATO</div>
    </div>
    ${model.innskuddSite}
    </div>

    <div class="firstRight">
    <h3>Samlet oversikt</h3>
    ${model.samletOversikt}
    </div>

    <div class="lastRight">
    <h3>Overfør fra</h3>
        <div>${model.loggedInUser[0].kontoer[0].name}</div>
        <div>${model.loggedInUser[0].kontoer[0].sum}</div>
        <button onclick="chooseOtherAccount()">Velg en annen konto</button>
    <h3>Overføre til</h3>
        <div>${model.loggedInUser[0].kontoer[1].name}</div>
        <div>${model.loggedInUser[0].kontoer[1].sum}</div>
        <button onclick="chooseOtherPay()">Velg en annen konto</button>
    </div>
    </div>
    `;
}