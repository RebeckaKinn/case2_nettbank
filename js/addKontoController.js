//Done
//Dropdown menu til å legge til kontoer
function showDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}
  
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function chooseAccount(chosen){
    if(chosen == 1) model.opprettetKonto = 'Brukskonto';
    if(chosen == 2) model.opprettetKonto = 'Sparekonto';
    if(chosen == 3) model.opprettetKonto = 'BSU';
    if(chosen == 4) model.opprettetKonto = 'Fond';
    if(chosen == 5) model.opprettetKonto = 'Aksjer';
    model.createdName = model.opprettetKonto;
    addKonto();
    return model.opprettetKonto;
}
//Done
//Lage navn til ny konto
function createAccountName(){
    let inputAccountName = document.getElementById(`inputKontonavn`).value;
    model.createdName = inputAccountName;
    addKonto();
}
function createNewKonto(){
    model.loggedInUser[0].kontoer.push(
        {name: model.createdName, sum: 0, date: model.date}
    )
    overview();
}
