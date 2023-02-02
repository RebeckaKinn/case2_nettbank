
//TODO
function mainSite(){
    getAccountInfo();
    getUttak();
    getInnskudd();
    mainsiteOverview();
    let index1 = 0;
    let index2 = 1;
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
    <h3>Overfør fra</h3>
        <div>${model.loggedInUser[0].kontoer[index1].name} 
            ${model.loggedInUser[0].kontoer[index1].sum} kr</div>

    <div>
        <button class="buttonChooseAccount" 
        onclick="chooseOtherAccount(${index1})">
        Velg en annen konto</button>
        <div id="dropdownMenu" class="dropdown-content"></div>
    </div>
        <br/><br/>

    <h3>Overføre til</h3>
        <div>${model.loggedInUser[0].kontoer[index2].name} 
            ${model.loggedInUser[0].kontoer[index2].sum} kr</div>
        
    <div>
        <button class="buttonChooseAccount" 
        onclick="chooseOtherAccount(${index2})">
        Velg en annen konto</button>
        <div id="dropdownMenu" class="dropdown-content"></div>
    </div>
    </div>
    `;
}

