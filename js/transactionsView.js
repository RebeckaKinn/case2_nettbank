
function seeAllTransactions(){
    model.title = 'Alle transaksjoner';
    let uttak = '';
    let innskudd = '';
    for(let i = 0; i < model.loggedInUser[0].uttak.length; i++){
        uttak += /*HTML*/`
        <div class="kontoGridUttak">
            <div class="uttakNameTransaction">${model.loggedInUser[0].uttak[i].name}</div>
            <div class="uttakSumTransaction">${model.loggedInUser[0].uttak[i].sum}</div>
            <div class="uttakDateTransaction">${model.loggedInUser[0].uttak[i].date}</div>
        </div>
            `;
    }
    for(let j = 0; j < model.loggedInUser[0].innskudd.length; j++){
        innskudd += /*HTML*/`
        <div class="kontoGridInnskudd">
            <div class="innskuddNameTransaction">${model.loggedInUser[0].innskudd[j].name}</div>
            <div class="innskuddSumTransaction">${model.loggedInUser[0].innskudd[j].sum}</div>
            <div class="innskuddDateTransaction">${model.loggedInUser[0].innskudd[j].date}</div>
        </div>
        `;
    }
    model.site.innerHTML = /*HTML*/`
    <div class="container">
    ${menu()}
    <div class="transactionsGridLeft">
        <div class="tName">NAVN</div>
        <div class="tSum">SUM</div>
        <div class="tDate">DATO</div>
            ${uttak}
    </div>
    <div class="transactionsGridRight">
        <div class="dName">NAVN</div>
        <div class="dSum">SUM</div>
        <div class="dDate">DATO</div>
            ${innskudd}
    </div>

        <div class="background"></div>
        <div class="background2"></div>
        <div class="background3"></div>
    </div>
    `;
}
