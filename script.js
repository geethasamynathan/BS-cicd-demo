function getMessage() {
   return "Build Pipeline is working fine. Application is deployed successfully."
}

function showMessage() { 
   document.getElementById("message").textContent = getMessage();
}

if(typeof module !== 'undefined' && module.exports) {
   module.exports = { getMessage };
}