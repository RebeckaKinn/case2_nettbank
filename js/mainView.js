
//TODO

function mainSite(){
    getAccountInfo();
    getUttak();
    getInnskudd();
    mainsiteOverview();
    showMenu();
    model.paied = false;
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

function getAccountInfo(){
    model.settingsSaved = '';
    model.settingsWrongPassword = '';
    model.mineKontoer = '';
    model.uttakSite = '';
    model.innskuddSite = '';
    model.samletOversikt = '';
    model.mineKontoer = /*HTML*/`
        <h3 class="kontoTittel">Mine kontoer</h3>
        <div class="accountNameTitle">NAVN</div>
        <div class="accountSumTitle">SUM</div>
        <div class="accountDateTitle">SIST ENDRET</div>
        `;
    if(model.loggedInUser[0].kontoer.length == 0){
        model.mineKontoer = /*HTML*/`
        <h3 class="kontoTittel">Ingen registrerte kontoer enda</h3>
        `;
    } else if(model.loggedInUser[0].kontoer.length > 3){
        model.totalsum = 
        model.loggedInUser[0].kontoer[0].sum + 
        model.loggedInUser[0].kontoer[1].sum + 
        model.loggedInUser[0].kontoer[2].sum;
        model.mineKontoer += /*HTML*/`
        <div class="kontoMainGrid">
            <div class="accountName">${model.loggedInUser[0].kontoer[0].name}</div>
            <div class="accountSum">${model.loggedInUser[0].kontoer[0].sum}</div>
            <div class="accountDate">${model.loggedInUser[0].kontoer[0].date}</div>
        </div><div class="kontoMainGrid">
            <div class="accountName">${model.loggedInUser[0].kontoer[1].name}</div>
            <div class="accountSum">${model.loggedInUser[0].kontoer[1].sum}</div>
            <div class="accountDate">${model.loggedInUser[0].kontoer[1].date}</div>
        </div><div class="kontoMainGrid">
            <div class="accountName">${model.loggedInUser[0].kontoer[2].name}</div>
            <div class="accountSum">${model.loggedInUser[0].kontoer[2].sum}</div>
            <div class="accountDate">${model.loggedInUser[0].kontoer[2].date}</div>
        </div><div class="kontoMainGrid">
            <div class="accountName">Sum kontoer: </div>
            <div class="accountSum">${model.totalsum}</div>
        </div>
        `;
    }else{
        for(let h = 0; h < model.loggedInUser[0].kontoer.length; h++){
        model.mineKontoer += /*HTML*/`
        <div class="kontoMainGrid">
            <div class="accountName">${model.loggedInUser[0].kontoer[h].name}</div>
            <div class="accountSum">${model.loggedInUser[0].kontoer[h].sum}</div>
            <div class="accountDate">${model.loggedInUser[0].kontoer[h].date}</div>
        </div>
        `;
        }
    }
}

function getUttak(){
    //model.loggedInUser[0].uttak.reverse();
    model.uttakSite = /*HTML*/ `
    <h3 class="uttakTittle">Uttak</h3>
    <div class="uttakNameTitle">NAVN</div>
    <div class="uttakSumTitle">SUM</div>
    <div class="uttakDateTitle">DATO</div>`;
    if(model.loggedInUser[0].uttak.length == 0){
        model.uttakSite = /*HTML*/`
        <h3 class="uttakTittle">Ingen registrerte uttak enda</h3>
        `;
    }else if(model.loggedInUser[0].uttak.length > 4){
        model.uttakSite += /*HTML*/`
        <div class="uttakGrid">
            <div class="uttakName">${model.loggedInUser[0].uttak[0].name}</div>
            <div class="uttakSum">${model.loggedInUser[0].uttak[0].sum}</div>
            <div class="uttakDate">${model.loggedInUser[0].uttak[0].date}</div>
        </div><div class="uttakGrid">    
            <div class="uttakName">${model.loggedInUser[0].uttak[1].name}</div>
            <div class="uttakSum">${model.loggedInUser[0].uttak[1].sum}</div>
            <div class="uttakDate">${model.loggedInUser[0].uttak[1].date}</div>
        </div><div class="uttakGrid">    
            <div class="uttakName">${model.loggedInUser[0].uttak[2].name}</div>
            <div class="uttakSum">${model.loggedInUser[0].uttak[2].sum}</div>
            <div class="uttakDate">${model.loggedInUser[0].uttak[2].date}</div>
        </div><div class="uttakGrid">
            <div class="uttakName">${model.loggedInUser[0].uttak[3].name}</div>
            <div class="uttakSum">${model.loggedInUser[0].uttak[3].sum}</div>
            <div class="uttakDate">${model.loggedInUser[0].uttak[3].date}</div>
        </div>
            `;
    }else{
        for(let i = 0; i < model.loggedInUser[0].uttak.length; i++){
            model.uttakSite += /*HTML*/`
            <div class="uttakGrid">
                <div class="uttakName">${model.loggedInUser[0].uttak[i].name}</div>
                <div class="uttakSum">${model.loggedInUser[0].uttak[i].sum}</div>
                <div class="uttakDate">${model.loggedInUser[0].uttak[i].date}</div>
            </div>
            `;
        }
    }
}

function getInnskudd(){
    //model.loggedInUser[0].innskudd.reverse();
    model.innskuddSite = /*HTML*/`
    <h3 class="innskuddTitle">Innskudd</h3>
    <div class="inskuddNameTitle">NAVN</div>
    <div class="inskuddSumTitle">SUM</div>
    <div class="inskuddDateTitle">DATO</div>
    `;
    if(model.loggedInUser[0].innskudd.length == 0){
            model.innskuddSite = /*HTML*/`
            <h3 class="innskuddTitle">Ingen registrerte innskudd enda</h3>
            `;
    }else if(model.loggedInUser[0].innskudd.length > 4){
        model.innskuddSite += /*HTML*/`
        <div class="innskuddGrid">
            <div class="innskuddkName">${model.loggedInUser[0].innskudd[0].name}</div>
            <div class="innskuddSum">${model.loggedInUser[0].innskudd[0].sum}</div>
            <div class="innskuddDate">${model.loggedInUser[0].innskudd[0].date}</div>
        </div><div class="innskuddGrid">       
            <div class="innskuddkName">${model.loggedInUser[0].innskudd[1].name}</div>
            <div class="innskuddSum">${model.loggedInUser[0].innskudd[1].sum}</div>
            <div class="innskuddDate">${model.loggedInUser[0].innskudd[1].date}</div>
        </div><div class="innskuddGrid">    
            <div class="innskuddkName">${model.loggedInUser[0].innskudd[2].name}</div>
            <div class="innskuddSum">${model.loggedInUser[0].innskudd[2].sum}</div>
            <div class="innskuddDate">${model.loggedInUser[0].innskudd[2].date}</div>
        </div><div class="innskuddGrid">
            <div class="innskuddkName">${model.loggedInUser[0].innskudd[3].name}</div>
            <div class="innskuddSum">${model.loggedInUser[0].innskudd[3].sum}</div>
            <div class="innskuddDate">${model.loggedInUser[0].innskudd[3].date}</div>
        </div>
            `;
    }else{
            for(let j = 0; j < model.loggedInUser[0].innskudd.length; j++){
            model.innskuddSite += /*HTML*/`
            <div class="innskuddGrid">
                <div class="innskuddkName">${model.loggedInUser[0].innskudd[j].name}</div>
                <div class="innskuddSum">${model.loggedInUser[0].innskudd[j].sum}</div>
                <div class="innskuddDate">${model.loggedInUser[0].innskudd[j].date}</div>
            </div>
                `;
            }
    }
}

function mainsiteOverview(){
    model.samletOversikt = /*HTML*/`
    <b class="uttakTittle">Kontoer</b>
    `;
    if(model.loggedInUser[0].kontoer.length == 0){
        model.samletOversikt = /*HTML*/`
        <h3 class="uttakTittle">Ingen registrerte kontoer enda</h3>
        `;
    }else if(model.loggedInUser[0].kontoer.length > 4){
        model.samletOversikt += /*HTML*/ `
        <div class="mainsiteOverviewGrid">
            <div class="kontoerName">${model.loggedInUser[0].kontoer[0].name}</div>
            <div class="kontoerSum">${model.loggedInUser[0].kontoer[0].sum}</div>
        </div><div class="mainsiteOverviewGrid">
            <div class="kontoerName">${model.loggedInUser[0].kontoer[1].name}</div>
            <div class="kontoerSum">${model.loggedInUser[0].kontoer[1].sum}</div>
        </div><div class="mainsiteOverviewGrid">
            <div class="kontoerName">${model.loggedInUser[0].kontoer[2].name}</div>
            <div class="kontoerSum">${model.loggedInUser[0].kontoer[2].sum}</div>
        </div><div class="mainsiteOverviewGrid">
            <div class="kontoerName">${model.loggedInUser[0].kontoer[3].name}</div>
            <div class="kontoerSum">${model.loggedInUser[0].kontoer[3].sum}</div>
        </div><div class="mainsiteOverviewGrid">
            <div class="kontoerName">${model.loggedInUser[0].kontoer[4].name}</div>
            <div class="kontoerSum">${model.loggedInUser[0].kontoer[4].sum}</div>
        </div>
            <button class="alleKontoerButton" onclick="overview()">Se alle</button>
        `; 
    }else{
        for(let i = 0; i < model.loggedInUser[0].kontoer.length; i++){
        model.samletOversikt += /*HTML*/`
        <div class="mainsiteOverviewGrid">
            <div class="kontoerName">${model.loggedInUser[0].kontoer[i].name}</div>
            <div class="kontoerSum">${model.loggedInUser[0].kontoer[i].sum}</div>
        </div>
            `;
        }
    }
}

