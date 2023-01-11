
//TODO
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
        <button class="menuButton" onclick="mainSite()">oversikt</button><br/>
        <button class="menuButton" onclick="overview()">samlet oversikt</button><br/>
        <button class="menuButton">budsjettkalkulator</button><br/>
        <button class="menuButton">pengebruk</button><br/>
        <button class="menuButton">betale regninger</button><br/>
        <button class="menuButton" onclick="settings()">instillinger</button><br/>
        <button class="menuButton">legg til konto</button><br/>
    </div>

    <div class="mineKontoerGrid">${model.mineKontoer}
        <div class="totalSum">Sum kontoer: </div>
        <div class="totalSumNumber">${model.totalsum}</div>
    </div>

    <h3 class="midTitle">Siste transaksjoner</h3>
    <button class="seeAllTransactions" onclick="seeAllTransactions()">Se alle transaksjonene</button>

    <div class="uttakTitleGrid">
    <h3 class="uttakTittle">Uttak</h3>
    ${model.uttakSite}
    </div>
    <div class="lastSection2">
    <h3>Innskudd</h3>
    ${model.innskuddSite}
    </div>
    <div class="samletOversiktGrid">
    <h3>Kontoer</h3>
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

