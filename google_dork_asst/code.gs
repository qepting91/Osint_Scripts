function onOpen() {
var ui = SpreadsheetApp.getUi();
ui.createMenu('Dork Generator')
.addItem('Open Sidebar', 'showSidebar')
.addToUi();
setupDataSheet(); // Ensure the data sheet is correctly set up
}

function showSidebar() {
var html = HtmlService.createHtmlOutputFromFile('Sidebar')
.setTitle('Generate Google Dork')
.setWidth(400);

SpreadsheetApp.getUi().showSidebar(html);
}

function getCategories() {
var sheet =
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Categories");
var categories = sheet.getRange(1, 1, sheet.getLastRow()).getValues();
return categories.flat(); // Flatten the array if it is 2D
}

function generateDork(query, category) {
var sheet =
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data");
if (!sheet) {
Logger.log("Data sheet not found.");
return []; // Return an empty array if the sheet is not found
}
var data = sheet.getDataRange().getValues();
var filteredDorks = data.filter(row => row[4] === category);
var resultDorks = filteredDorks.map(dork => `"${dork[2]}" ${query}`);
return resultDorks.length > 0 ? resultDorks : ["No dorks found."]; //
Return an informative message if no dorks match
}

function setupDataSheet() {
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheetByName("Data");
if (!sheet) {

sheet = ss.insertSheet("Data");
}
var headers = ["ID", "Date", "Dork String", "Category ID", "Category
Name", "Author ID", "Author Name", "URL Title", "Other Details"];
sheet.getRange("A1:I1").setValues([headers]);
sheet.setFrozenRows(1);
}

// This function is meant to run separately via a trigger
function scrapeGoogleDorks() {
var url = "https://www.exploit-db.com/google-hacking-database";
var options = {
"method": "get",
"headers": {
"Accept": "application/json, text/javascript, */*; q=0.01",
"Accept-Encoding": "deflate, gzip, br",
"Accept-Language": "en-US",
"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:60.0)
Gecko/20100101 Firefox/60.0",
"X-Requested-With": "XMLHttpRequest"
},
"muteHttpExceptions": true
};

var response = UrlFetchApp.fetch(url, options);
if (response.getResponseCode() !== 200) {
Logger.log('Error retrieving data');
return;
}

var jsonResponse = JSON.parse(response.getContentText());

var dorks = jsonResponse.data;
var dorksExtracted = dorks.map(function(dork) {
var extractedDork = parseDork(dork.url_title);
return [
dork.id,
dork.date,
extractedDork,
dork.category.cat_id,
dork.category.cat_title,
dork.author_id[0],
dork.author.name
];
});

// Sort the extracted dorks by date in descending order
dorksExtracted.sort(function(a, b) {
return new Date(b[1]) - new Date(a[1]); // Assumes the date is in
the second column
});

var sheet =
SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data");
sheet.getRange(2, 1, dorksExtracted.length,
dorksExtracted[0].length).setValues(dorksExtracted);
}

function parseDork(htmlString) {
var matches = />([^<]+)</.exec(htmlString);
return matches ? matches[1].trim() : 'No dork found';

Unset
}

function createTimeDrivenTriggers() {
ScriptApp.newTrigger('scrapeGoogleDorks')
.timeBased()
.everyDays(1)
.atHour(1) // Run at 1 AM every day
.create();
}