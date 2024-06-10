## Google Sheets and Google Apps Script

### Google Dork Assistant

The Google Dork Assistant is a tool that generates Google dorks based on user input and a predefined set of dork strings stored in a Google Sheets spreadsheet. It consists of two files:

1. `sidebar.html`: The HTML file that defines the user interface for the Google Dork Assistant sidebar in Google Sheets.
2. `code.gs`: The Google Apps Script file that contains the backend logic for generating dorks and interacting with the Google Sheets spreadsheet.

#### Setup
1. Create a new Google Sheets spreadsheet.
2. Go to "Tools" > "Script editor" to open the Google Apps Script editor.
3. Create two new files in the script editor:
   - `sidebar.html`: Copy and paste the contents of the provided `sidebar.html` file.
   - `code.gs`: Copy and paste the contents of the provided `code.gs` file.
4. In the Google Sheets spreadsheet, create two sheets named "Data" and "Categories".
   - In the "Data" sheet, add the following headers in the first row: "ID", "Date", "Dork String", "Category ID", "Category Name", "Author ID", "Author Name", "URL Title", "Other Details".
   - In the "Categories" sheet, add the categories for the dorks in the first column, starting from row 1.
5. Save the script and refresh the Google Sheets spreadsheet.

#### Usage
1. Open the Google Sheets spreadsheet.
2. Go to the "Dork Generator" menu and click "Open Sidebar" to open the Google Dork Assistant sidebar.
3. Enter one or more names in the input fields and select the desired operators (AND/OR) between the names.
4. Select a category from the dropdown menu.
5. Click the "Generate Dork" button to generate Google dorks based on the provided names and category.
6. The generated dorks will be displayed in the sidebar, along with links to perform Google searches using those dorks.

#### Automatic Dork Scraping
The `code.gs` file includes a function called `scrapeGoogleDorks` that automatically scrapes Google dorks from the Google Hacking Database (https://www.exploit-db.com/google-hacking-database) and stores them in the "Data" sheet of the Google Sheets spreadsheet.

To set up automatic dork scraping:
1. Uncomment the `createTimeDrivenTriggers` function in the `code.gs` file.
2. Run the `createTimeDrivenTriggers` function once to create a time-driven trigger that will run the `scrapeGoogleDorks` function daily at 1 AM.

Note: The `scrapeGoogleDorks` function assumes a specific structure of the Google Hacking Database API response. If the API response structure changes, you may need to update the parsing logic in the function.
