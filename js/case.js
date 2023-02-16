document.getElementById('btn-case-plus').addEventListener('click', function(){
    const caseQuantity = calSetInputVale( true,'case-input');

     calSetTextPrice(caseQuantity, 'case-price', 59);

     calTotalValue();
})


document.getElementById('btn-case-minus').addEventListener('click', function(){
    const caseQuantity = calSetInputVale( false,'case-input');

    calSetTextPrice(caseQuantity, 'case-price', 59);
    calTotalValue();
})