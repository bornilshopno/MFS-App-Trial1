

// add money/ add-amount btn function
document.getElementById("add-amount-btn").addEventListener('click',function(event){
      event.preventDefault();
      const addMoney=document.getElementById('add-amount').value;
      const addMoneyNumber=parseFloat(addMoney);
      const pin=document.getElementById('pin-number').value;
      console.log(addMoney,pin)
      if (pin==='1234'){
        let balanceMoney=document.getElementById('balance').innerText;
        let balanceMoneyNumber=parseFloat(balanceMoney);
        const newBalance=balanceMoneyNumber+addMoneyNumber;
    console.log(newBalance);
    document.getElementById('balance').innerText=newBalance; 
      }
})