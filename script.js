function getMessage() {
   return "Application  deployment failed."
}

function showMessage() { 
   document.getElementById("message").textContent = getMessage();
}

if(typeof module !== 'undefined' && module.exports) {
   module.exports = { getMessage };
}