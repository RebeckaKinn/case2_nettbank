
function overview(){
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
    <div class="">NAVN</div>
    <div class="">SUM</div>
    <div class="">DATO</div>
    `;
    for(let i = 0; i < model.loggedInUser[0].kontoer.length; i++){
        model.site.innerHTML += /*HTML*/`
            <div class="kontoNamei">${model.loggedInUser[0].kontoer[i].name}</div>
            <div class="kontoSumi">${model.loggedInUser[0].kontoer[i].sum}</div>
            <div class="kontoDatei">${model.loggedInUser[0].kontoer[i].date}</div>
        `;
    }
}
