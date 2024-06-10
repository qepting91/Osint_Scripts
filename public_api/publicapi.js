function fetchAndParseData() {
    const url =
    "https://www.cloudinfrastructuremap.com/api/service/all.js";
    const response = UrlFetchApp.fetch(url); // Fetching the URL
    const data = JSON.parse(response.getContentText()); // Parsing JSON
    from the API
    
    // Access the active sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.clear(); // Clear existing data
    const headers = ["Cloud Service Name", "Metro Area", "Country",
    "Latitude", "Longitude", "Cloud Region Name", "In Service", "Provider
    Name", "Zones", "Cloud Region"];
    sheet.appendRow(headers); // Set headers
    
    // Iterate through the data to parse cloud regions and their details
    data.cloud_regions.forEach(region => {
    region.cloud_service_providers.forEach(provider => {
    const row = [
    data.name, // Cloud Services Name
    region.metro_area,
    region.country,
    region.latitude,
    region.longitude,
    
    JavaScript
    provider.cloud_region_name,
    provider.in_service,
    provider.name,
    provider.zones,
    provider.cloud_region
    ];
    sheet.appendRow(row); // Append each row to the sheet
    });
    });
    }