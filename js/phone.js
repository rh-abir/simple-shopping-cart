
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const phoneQuantity = calSetInputVale(true, 'phone-input');
    calSetTextPrice(phoneQuantity, 'phone-price', 1219);

    calTotalValue();
});

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const phoneQuantity = calSetInputVale(false, 'phone-input');
    
    calSetTextPrice(phoneQuantity, 'phone-price', 1219);
    calTotalValue();
});
