const model = {
    site: document.getElementById(`app`),
    date: new Date().toLocaleDateString(),
    uttakSite: '',
    innskuddSite: '',
    mineKontoer: '',
    samletOversikt: '',
    online: false,
    
    users: [
        {name: 'Rebecka',
        lastname: 'Kinn',
        password: '123',
        username: 'beckakinn',
        img: '',
        
        kontoer: [
            {name: 'Brukskonto', sum: 100, date: '13.12.2022'},
            {name: 'Sparekonto', sum: 200, date: '13.12.2022'},
            {name: 'Brukskonto Ekstra', sum: 2001, date: '14.12.2022'},
            {name: 'BSU', sum: 1000, date: '13.12.2022'},
            {name: 'Fond', sum: 500, date: '13.12.2022'},
            {name: 'Aksjer', sum: 0, date: '13.12.2022'},
            {name: 'Lån', sum: 10000, date: '13.12.2022'},
            {name: 'Mastercard', sum: 467, date: '13.12.2022'},
            ],

        uttak: [
            {name: 'butikk', sum: -100, date: '03.12.2022'},
            {name: 'overføring', sum: -200, date: '21.12.2022'},
            {name: 'regning', sum: -300, date: '22.12.2022'},
            ],

        innskudd: [
            {name: 'overføring', sum: 500,  date: '19.12.2022'},
            {name: 'overføring', sum: 200, date: '21.12.2022'},
            {name: 'lønning', sum: 22500, date: '24.12.2022'},
            ],
        },
        ],

    loggedInUser: [],
    totalsum: 0,
}