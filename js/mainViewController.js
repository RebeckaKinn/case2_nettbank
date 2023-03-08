//TODO
function chooseOtherAccount(chosenMenu){
    if(chosenMenu == 'accountTo'){
        index = model.index1;
        document.getElementById("accountToDropdown").classList.toggle("show");
    }
    if(chosenMenu == 'accountFrom'){
        index = model.index2;
        document.getElementById("accountFromDropdown").classList.toggle("show");
    }

    
}
window.onclick = function(event) {
    if (!event.target.matches('.buttonChooseAccount')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  
function showMenu(index){
      model.accountTo = '';
      for(let i = 0; i < model.loggedInUser[0].kontoer.length; i++){
          model.accountTo += /*HTML*/`
          <div onclick="chosenNewAccount(index, ${i})">
          ${model.loggedInUser[0].kontoer[i].name} 
          ${model.loggedInUser[0].kontoer[i].sum}
          </div>
          `;
        }
    return model.accountTo;
}

function chosenNewAccount(index, newIndex){
        if(model.index1 == index) model.index1 = newIndex;
        if(model.index2 == index) model.index2 = newIndex;
        if(model.index1 == model.index2) model.index1 = 0;
    mainSite();
}

function transfer(){
    let sub = 0;
    let add = 0;
    let numberInput = document.querySelector(`#numberInput`);
    model.newNumber = parseInt(numberInput.value);
    if(model.newNumber > model.loggedInUser[0].kontoer[model.index1].sum){
        model.warning = /*HTML*/`
        <i class="warning">Du har ikke nok på konto</i>
        `;
    } else {
    sub = model.loggedInUser[0].kontoer[model.index1].sum - model.newNumber;
    add = model.loggedInUser[0].kontoer[model.index2].sum + model.newNumber;
    model.loggedInUser[0].kontoer[model.index1].sum = sub;
    model.loggedInUser[0].kontoer[model.index2].sum = add;
    model.loggedInUser[0].uttak.push({
                                      name: model.loggedInUser[0].kontoer[model.index1].name,
                                      sum: '-' + model.newNumber,
                                      date: model.date
    },)
    model.loggedInUser[0].innskudd.push({
                                        name: model.loggedInUser[0].kontoer[model.index2].name,
                                        sum: model.newNumber,
                                        date: model.date,
    },)
    model.newNumber = '';
    model.warning = '';
    }
    mainSite();
}

function reset(){
    model.settingsSaved = '';
    model.settingsWrongPassword = '';
    model.newNumber = '';
    model.createdName = '';
    model.newUserName = '';
    model.newUserLastName = '';
    model.warning = '';
    model.warningPay = '';
    model.paied = false;
    model.uttakSite = '';
    model.innskuddSite = '';
    model.mineKontoer = '';
    model.samletOversikt = '';
    model.dropdownKontoer = '';
    model.accountTo = '';
    model.accountFrom = '';
    model.newProfileimg = '';
    model.newImgProofing = false;
}