chrome.runtime.sendMessage("Empty");
chrome.runtime.onMessage.addListener(function(message) {
    if(message[0]['is execute'] == 'true' && window.location.href.indexOf(message[1]['href']) > -1) {
        var totp = new jsOTP.totp();
    
        document.querySelector("#\\32 fpin").value = totp.getOtp(message[2]['secure code']);
        document.querySelector("input.aui-button.aui-button-primary[type=submit]").click();
    }
});