function settings(){
    generateKonto();
    model.site.innerHTML = /*HTML*/`
    <div class="container">
    <div class="icon"><img src="img/logo_mainsite.png" style=" height: 120px;"></div>
    <div class="titleMainSite">Instillinger</div>
    <div class="welcomeTitle">Velkommen</div><div class="nameTag">${model.loggedInUser[0].name} ${model.loggedInUser[0].lastname}</div>
    <button class="logOutButton" onclick="logOut()">Logg ut</button>

    <div class="meny">
        <h3>MENY</h3><br/>
        <button class="menuButton" onclick="mainSite()">oversikt</button><br/>
        <button class="menuButton" onclick="overview()">samlet oversikt</button><br/>
        <button class="menuButton">budsjettkalkulator</button><br/>
        <button class="menuButton">betale regninger</button><br/>
        <button class="menuButton" onclick="settings()">instillinger</button><br/>
        <button class="menuButton" onclick="addKonto()">legg til konto</button><br/>
    </div>
    
    <div>Rediger navn</div>
    <div>${model.loggedInUser[0].name}</div>
    <input type="text" value="${model.loggedInUser[0].name}"/>;
    <div>${model.loggedInUser[0].lastname}</div>
    <input type="text" value="${model.loggedInUser[0].lastname}"/>;

    <div>Endre passord</div>
    <div>Ditt gamle passord</div>
    <input type="text" id="oldPassword" placeholder="passord"/>
    <div>Nytt passord</div>
    <input type="text" id="newPassword1" placeholder="nytt passord"/>
    <div>Gjenta passord</div>
    <input type="text" id="newPassword2" placeholder="gjenta passord"/>
    
    <div>Endre navn på konto</div>
    <div class="dropdown2">
    <button onclick="showKontoerDropdown()" class="dropbtn2">${model.opprettetKonto}</button>
        <div id="dropdownMenu2" class="dropdown-content2">
            ${model.dropdownKontoer}
        </div>
    </div>
    <input type="text" value="${model.newKontoName}"/>
    <button>Lagre</button>
    `;
}