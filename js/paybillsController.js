function patToAccount(){
    model.dropdownKontoer = '';
      for(let i = 0; i < model.loggedInUser[0].kontoer.length; i++){
          model.dropdownKontoer += /*HTML*/`
          <div onclick="payToChosen(${i})">
          ${model.loggedInUser[0].kontoer[i].name}
          ${model.loggedInUser[0].kontoer[i].sum}</div>
          `;
        }
        return model.dropdownKontoer;
    }

    function payToChosen(i){
        model.payTo = model.loggedInUser[0].kontoer[i].name;
        model.index = i;
        payBills();
}

function payTo(){
    let inputPay = document.querySelector(`#inputPay`);
    let accountNumber = document.querySelector(`#numberInput`);
    if(inputPay.value > model.loggedInUser[0].kontoer[model.index].sum){
        model.warningPay = /*HTML*/`
        <i class="warning">Du har ikke nok på konto</i>
        `;
        model.paied = false;
    } else {
    model.newNumber = parseInt(inputPay.value);
    model.loggedInUser[0].kontoer[model.index].sum = model.loggedInUser[0].kontoer[model.index].sum - model.newNumber;
    model.loggedInUser[0].uttak.push({
                                name: accountNumber.value,
                                sum: model.newNumber,
                                date: model.date,
                            },)
    model.newNumber = 0;
    model.paied = true;
    model.warningPay = '';
    }
    payBills();
}