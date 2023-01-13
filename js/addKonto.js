function addKonto(){
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
        <button class="menuButton">budsjettkalkulator</button><br/>
        <button class="menuButton">betale regninger</button><br/>
        <button class="menuButton" onclick="settings()">instillinger</button><br/>
        <button class="menuButton" onclick="addKonto()">legg til konto</button><br/>
    </div>
    
    <div class="dropdown">
    <h3>Kontotype</h3>
    <button onclick="showDropdown()" class="dropbtn">Velg kontotype</button>
        <div id="dropdownMenu" class="dropdown-content">
            <div>Brukskonto</div>
            <div>Sparekonto</div>
            <div>BSU</div>
            <div>Fond</div>
            <div>Aksjer</div>
        </div>
    </div>
    <div>Kontonavn</div>
    <input type="text" placeholder="kontonavn"/>*/
    
    `;
}
