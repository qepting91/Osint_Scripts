function searchCVEsByKeywordAndPublicationDate() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const keywords = sheet.getRange("A2:A" +
    sheet.getLastRow()).getValues().flat();
    const apiKey = "";
    const apiUrl = "https://services.nvd.nist.gov/rest/json/cves/2.0";
    const pubStartDate = "2023-11-01T00:00:00.000Z"; // Start date in
    ISO-8601 format
    const pubEndDate = "2024-02-28T23:59:59.999Z";
    const KeywordExactMatch = "KeywordExactMatch"// End date in ISO-8601
    format
    
    // Check and log keywords
    console.log("Keywords:", keywords);
    
    keywords.forEach((keyword) => {
    const params = {
    "pubStartDate": pubStartDate,
    "pubEndDate": pubEndDate,
    "keywordSearch": keyword,
    };
    
    const query = Object.keys(params).map(key => encodeURIComponent(key)
    + "=" + encodeURIComponent(params[key])).join("&");
    const url = `${apiUrl}?${query}&${KeywordExactMatch}`;
    
    console.log("Request URL:", url); // Log the URL to debug if needed
    
    const options = {
    method: "get",
    headers: {
    "apiKey": apiKey
    },
    muteHttpExceptions: true
    };
    
    const response = UrlFetchApp.fetch(url, options);
    
    console.log("Response Code:", response.getResponseCode()); // Log
    response code for debugging
    
    if (response.getResponseCode() === 200) {
    const data = JSON.parse(response.getContentText());
    
    if (data.vulnerabilities && data.vulnerabilities.length > 0) {
    data.vulnerabilities.forEach((vulnerabilityData, index) => {
    const vulnerability = vulnerabilityData.cve;
    const cvssData = (vulnerability.metrics &&
    
    vulnerability.metrics.cvssMetricV31) ?
    vulnerability.metrics.cvssMetricV31[0].cvssData : {};
    
    const rowData = [
    vulnerability.id,
    vulnerability.descriptions[0].value,
    cvssData.attackVector || '',
    cvssData.attackComplexity || '',
    cvssData.privilegesRequired || '',
    cvssData.baseScore || '',
    cvssData.baseSeverity || ''
    ];
    
    console.log("Row Data for CVE ID " + vulnerability.id + ":",
    
    rowData); // Log row data for debugging
    
    // Write data to the next available row in the sheet