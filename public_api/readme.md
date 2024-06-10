### Public API Data Fetcher (publicapi.js)

The `publicapi.js` script fetches data from an unauthenticated API (https://www.cloudinfrastructuremap.com/api/service/all.js) and populates a Google Sheets spreadsheet with the retrieved data. It extracts information about cloud regions and their associated cloud service providers.

#### Setup
1. Open your Google Sheets spreadsheet.
2. Go to "Tools" > "Script editor" to open the Google Apps Script editor.
3. Create a new script file named `publicapi.js`.
4. Copy and paste the contents of the provided `publicapi.js` file into the script editor.
5. Save the script.

#### Usage
1. In the Google Sheets spreadsheet, select the sheet where you want the data to be populated.
2. Run the `fetchAndParseData` function from the script editor.
3. The script will fetch the data from the API, parse it, and populate the selected sheet with the extracted information.
   - The sheet will be cleared before populating the data.
   - The script will set the following headers: "Cloud Service Name", "Metro Area", "Country", "Latitude", "Longitude", "Cloud Region Name", "In Service", "Provider Name", "Zones", "Cloud Region".
   - Each row will contain the details of a cloud region and its associated cloud service provider.

Note: The script assumes a specific structure of the API response. If the API response structure changes, you may need to update the parsing logic in the script.