## Scripts

### dnssearch.js

This script checks domain registration dates using the WhoisXMLAPI. It retrieves domain names from the first column of the active sheet in a Google Spreadsheet and writes the registration dates back to the second column.

#### Requirements
- A Google Spreadsheet with domain names in the first column, starting from row 2
- A WhoisXMLAPI API key (replace `apiKey` variable with your own key)

#### Usage
1. Open your Google Spreadsheet.
2. Go to "Tools" > "Script editor" to open the Google Apps Script editor.
3. Copy and paste the contents of `dnssearch.js` into the script editor.
4. Replace the `apiKey` variable with your own WhoisXMLAPI API key.
5. Save the script and run the `checkDomainRegistrationDates` function.

### nvdsearch.js

This script searches for Common Vulnerabilities and Exposures (CVEs) by keyword and publication date range using the National Vulnerability Database (NVD) API. It retrieves keywords from the first column of the active sheet in a Google Spreadsheet and writes the CVE details to the sheet.

#### Requirements
- A Google Spreadsheet with keywords in the first column, starting from row 2
- An NVD API key (replace `apiKey` variable with your own key)

#### Usage
1. Open your Google Spreadsheet.
2. Go to "Tools" > "Script editor" to open the Google Apps Script editor.
3. Copy and paste the contents of `nvdsearch.js` into the script editor.
4. Replace the `apiKey` variable with your own NVD API key.
5. Adjust the `pubStartDate` and `pubEndDate` variables to set the desired publication date range for the CVE search.
6. Save the script and run the `searchCVEsByKeywordAndPublicationDate` function.

## API Keys

To use these scripts, you'll need API keys for the respective services:

- WhoisXMLAPI: Sign up at [https://www.whoisxmlapi.com](https://www.whoisxmlapi.com) to obtain an API key.
- NVD API: Request an API key from the [National Vulnerability Database](https://nvd.nist.gov/developers/request-an-api-key).

Please make sure to replace the `apiKey` variables in the scripts with your own API keys before running them.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.