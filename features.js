document.getElementById('active-add-money').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('transection-form').classList.add('hidden');
    document.getElementById('pay-bill-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.remove('hidden');
})

document.getElementById('active-cash-out').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('transection-form').classList.add('hidden');
    document.getElementById('pay-bill-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.remove('hidden');
  
})

document.getElementById('active-paybill').addEventListener('click',function(){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('transection-form').classList.add('hidden');
    document.getElementById('pay-bill-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('pay-bill-form').classList.remove('hidden')
})

document.getElementById('active-transection').addEventListener('click',function(){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('transection-form').classList.add('hidden');
    document.getElementById('pay-bill-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transection-form').classList.remove('hidden');


})