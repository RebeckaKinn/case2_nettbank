let uttakNumber = model.loggedInUser[0].uttak.length;
    let uttak0 = uttakNumber -1;
    let uttak1 = uttakNumber -2;
    let uttak2 = uttakNumber -3;
    if(model.loggedInUser[0].uttak < 2){
        model.uttakSite += /*HTML*/`
        <div class="uttakNameTitle">NAVN</div>
            <div class="uttakName1">${model.loggedInUser[0].uttak[uttak0].name}</div>
            <div class="uttakName2">${model.loggedInUser[0].uttak[uttak1].name}</div>
            <div class="uttakName3">${model.loggedInUser[0].uttak[uttak2].name}</div>
        <div class="uttakSumTitle">SUM</div>
            <div class="uttakSum1">${model.loggedInUser[0].uttak[uttak0].sum}</div>
            <div class="uttakSum2">${model.loggedInUser[0].uttak[uttak1].sum}</div>
            <div class="uttakSum3">${model.loggedInUser[0].uttak[uttak2].sum}</div>
        <div class="uttakDateTitle">DATO</div>
            <div class="uttakDate1">${model.loggedInUser[0].uttak[uttak0].date}</div>
            <div class="uttakDate2">${model.loggedInUser[0].uttak[uttak1].date}</div>
            <div class="uttakDate3">${model.loggedInUser[0].uttak[uttak2].date}</div>
        `;
        }




        let innskuddNumber = model.loggedInUser[0].innskudd.length;
        let innskudd0 = innskuddNumber -1;
        let innskudd1 = innskuddNumber -2;
        let innskudd2 = innskuddNumber -3;
        model.innskuddSite += /*HTML*/`
        <div class="inskuddNameTitle">NAVN</div>
            <div class="innskuddName1">${model.loggedInUser[0].innskudd[innskudd0].name}</div>
            <div class="innskuddName2">${model.loggedInUser[0].innskudd[innskudd1].name}</div>
            <div class="innskuddName3">${model.loggedInUser[0].innskudd[innskudd2].name}</div>
        <div class="inskuddSumTitle">SUM</div>
            <div class="innskuddSum1">${model.loggedInUser[0].innskudd[innskudd0].sum}</div>
            <div class="innskuddSum2">${model.loggedInUser[0].innskudd[innskudd1].sum}</div>
            <div class="innskuddSum3">${model.loggedInUser[0].innskudd[innskudd2].sum}</div>
        <div class="inskuddDateTitle">DATO</div>
            <div class="innskuddDate1">${model.loggedInUser[0].innskudd[innskudd0].date}</div>
            <div class="innskuddDate2">${model.loggedInUser[0].innskudd[innskudd1].date}</div>
            <div class="innskuddDate3">${model.loggedInUser[0].innskudd[innskudd2].date}</div>
        `;