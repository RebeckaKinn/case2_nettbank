const model = {
    //app
    site: document.getElementById(`app`),
    date: new Date().toLocaleDateString(),
    uttakSite: '',
    innskuddSite: '',
    mineKontoer: '',
    samletOversikt: '',
    settingsSaved: '',
    settingsWrongPassword: '',
    dropdownKontoer: '',
    accountTo: '',
    accountFrom: '',
    newNumber: '',
    
    //input
    loggedInUser: [],
    opprettetKonto: 'Brukskonto',
    createdName: '',
    newKontoName: 'Brukskonto',
    newUserName: '',
    newUserLastName: '',
    payTo: 'Sparekonto',
    warning: '',
    warningPay: '',
    title: '',
    newProfileimg: '',
    newImgProofing: false,
    
    //data
    index: 0,
    totalsum: 0,
    online: false,
    index1: 0,
    index2: 1,
    paied: false,

    users: [
        {name: 'Rebecka',
        lastname: 'Kinn',
        password: '123',
        username: 'beckakinn',
        img: 'img/profilbildet.jpg',
        
        kontoer: [
            {name: 'Brukskonto', sum: 200, date: '13.12.2022', closed: false},
            {name: 'Sparekonto', sum: 3000, date: '13.12.2022', closed: false},
            {name: 'BSU', sum: 21030, date: '13.12.2022', closed: true},
            {name: 'BSU Ekstra', sum: 1000, date: '13.12.2022', closed: true},
            {name: 'Fond', sum: 500, date: '13.12.2022', closed: true},
            {name: 'Depositumskonto', sum: 30000, date: '13.12.2022', closed: true},
            {name: 'Lån', sum: -102576, date: '13.12.2022', closed: true},
            {name: 'Mastercard', sum: 46052, date: '13.12.2022', closed: false},
        ],
        
        uttak: [
            {name: 'butikk', sum: -100, date: '03.12.2022'},
            {name: 'butikk', sum: -100, date: '03.12.2022'},
            {name: 'overføring', sum: -200, date: '21.12.2022'},
            {name: 'regning', sum: -1098, date: '22.12.2022'},
            {name: 'regning', sum: -300, date: '27.12.2022'},
        ],
        
        innskudd: [
            {name: 'lønning', sum: 22500, date: '24.11.2022'},
            {name: 'lønning', sum: 22500, date: '24.11.2022'},
            {name: 'overføring', sum: 500,  date: '19.12.2022'},
            {name: 'overføring', sum: 200, date: '21.12.2022'},
            {name: 'lønning', sum: 22500, date: '24.12.2022'},
        ],
    },
],
}