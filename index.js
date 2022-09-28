const password = document.getElementById('password');
const passwordLength = 8;
let outputPassword = '';
let characters = 'abcdefghijqlmnopqrstuvwxyzABCDEFGHIJQLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
function generatePassword() {
   document.getElementById('copyButton').innerHTML = 'Copy';
   for(let i = 0; i < passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * characters.length);
      outputPassword += characters.substring(randomNumber, randomNumber + 1);
   }
   password.value = outputPassword;
   outputPassword = '';
}
function clearPassword() {
   document.getElementById('copyButton').innerHTML = 'Copy';
   password.value = '';
}
function copyPassword() {
   if(password.value !== '') {
      password.select();
      password.setSelectionRange(0, 99999); // for mobile devices

      navigator.clipboard.writeText(password.value);

      document.getElementById('copyButton').innerHTML = 'Copied';
   }
}
