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
    sub = model.loggedInUser[0].kontoer[model.index1].sum - model.newNumber;
    add = model.loggedInUser[0].kontoer[model.index2].sum + model.newNumber;
    model.loggedInUser[0].kontoer[model.index1].sum = sub;
    model.loggedInUser[0].kontoer[model.index2].sum = add;
    model.newNumber = '';
    console.log(sub, add)
    mainSite();
}