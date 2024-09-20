

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
    const p=document.createElement('p');
    p.innerText= `Added Money $ ${addMoneyNumber} and updated account balance is ${newBalance}`;
    document.getElementById('transection-container').appendChild(p);
      }

      else {
        alert("failed due to wrong Number or Pin")
      }
      }
      
)

// cashout/ cashout btn function
document.getElementById("cash-out-btn").addEventListener('click',function(event){
    event.preventDefault();
    const cashoutMoney=document.getElementById('cashout-amount').value;
      const cashoutMoneyNumber=parseFloat(cashoutMoney);
      const pin=document.getElementById('cashout-pin').value;
      console.log(cashoutMoney,pin);
      if (pin==='1234'){
        let balanceMoney=document.getElementById('balance').innerText;
        let balanceMoneyNumber=parseFloat(balanceMoney);
        const newBalance=balanceMoneyNumber-cashoutMoneyNumber;
    console.log(newBalance);
    document.getElementById('balance').innerText=newBalance; 

    const p=document.createElement('p');
    p.innerText= `Cashed Out $ ${cashoutMoneyNumber} and updated account balance is ${newBalance}`;
    document.getElementById('transection-container').appendChild(p);
      }
      else {
        alert("failed due to wrong input in Number or Pin")
      }

})

// PayBill btn function 
document.getElementById('paybill-btn').addEventListener('click',function(event){
event.preventDefault();
const billPayMoney=document.getElementById('payBill-amount').value;
      const billPayMoneyNumber=parseFloat(billPayMoney);
      const pin=document.getElementById('paybill-pin').value;
      console.log(billPayMoneyNumber,pin);
      if (pin==='1234'){
        let balanceMoney=document.getElementById('balance').innerText;
        let balanceMoneyNumber=parseFloat(balanceMoney);
        const newBalance=balanceMoneyNumber-billPayMoneyNumber;
    console.log(newBalance);
    document.getElementById('balance').innerText=newBalance; 
    const p=document.createElement('p');
    p.innerText= `Bill paid: $ ${billPayMoneyNumber} and updated account balance is ${newBalance}`;
    document.getElementById('transection-container').appendChild(p);
      }
      else {
        alert("failed due to wrong input in Number or Pin")
      }


})