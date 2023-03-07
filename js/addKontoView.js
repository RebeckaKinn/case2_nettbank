function addKonto(){
    model.title = 'Legg til konto';
    model.site.innerHTML = /*HTML*/`
    <div class="container">
    ${menu()}

    <div class="background"></div>
    <div class="background2"></div>
    <div class="background3"></div>
    
    <div class="dropdown">
    <h3>Kontotype</h3>
    <button onclick="showDropdown()" class="dropbtn">Velg kontotype</button>
        <div id="dropdownMenu" class="dropdown-content">
            <div onclick="chooseAccount(1)">Brukskonto</div>
            <div onclick="chooseAccount(2)">Sparekonto</div>
            <div onclick="chooseAccount(3)">BSU</div>
            <div onclick="chooseAccount(4)">Fond</div>
            <div onclick="chooseAccount(5)">Aksjer</div>
        </div>
        <br/><br/>
        <div>Kontotype: ${model.opprettetKonto}</div>
        <div>Kontonavn</div>
        <input id="inputKontonavn" class="inputKontonavn" type="text" placeholder="kontonavn"/>
        <button class="opprettKontoButton" onclick="createNewKonto()">Opprett konto</button>
    </div>
    `;
}
