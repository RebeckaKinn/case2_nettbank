function overview(){
    model.title = 'Alle kontoer';
    model.samletOversikt = '';
    
    getAccounts();
    model.site.innerHTML = /*HTML*/`
    <div class="container">
    ${menu()}

    <div class="background"></div>
    <div class="background2"></div>
    <div class="background3"></div>
        <div class="overviewGridTop">
    <div class="overviewName">NAVN</div>
    <div class="overviewSum">SUM</div>
    <div class="overviewDate">DATO</div>
    ${model.samletOversikt}
    </div>
    `;
}

function getAccounts(){
    for(let i = 0; i < model.loggedInUser[0].kontoer.length; i++){
        model.samletOversikt += /*HTML*/`
            <div class="kontoName">${model.loggedInUser[0].kontoer[i].name}</div>
            <div class="kontoSum">${model.loggedInUser[0].kontoer[i].sum}</div>
            <div class="kontoDate">${model.loggedInUser[0].kontoer[i].date}</div>
            `;
    }
}
