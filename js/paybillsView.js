function payBills(){
    patToAccount();
    model.title = 'Betal regninger';
    model.site.innerHTML = /*HTML*/`
    <div class="container">
    ${menu()}
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