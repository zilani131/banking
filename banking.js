// deposit button
document.getElementById('deposit-btn').addEventListener('click',function(){
    const previousDepositText=document.getElementById('previous-deposit-text').innerText;
    const previousDepositValue=parseFloat(previousDepositText)
    const currentDepositText=document.getElementById('current-deposit-text').value;
    const currentDepositValue=parseFloat(currentDepositText)
    const totalValue=previousDepositValue+currentDepositValue;
    document.getElementById('previous-deposit-text').innerText=totalValue;
    document.getElementById('current-deposit-text').value=''  
     
})