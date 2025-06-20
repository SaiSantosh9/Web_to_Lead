let captchachecked = false;

if(captchachecked){
function beforeSubmit() {
    // Get the input and output elements
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-In");
    outputdate.value = formattedDate;
    //console.log(typeof inputdate.value);
    // Format the date to Salesforce format (YYYY-MM-DD)
    // // Set the hidden Salesforce field value
    // outputdate.value = formattedDate;
    // // Log for debugging
    // console.log("Lead Date Value:", formattedDate);
    }
}else{
    alert("Please check the recaotcha to submit the lead");
}


 function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
    } } setInterval(timestamp, 500); 

function captchasuccess(){
    captchachecked = true;
    
}
