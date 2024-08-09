// Encrypt
function encryptButton(){

function encrypt(message, shift){
  var result ='';
  var charcode =0;

  for (var i=0; i<message.length; i++){
      //Spaces
    if (message[i].includes(' ') || message[i].includes('!')){
      result += message[i];
      continue;
    } //Off the alphabet for lower and upper case
    else if (message[i].charCodeAt() + shift > 122 || (message[i].charCodeAt() +shift > 90 & message[i].charCodeAt() + shift < 97)){
      charcode = message[i].charCodeAt() + shift - 26;
      result += String.fromCharCode(charcode);
    } else {
      //Shifting, code from @AnonymousSB from StackOverflow (first line finds the ASCII number, second line converts it to letter)
      charcode = (message[i].charCodeAt()) + shift;
      result += String.fromCharCode(charcode);
    }
  }
  return result;
}


var messagePrompt = prompt("What message do you want to encrypt?");
var shift = parseInt(prompt("How many letters do you want to shift by? Numbers only"));
var newMessage = encrypt(messagePrompt, shift);

alert("Your encrypted message is " + newMessage);

}
//Decrypt

function decryptButton(){
  function decrypt(message, shift){
  var result ='';
  var charcode = 0;
  
  for (var i=0; i<message.length; i++){
      //Spaces
    if (message[i].includes(' ') || message[i].includes('!')){
      result += message[i];
      continue;
    } //Off the alphabet for lower and upper case
    else if (message[i].charCodeAt() - shift < 97 || message[i].charCodeAt() - shift < 65){
      charcode = message[i].charCodeAt() - shift + 26;
      result += String.fromCharCode(charcode);
    } else {
      //Shifting, code based from @AnonymousSB from StackOverflow (first line finds the ASCII number, second line converts it to letter)
      charcode = (message[i].charCodeAt()) - shift;
      result += String.fromCharCode(charcode);
    }
  }
  return result;
}

//Repeat decryptions
  function repeat(message){
    for (var i=1; i<=26; i++){
      console.log(decrypt(message,i));
    }
console.log(result);

  }

  var messagePrompt = prompt("What message do you want to decrypt?");
  var newMessage = repeat(messagePrompt);
  alert("Check the console for all 26 decryptions.");
    
  }

