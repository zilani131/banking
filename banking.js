// deposit button
document.getElementById('deposit-btn').addEventListener('click',function(){
    const previousDepositText=document.getElementById('previous-deposit-text').innerText;
    const previousDepositValue=parseFloat(previousDepositText)
    const currentDepositText=document.getElementById('current-deposit-text').value;
    const currentDepositValue=parseFloat(currentDepositText)
    const totalDepositValue=previousDepositValue+currentDepositValue;
    document.getElementById('previous-deposit-text').innerText=totalDepositValue;
    document.getElementById('current-deposit-text').value=''  
     const previousBalanceText=document.getElementById('previous-balance-text').innerText;
     const previousBalaceValue=parseFloat(previousBalanceText)
     const totalBalance=currentDepositValue+previousBalaceValue;
     document.getElementById('previous-balance-text').innerText=totalBalance;
})