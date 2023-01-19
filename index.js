////////--------------------------------------------D--------------------------------------------/////
////////----------------------------------------------DE--------------------------------------------/////
////////-----------------------------------------------DEP--------------------------------------------/////
////////-------------------------------------------------DEPO--------------------------------------------/////
////////---------------------------------------------------DEPOS--------------------------------------------/////
////////-----------------------------------------------------DEPOSI--------------------------------------------/////
////////-------------------------------------------------------DEPOSIT--------------------------------------------/////



//add event listener to the button
document.getElementById('depositbtn').addEventListener('click', function name(params) {
 //step- 2 :got the depsit amount from the input box 
 //step- 2 : for input box use .value for getting the input amount
    const depfield = document.getElementById('depfield');
    const NewdepositAmount  = parseFloat( depfield.value);
    //step- 3 : get the current deposit total 

    //for non-input or text value we use to get the '.innertext' 
    const depositTotalelement = document.getElementById('depositTotal');
    const  previusdepositTotal=parseFloat(depositTotalelement.innerText ) ;
   //step- 4 :add number to set the total deposit
    const currentDepositAmount =previusdepositTotal+NewdepositAmount
    
    depositTotalelement.innerText=currentDepositAmount;
    


    //step- 5 : get the balance current total 
    const balanceElement = document.getElementById('balaceTotal');
    const currentBalance =parseFloat(balanceElement.innerText ) ;
    //step- 6 :calculate current total balance
    const currentBalanceTotal =currentBalance+NewdepositAmount;
    //set the balance total
    balanceElement.innerText=currentBalanceTotal;

   
   
   
   
   
   
   
   
   
   
   
   
 //clear the deposit amount in the field
    depfield.value= '';
});





////////-------------------------------------------W--------------------------------------------/////
////////----------------------------------------------WI--------------------------------------------/////
////////-----------------------------------------------WITH--------------------------------------------/////
////////-------------------------------------------------WITHDR--------------------------------------------/////
////////---------------------------------------------------WITHDRAW--------------------------------------------/////
////////-----------------------------------------------------WITHDRAWS--------------------------------------------/////
////////-------------------------------------------------------WITHDRAWAL--------------------------------------------/////



//add event listener to the button
document.getElementById('withdrawbtn').addEventListener('click', function name(params) {

    //step- 2 :got the withdrawal amount from the input box
   const wdfield= document.getElementById('wdfield');
   const NewwithdrawalAmount  = parseFloat( wdfield.value);
   
   //step- 3 : get the current withdrawal total
   
   //for non-input or text value we use to get the '.innertext' 
   const withdrawalTotalelement = document.getElementById('withdrawTotal');
   const  previuswithdrawalTotal=parseFloat(withdrawalTotalelement.innerText ) ;
   //step- 4 :add number to set the total withdrawal
   
   const currentWithdrawalAmount =previuswithdrawalTotal+NewwithdrawalAmount;
   
   withdrawalTotalelement.innerText=currentWithdrawalAmount;
   
   //step- 5 : get the balance current total

   const balanceElement = document.getElementById('balaceTotal');
   const currentBalance =parseFloat(balanceElement.innerText ) ;
   //step- 6 :calculate current total balance
   const wcurrentBalanceTotal =currentBalance-NewwithdrawalAmount;
   //set the balance total
   balanceElement.innerText=wcurrentBalanceTotal;







//last step
   wdfield.value= '';

}) ;