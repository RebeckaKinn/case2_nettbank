
//TODO

function mainSite(){
    getAccountInfo();
    getUttak();
    getInnskudd();
    mainsiteOverview();
    showMenu();
    model.site.innerHTML = /*HTML*/`
    <div class="container">
    <div class="icon"><img src="img/logo_mainsite.png" style=" height: 120px;"></div>
    <div class="titleMainSite">Oversikt</div>
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

    <div class="mineKontoerGrid">
    ${model.mineKontoer}
    </div>

    <h3 class="midTitle">Siste transaksjoner</h3>
    <button class="seeAllTransactions" onclick="seeAllTransactions()">Se alle transaksjonene</button>

    <div class="uttakTitleGrid">
    ${model.uttakSite}
    </div>
    
    <div class="lastSection2">
    ${model.innskuddSite}
    </div>

    <div class="samletOversiktGrid">
    ${model.samletOversikt}
    </div>

    <div class="lastRight">
    <div>
    <h3>Overfør fra</h3>
        <div>${model.loggedInUser[0].kontoer[model.index1].name} 
            ${model.loggedInUser[0].kontoer[model.index1].sum} kr</div>
        <div>
            <button class="buttonChooseAccount" 
            onclick="chooseOtherAccount('accountTo')">
            Velg en annen konto</button>
        <div id="accountToDropdown" class="dropdown-content">
        ${model.accountTo}</div>
        </div>
    <h3>Overføre til</h3>
        <div>${model.loggedInUser[0].kontoer[model.index2].name} 
            ${model.loggedInUser[0].kontoer[model.index2].sum} kr</div>
        <div>
            <button class="buttonChooseAccount" 
            onclick="chooseOtherAccount('accountFrom')">
            Velg en annen konto</button>
        <div id="accountFromDropdown" class="dropdown-content">
        ${model.accountTo}</div>
        </div>
        <br/>
        <input type="number" value="${model.newNumber}" placeholder="sum" id="numberInput"/>
            <button class="transferButton" onclick="transfer()">Overfør</button>
        </div>
    </div>
    `;
}

