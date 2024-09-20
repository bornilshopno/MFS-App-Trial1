
document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const pinNumber=document.getElementById('pin-number').value;
    if (pinNumber==='1234'){
      window.location.href= "./home.html"
        
    }
    else {
      alert("failed due to wrong credentials ie- Number or Pin")
    }
})