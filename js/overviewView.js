function overview(){
    getAccounts();
    model.title = 'Alle kontoer';
    model.site.innerHTML = /*HTML*/`
    <div class="container">
    ${menu()}

    <div class="background"></div>
    <div class="background2"></div>
    <div class="background3"></div>

    <div class="overviewGridTop">
    <div class="overviewName">NAVN</div>
    <div class="overviewSum">SUM</div>
    <div class="overviewDate">DATO</div>
    ${model.samletOversikt}
    </div>
    `;
}
