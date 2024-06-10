function checkDomainRegistrationDates() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var startRow = 2; // Assuming row 1 is for headers
    var numRows = sheet.getLastRow() - 1;
    var dataRange = sheet.getRange(startRow, 1, numRows, 1);
    var data = dataRange.getValues();
    var apiKey = ""; // Your API key
    
    var sleedDuration = 1000;
    
    for (var i = 0; i < data.length; ++i) {
    
    var row = data[i];
    var domain = row[0]; // Your domain is in the first column
    var apiUrl =
    "https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=" + apiKey
    + "&domainName=" + domain + "&outputFormat=JSON";
    
    var options = {
    'method' : 'get',
    'contentType': 'application/json',
    'muteHttpExceptions': true // To handle HTTP errors more
    gracefully
    };
    
    // Fetches the domain registration date from the API
    try {
    var response = UrlFetchApp.fetch(apiUrl, options);
    var json = JSON.parse(response.getContentText());
    var registrationDate = json.WhoisRecord.createdDate;
    // Write the registration date back to the sheet in the second
    column
    sheet.getRange(startRow + i, 2).setValue(registrationDate);
    } catch (e) {
    // Log any errors and mark the registration date as unavailable
    Logger.log(e.toString());
    sheet.getRange(startRow + i, 2).setValue("Unavailable");
    }
    Utilities.sleep(sleedDuration)
    }
    }