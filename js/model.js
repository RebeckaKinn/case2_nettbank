const model = {
    site: document.getElementById(`app`),
    users: [
        {name: 'Rebecka',
        lastname: 'Kinn',
        password: 123,
        
        brukskonto: {name: 'Brukskonto', sum: 100, date: '13.12.2022'},
        sparekonto: {name: 'Sparekonto', sum: 200, date: '13.12.2022'},
        bsu: {name: 'BSU', sum: 1000, date: '13.12.2022'},
        fond: {name: 'Fond', sum: 500, date: '13.12.2022'},
        aksjer: {name: 'Aksjer', sum: 0, date: '13.12.2022'},
        lån: {name: 'Lån', sum: 10000, date: '13.12.2022'},
        mastercard: {name: 'Mastercard', sum: 467, date: '13.12.2022'},
    },
    ],

    totalsum: 0,
}