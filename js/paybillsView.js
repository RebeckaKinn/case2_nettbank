function payBills(){
    patToAccount();
    model.site.innerHTML = /*HTML*/`
    <div class="container">
    <div class="icon"><img src="img/logo_mainsite.png" style=" height: 120px;"></div>
    <div class="titleMainSite">Betal regninger</div>
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

    <div class="background"></div>
    <div class="background2"></div>
    <div class="background3"></div>
    
    <div class="overviewGridTop">
        <div class="payToFlex">
        <div>Betale til</div>
        <label>Kontonummer: </label>
        <input 
        style="width: 200px;"
            type="number" 
            id="numberInput"
            min="11"
            max="11"
            placeholder="Kontonummer 11 siffer"
            style="width: 100px; padding-bottom: 15px;"/>
        <br/>
        <div>Betale fra</div>
        <div class="dropdown2">
        <button onclick="showKontoerDropdown()" class="dropbtn2">${model.payTo}</button>
            <div id="dropdownMenu2" class="dropdown-content2">
                ${model.dropdownKontoer}
            </div>
        </div>
        <label>Sum: </label>
        <input
            style="width: 200px;"
            type="number"
            id="inputPay"
            style="width: 100px;"
            placeholder="Betallingssum"/>

        <button class="menuButton button" onclick="payTo()">Betal</button>
        ${model.paied 
            ? `<div>Overføringen var vellykket</div>`
            : ''
        }
        ${model.warningPay}
        </div>
    </div>
   
    `;
}