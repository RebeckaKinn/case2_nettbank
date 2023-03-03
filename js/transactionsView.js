
function seeAllTransactions(){
    model.site.innerHTML = /*HTML*/`
    <div class="container">
    <div class="icon"><img src="img/logo_mainsite.png" style=" height: 120px;"></div>
    <div class="titleMainSite">Alle transaksjoner</div>
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
    <div class="">NAVN</div>
    <div class="">SUM</div>
    <div class="">DATO</div>

    <div class="">NAVN</div>
    <div class="">SUM</div>
    <div class="">DATO</div>
    `;
    for(let i = 0; i < model.loggedInUser[0].uttak.length; i++){
        model.site.innerHTML += /*HTML*/`
            <div class="uttakNamei">${model.loggedInUser[0].uttak[i].name}</div>
            <div class="uttakSumi">${model.loggedInUser[0].uttak[i].sum}</div>
            <div class="uttakDatei">${model.loggedInUser[0].uttak[i].date}</div>
            `;
    }
    for(let j = 0; j < model.loggedInUser[0].innskudd.length; j++){
        model.site.innerHTML += /*HTML*/`
            <div class="innskuddNamej">${model.loggedInUser[0].innskudd[j].name}</div>
            <div class="innskuddSumj">${model.loggedInUser[0].innskudd[j].sum}</div>
            <div class="innskuddDatej">${model.loggedInUser[0].innskudd[j].date}</div>
        `;
    }
}
