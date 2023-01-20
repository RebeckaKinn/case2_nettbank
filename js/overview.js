
function overview(){
    model.samletOversikt = '';
    getAccounts();
    model.site.innerHTML = /*HTML*/`
    <div class="container">
    <div class="icon"><img src="img/logo_mainsite.png" style=" height: 120px;"></div>
    <div class="titleMainSite">Alle kontoer</div>
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
    <div class="overviewGridTop">
    <div class="">NAVN</div>
    <div class="">SUM</div>
    <div class="">DATO</div>
    ${model.samletOversikt}
    </div>
    `;
}
