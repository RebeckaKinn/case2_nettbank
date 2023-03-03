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
    model.newNumber = parseInt(inputPay.value);
    model.loggedInUser[0].kontoer[model.index].sum = model.loggedInUser[0].kontoer[model.index].sum - model.newNumber;
    model.loggedInUser[0].uttak.push({
                                name: accountNumber,
                                sum: model.newNumber,
                                date: model.date,
                            },)
    model.newNumber = 0;
    model.paied = true;
    payBills();
}