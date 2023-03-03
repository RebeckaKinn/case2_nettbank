function addKonto(){
    model.settingsSaved = '';
    model.settingsWrongPassword = '';
    model.site.innerHTML = /*HTML*/`
    <div class="container">
    <div class="icon"><img src="img/logo_mainsite.png" style=" height: 120px;"></div>
    <div class="titleMainSite">Legg til konto</div>
    <div class="welcomeTitle">Velkommen</div><div class="nameTag">${model.loggedInUser[0].name} ${model.loggedInUser[0].lastname}</div>
    <button class="logOutButton" onclick="logOut()">Logg ut</button>

    <div class="meny">
        <h3>MENY</h3><br/>
        <button class="menuButton" onclick="mainSite()">oversikt</button><br/>
        <button class="menuButton" onclick="overview()">samlet oversikt</button><br/>
        <button class="menuButton" onclick="payBills()">betale regninger</button><br/>
        <button class="menuButton" onclick="settings()">instillinger</button><br/>
        <button class="menuButton" onclick="addKonto()">legg til konto</button><br/>
    </div>
    
    <div class="dropdown">
    <h3>Kontotype</h3>
    <button onclick="showDropdown()" class="dropbtn">Velg kontotype</button>
        <div id="dropdownMenu" class="dropdown-content">
            <div onclick="chooseAccount(1)">Brukskonto</div>
            <div onclick="chooseAccount(2)">Sparekonto</div>
            <div onclick="chooseAccount(3)">BSU</div>
            <div onclick="chooseAccount(4)">Fond</div>
            <div onclick="chooseAccount(5)">Aksjer</div>
        </div>
        <br/><br/>
        <div>Kontotype: ${model.opprettetKonto}</div>
        <div>Kontonavn: ${model.createdName}</div>
        <div>Kontonavn</div>
        <input id="inputKontonavn" class="inputKontonavn" type="text" placeholder="kontonavn"/>
        <button class="createAccountNameButton" onclick="createAccountName()">Lagre kontonavn</button>

        <button class="opprettKontoButton" onclick="createNewKonto()">Opprett konto</button>
    </div>
    `;
}
