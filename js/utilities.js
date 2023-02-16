function getInputValueById(inputId) {
    const input = document.getElementById(inputId);
    const inputValueString = input.value;
    const inputValue = parseInt(inputValueString);
    return inputValue;

}

function getTextValue (textId){
    const text = document.getElementById(textId);
    const textValue = text.innerText;
    const textValueNumber = parseInt(textValue);
    return textValueNumber;
}

function calSetInputVale(isTrueFalse, inputId) {

    const previousPhoneNumber = getInputValueById(inputId);
    const input = document.getElementById(inputId);
    if (isTrueFalse) {
        const currentPhoneNumber = previousPhoneNumber + 1;
        input.value = currentPhoneNumber;
        return currentPhoneNumber;
    }
    else{
        if(previousPhoneNumber < 2){
            return 1;
        }
        const currentPhoneNumber = previousPhoneNumber - 1;
        input.value = currentPhoneNumber;
        
        return currentPhoneNumber;
    }
}


function calSetTextPrice (quantity, setPriceId, price){

    const currentPhonePrice = price * quantity; 
    const setPhonePrice = document.getElementById(setPriceId);
    setPhonePrice.innerText = currentPhonePrice;

    return currentPhonePrice ; 
}


function calTotalValue(){
    const phonePrice = getTextValue('phone-price');
    const casePrice = getTextValue('case-price');

    const totalPrice = phonePrice + casePrice ;

    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = totalPrice;

    const taxPrice = totalPrice * 0.1;
    const taxTotal = document.getElementById('tax-total');
    taxTotal.innerText = Math.round(taxPrice);

    const totalCost = document.getElementById('total-cost');
    const totalCostPrice =  totalPrice + taxPrice;
    totalCost.innerText = Math.round(totalCostPrice);

    


}



