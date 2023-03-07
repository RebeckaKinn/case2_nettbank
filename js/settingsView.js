function settings(){
    generateKonto();
    model.title = 'Instillinger';
    model.site.innerHTML = /*HTML*/`
    <div class="container">
    ${menu()}
    <div class="settingsFlex">
        <div>Rediger navn</div>
        <div>${model.loggedInUser[0].name}</div>
        <input id="newNameInput" type="text" value="${model.newUserName}"/>
        <div>${model.loggedInUser[0].lastname}</div>
        <input id="newLastNameInput" type="text" value="${model.newUserLastName}"/>

        <div>Endre passord</div>
        <div>Ditt gamle passord</div>
        <input type="text" id="oldPassword" placeholder="passord"/>
        <div>Nytt passord</div>
        <input type="text" id="newPassword1" placeholder="nytt passord">
        <div>Gjenta passord</div>
        <input type="text" id="newPassword2" placeholder="gjenta passord"/>
        ${model.settingsWrongPassword}
    
        <div>Endre navn på konto</div>
        <div class="dropdown2">
        <button onclick="showKontoerDropdown()" class="dropbtn2">${model.newKontoName}</button>
            <div id="dropdownMenu2" class="dropdown-content2">
                ${model.dropdownKontoer}
            </div>
        </div>
        <input type="text" id="newKontoNameInput" value="${model.loggedInUser[0].kontoer[model.index].name}"/>
        <button onclick="saveChanges()">Lagre</button>
        ${model.settingsSaved}
    </div>
    `;
}