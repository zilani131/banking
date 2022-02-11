// function for common inputField like deposit and withdraw
function inputField(id){
    const currentText=document.getElementById(id).value;
    const currentValue=parseFloat(currentText)
    document.getElementById(id).value='' 
    return currentValue;
}
// function for common total input field
function totalInputField(currentValue,previoustext){
    // const currentValue=inputField(currentText)

    const previous=document.getElementById(previoustext);
    const previousText=previous.innerText
    const previousValue=parseFloat( previousText)
  
    const totalValue=previousValue+currentValue;
    previous.innerText=totalValue;
    
}
// get total balance
function getTotalBalance(){
    const previousBalanceText=document.getElementById('previous-balance-text');
    const previousBalance=previousBalanceText.innerText
    const previousBalanceValue=parseFloat(previousBalance)
    return previousBalanceValue;
}
// update balance
function totalUpdateBalance(Value,isAdd){
    const previousBalanceText=document.getElementById('previous-balance-text');
    // const previousBalance=previousBalanceText.innerText
    // const previousBalanceValue=parseFloat(previousBalance)
    const previousBalanceValue=getTotalBalance()
    if(isAdd==true)
    {
        const totalBalance=previousBalanceValue+Value;
        previousBalanceText.innerText=totalBalance;
    }
    else{
        const totalBalance=previousBalanceValue-Value;
        previousBalanceText.innerText=totalBalance;
    }
}
document.getElementById('deposit-btn').addEventListener('click',function(){
    //    current input field 
   const currentDepositValue=inputField('current-deposit-text')
//    total input field
        if(currentDepositValue>0){
            totalInputField(currentDepositValue,'previous-deposit-text')
            totalUpdateBalance(currentDepositValue,true)
        }
        
    // const previousDepositText=document.getElementById('previous-deposit-text').innerText;
    // const previousDepositValue=parseFloat(previousDepositText)     
    // const totalDepositValue=previousDepositValue+currentDepositValue;
    // document.getElementById('previous-deposit-text').innerText=totalDepositValue;
     
    //  const previousBalanceText=document.getElementById('previous-balance-text');
    //  const previousBalance=previousBalanceText.innerText
    //  const previousBalaceValue=parseFloat(previousBalance)
    //  const totalBalance=currentDepositValue+previousBalaceValue-currentWithdrawValue;
    //  document.getElementById('previous-balance-text').innerText=totalBalance;
})
// withdraw button
document.getElementById('withdraw-btn').addEventListener('click',function(){
      // current input withdraw
    const currentWithdrawValue=inputField('current-withdraw-text')
    const currentBalance=getTotalBalance()

    // totalinput field with draw
    if(currentWithdrawValue>0 && currentBalance>currentWithdrawValue){
        totalInputField(currentWithdrawValue,'previous-withdraw-text')
    totalUpdateBalance(currentWithdrawValue,false)
    }

    // const previousWithdraw=document.getElementById('previous-withdraw-text');
    // const previousWithdrawText=previousWithdraw.innerText
    // const previousWithdrawValue=parseFloat( previousWithdrawText)
  
    // const totalWithdrawValue=previousWithdrawValue+currentWithdrawValue;
    // previousWithdraw.innerText=totalWithdrawValue;
    
    //  const previousBalanceText=document.getElementById('previous-balance-text').innerText;
    //  const previousBalaceValue=parseFloat(previousBalanceText)
    //  const totalBalance=previousBalaceValue-currentWithdrawValue;
    //  document.getElementById('previous-balance-text').innerText=totalBalance;
})
