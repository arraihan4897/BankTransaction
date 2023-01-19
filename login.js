// add event listener with the submit button 
document.getElementById('click').addEventListener('click', function name(params) {
   const emailField = document.getElementById('exampleInputEmail1').value;
   console.log(emailField);
   const passField = document.getElementById('exampleInputPassword1').value;
   console.log(passField);

   if (emailField === 'iamgorib@gmail.com' && passField === '12345') {

  

    window.location.href = 'index.html';
      alert('You are logged in');
   }
   else{
    alert('Invalid Credentials');
   }
});
  
























