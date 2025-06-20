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