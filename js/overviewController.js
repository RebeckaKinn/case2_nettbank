function getAccounts(){
    for(let i = 0; i < model.loggedInUser[0].kontoer.length; i++){
        model.samletOversikt += /*HTML*/`
            <div class="kontoName">${model.loggedInUser[0].kontoer[i].name}</div>
            <div class="kontoSum">${model.loggedInUser[0].kontoer[i].sum}</div>
            <div class="kontoDate">${model.loggedInUser[0].kontoer[i].date}</div>
            `;
    }
}
