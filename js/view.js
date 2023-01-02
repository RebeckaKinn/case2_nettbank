logIn();
//NOT TESTED
//logger inn eksisterende bruker, eller sender brukeren til å lage konto
function logIn(){
    model.site.innerHTML = /*HTML*/`
    <div class="accountGrid">
    <div><img src="img/logo.png"></div>
    <h2>Logg inn</h2>
    <input id="usernameInput" type="text" placeholder="Brukernavn"/>
    <input id="passwordInput" type="text" placeholder="Passord"/>
    <button onclick="logInInfo()">Logg Inn</button>
    <div id="wrongLogIn"></div>
    <div>Har ingen konto? <button onclick="createAccount()">Registrer deg her.</button></div>
    </div>
    `;
}

//NOT TESTED
//lager en ny bruker
function createAccount(){
    model.wrongPassword = '';
    model.site.innerHTML = /*HTML*/`
    <div class="accountGrid">
    <div><img src="img/logo.png"></div>
    <h2>Lag en bruker</h2>
    <h3>Ditt navn</h3>
    <input id="createName" type="text" placeholder="Fornavn"/>
    <input id="createLastName" type="text" placeholder="Etternavn"/>

    <h3>Brukernavn</h3>
    <input id="createUsername" type="text" placeholder="Brukernavn"/>
    <input id="createPassword1" type="text" placeholder="Passord"/>
    <input id="createPassword2" type="text" placeholder="Gjenta passord"/>
    <div id="wrongLogIn"></div>
    <button onclick="createNewUser()">Opprett konto</button>
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
    <div class="icon"><img src="img/logo.png"></div>
    <div class="titleBar">
    <h1>Oversikt</h1>
    <div>Velkommen <h2>${model.users[0].name} ${model.users[0].lastname}</h2></div>
    <button onclick="logOut()">Logg ut</button>
    </div>

    <div class="meny">
        <h3>MENY</h3>
        <div>oversikt</div>
        <div>eFaktura</div>
        <div>budsjettkalkulator</div>
        <div>pengebruk</div>
        <div>instillinger</div>
        <div>legg til konto</div>
    </div>

    <div class="mineKontoer">${model.mineKontoer}
        <div>Sum kontoer</div>
        <div>${model.totalsum}</div>
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
        <div>${model.valgtKonto[0].name}</div>
        <div>${model.valgtKonto[0].sum}</div>
        <button onclick="chooseOtherAccount()">Velg en annen konto</button>
    <h3>Overføre til</h3>
        <div>${model.valgtBetal[0].name}</div>
        <div>${model.valgtBetal[0].sum}</div>
        <button onclick="chooseOtherPay()">Velg en annen konto</button>
    </div>
    </div>
    `;
}