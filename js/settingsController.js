//DONE
//Dropdown menu til settings
function showKontoerDropdown(){
    document.getElementById("dropdownMenu2").classList.toggle("show2");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn2')) {
      let dropdowns2 = document.getElementsByClassName("dropdown-content2");
      for (let j = 0; j < dropdowns2.length; j++) {
        let openDropdown2 = dropdowns2[j];
        if (openDropdown2.classList.contains('show2')) {
          openDropdown2.classList.remove('show2');
        }
      }
    }
  }
function generateKonto(){
    model.dropdownKontoer = '';
      for(let i = 0; i < model.loggedInUser[0].kontoer.length; i++){
          model.dropdownKontoer += /*HTML*/`
          <div onclick="chooseKontoNameChange(${i})">${model.loggedInUser[0].kontoer[i].name}</div>
          `;
        }
    }
    //DONE
    //Endre navnet til eksisterende konto
    function chooseKontoNameChange(i){
        model.newKontoName = model.loggedInUser[0].kontoer[i].name;
        model.index = i;
        settings();
}
    
function saveChanges(){
    let name = document.getElementById(`newNameInput`).value;
    let lastName = document.getElementById(`newLastNameInput`).value;
    let oldPassword = document.getElementById(`oldPassword`).value;
    let newPassword1 = document.getElementById(`newPassword1`).value;
    let newPassword2 = document.getElementById(`newPassword2`).value;
    let kontoNameInput = document.getElementById(`newKontoNameInput`).value;
    model.newUserName = name;
    model.newUserLastName = lastName;
    if(model.newUserName !== '' && model.newUserLastName !==''){
        model.loggedInUser[0].name = model.newUserName;
        model.loggedInUser[0].lastname = model.newUserLastName;
    }
    if(oldPassword !== '' || newPassword1 !== '' || newPassword2 !== ''){
        if(oldPassword != model.loggedInUser[0].password || newPassword1 != newPassword2 || newPassword1 == '' || newPassword2 == '' || newPassword1.length > 4 || newPassword2.length > 4){
            model.settingsWrongPassword = /*HTML*/`
            <h3 class="settingsFlex">Noen av passordene samsvarer ikke. Prøv igjen.</h3>
            `;
        }
        if(oldPassword == model.loggedInUser[0].password && newPassword1 == newPassword2 && newPassword1.length <= 4 && newPassword2.length <= 4){
            model.loggedInUser[0].password = newPassword1;
            model.settingsWrongPassword = /*HTML*/`
            <h3 class="settingsFlex">Passord oppdatert!</h3>
            `;
        }
    }
    model.loggedInUser[0].kontoer[model.index].name = kontoNameInput;
    model.newKontoName = model.loggedInUser[0].kontoer[model.index].name;

    model.settingsSaved = /*HTML*/ `
    <h3 class="settingsFlex">Endringene er lagret.</h3>
    `;
    console.log(model.loggedInUser[0].kontoer[model.index].name)
    settings(); 
}